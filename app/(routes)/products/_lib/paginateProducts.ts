import { PRODUCTS_PAGE_SIZE } from "@/app/constants";
import { ProductData } from "../_types/ProductTypes.type";

export default function paginateProducts(
  products: ProductData[],
  page: number
) {
  const increase = (page - 1) * PRODUCTS_PAGE_SIZE;
  return products.slice(0 + increase, PRODUCTS_PAGE_SIZE + increase);
}
