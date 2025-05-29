import { readdir } from "fs/promises";
import path from "path";
import { ProductData } from "../_types/ProductTypes.type";
import generateProductsFromDir from "./generateProductsFromDir";
import paginateProducts from "./paginateProducts";

interface options {
  sortBy: "all" | "featured" | "az" | "za";
  filters: string;
  page?: number;
}

// get all images dynamically, image file names will be the product names, every file in the directory will become its own product
export async function getProducts({ sortBy, filters, page }: options) {
  // path to products
  const productsPath = path.resolve(
    path.join(process.cwd(), "public/assets/images/products")
  );

  // read all files in products directory and append file name to productsPath
  const productDirectories = (await readdir(productsPath)).map(
    (productFileName) => path.join(productsPath, productFileName)
  );

  // create product data
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
  if (sortBy === "featured") {
    data.sort((a, b) => {
      if (a.isFeatured) {
        return -1;
      }
      return 0;
    });
  }
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
