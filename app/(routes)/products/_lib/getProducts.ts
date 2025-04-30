import { combineJsonArrays } from "@/app/_lib/combineJsonArrays";
import { ProductData } from "../_types/ProductTypes.type";
import { readdir } from "fs/promises";
import { PRODUCTS_PAGE_SIZE } from "@/app/constants";

interface options {
  sortBy: "all" | "featured" | "az" | "za";
  filters: string;
  page: number;
}

export async function getProducts({ sortBy, filters, page }: options) {
  // get json files
  const dataPath = process.cwd() + "/app/(routes)/products/_data";
  const files = (await readdir(dataPath)).map((path) => dataPath + "/" + path);
  // extract json data
  let data = await combineJsonArrays<ProductData>(files);

  // FILTER
  data = data.filter(({ type }) => {
    // if no filter show all
    if (filters === null || filters.length === 0) return true;

    // filter products
    return filters.includes(type);
  });

  // SORT
  // todo: add featurted sort
  if (sortBy === "az")
    data.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  if (sortBy === "za")
    data.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });

  // PAGINATION
  const increase = (page - 1) * PRODUCTS_PAGE_SIZE;
  data = data.slice(0 + increase, PRODUCTS_PAGE_SIZE + increase);

  return data;
}
