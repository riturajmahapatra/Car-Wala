"use client";
import { CustomBtnProps } from "@/types";
import Image from "next/image";
import React from "react";

const CustomBtn = ({
  customclass,
  title,
  handleClick,
  btnType,
  rightIcon,
  textStyles,
}: CustomBtnProps) => {
  return (
    <>
      <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${customclass}`}
        onClick={handleClick}
      >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image
              src={rightIcon}
              alt="right-icon"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
        )}
      </button>
    </>
  );
};

export default CustomBtn;
