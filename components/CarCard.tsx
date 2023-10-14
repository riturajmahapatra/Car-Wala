"use client";
import { Carprops } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";

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
    </div>
  );
};

export default CarCard;
