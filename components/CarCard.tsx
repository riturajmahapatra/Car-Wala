"use client";
import { Carprops } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import { CustomBtn } from ".";

interface CarCardProps {
  car: Carprops;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className=" flex mt-6 text-[32px] font-semibold">
        <span className="self-start text-[18px]">₹</span>
        {carRent}
        <span className="self-end text-[18px]">/day</span>
      </p>
      <div className="relative w-full -w-40 object-contain my-3">
        <Image
          src={`/hero.png`}
          alt="car-img"
          height={500}
          width={500}
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-500">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={`/steering-wheel.svg`}
              alt="transmittion"
              width={22}
              height={22}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={`/tire.svg`} alt="tire" width={22} height={22} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={`/gas.svg`} alt="gas" width={22} height={22} />
            <p className="text-[14px]">{city_mpg}KM/L</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomBtn
            title="View More"
            customclass={
              "w-full py-[16px] rounded-full bg-primary-blue text-white"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
