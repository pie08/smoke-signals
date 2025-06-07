import paginateProducts from "./paginateProducts";
import productsManifest from "@/manifests/products-manifest.json";

interface options {
  sortBy: "all" | "featured" | "az" | "za";
  filters: string;
  page?: number;
}

// get all images dynamically, image file names will be the product names, every file in the directory will become its own product
export async function getProducts({ sortBy, filters, page }: options) {
  // FILTER
  let products = productsManifest.filter(({ type }) => {
    // if no filter show all
    if (filters === null || filters.length === 0) return true;

    // filter products
    return filters.includes(type);
  });

  // SORT
  if (sortBy === "featured") {
    products.sort((a, b) => {
      if (a.isFeatured) {
        return -1;
      }
      return 0;
    });
  }
  if (sortBy === "az")
    products.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  if (sortBy === "za")
    products.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });

  // PAGINATION
  if (page) {
    products = paginateProducts(products, page);
  }

  return products;
}
