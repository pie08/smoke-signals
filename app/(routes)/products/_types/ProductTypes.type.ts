import { ActionDispatch } from "react";

export interface FilterState {
  glass: boolean;
  nicotineVapes: boolean;
  herbalVapes: boolean;
  cartBatteries: boolean;
  cigars: boolean;
  tobacco: boolean;
  kratom: boolean;
}

export enum FilterValues {
  GLASS = "glass",
  NVAPE = "nicotineVapes",
  HVAPE = "herbalVapes",
  CBAT = "cartBatteries",
  CIGARS = "cigars",
  TOBACCO = "tobacco",
  KRATOM = "kratom",
  RESET = "reset",
}

export interface FilterAction {
  type: FilterValues;
}

export interface ContextState {
  state: FilterState;
  dispatch: ActionDispatch<[action: FilterAction]>;
}
