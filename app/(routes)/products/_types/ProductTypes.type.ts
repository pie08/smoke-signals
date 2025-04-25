import { ActionDispatch } from "react";

export enum FilterValues {
  GLASS = "glass",
  NVAPE = "nicotineVapes",
  HVAPE = "herbalVapes",
  CBAT = "cartBatteries",
  CIGARS = "cigars",
  TOBACCO = "tobacco",
  KRATOM = "kratom",
  NPOUCH = "nicotinePouches",
  VJUICE = "vapeJuice",
  RESET = "reset",
}

export interface ProductData {
  imageSrc: string;
  name: string;
  type: string;
}
