import { ActionDispatch } from "react";

export interface FilterState {
  glass: boolean;
  nicotineVapes: boolean;
  herbalVapes: boolean;
  cartBatteries: boolean;
  cigars: boolean;
  tobacco: boolean;
  nicotinePouches: boolean;
  kratom: boolean;
  [id: string]: boolean;
}

export enum FilterValues {
  GLASS = "glass",
  NVAPE = "nicotineVapes",
  HVAPE = "herbalVapes",
  CBAT = "cartBatteries",
  CIGARS = "cigars",
  TOBACCO = "tobacco",
  KRATOM = "kratom",
  NPOUCH = "nicotinePouches",
  RESET = "reset",
}

export interface FilterAction {
  type: FilterValues;
}

export interface ContextState {
  state: FilterState;
  dispatch: ActionDispatch<[action: FilterAction]>;
}

export interface ProductData {
  imageSrc: string;
  name: string;
  type: string;
}
