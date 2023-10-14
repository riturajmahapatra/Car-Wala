import { MouseEventHandler } from "react";

export interface CustomBtnProps {
  title: string;
  customclass?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit" /* ? dedicates optional or not */;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer?: string;
  setManuFacturer?: (manufacturer: string) => void;
}

export interface Carprops {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
