export enum FilterValues {
  GLASS = "glass",
  DVAPE = "disposableVapes",
  RVAPE = "refillableVapes",
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
  isFeatured: boolean;
}
