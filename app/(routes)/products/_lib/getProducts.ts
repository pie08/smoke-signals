import { combineJsonArrays } from "@/app/_lib/combineJsonArrays";
import { FilterValues, ProductData } from "../_types/ProductTypes.type";
import { readdir } from "fs/promises";
import { PRODUCTS_PAGE_SIZE } from "@/app/constants";
import paginateProducts from "./paginateProducts";
import generateProductsFromDir from "./generateProductsFromDir";
import camelToNormal from "./camelToNormal";
import { existsSync } from "fs";

interface options {
  sortBy: "all" | "featured" | "az" | "za";
  filters: string;
  page?: number;
}

// get all images dynamically, image file names will be the product names, every file in the directory will become its own product
export async function getProducts({ sortBy, filters, page }: options) {
  // ! DELETE
  const exists = existsSync(process.cwd() + "/public/assets/images/products");
  if (exists) throw new Error(exists ? "true" : "false");
  const productDirectories = (
    await readdir(process.cwd() + "/public/assets/images/products")
  ).map((path) => process.cwd() + "/public/assets/images/products/" + path);
  let data: ProductData[] = [];
  for (const categoryPath of productDirectories) {
    const categoryData = await generateProductsFromDir(categoryPath);
    data = [...data, ...categoryData];
  }

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
  if (page) {
    data = paginateProducts(data, page);
  }

  return data;
}
