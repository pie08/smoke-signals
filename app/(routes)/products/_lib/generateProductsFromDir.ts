import { readdir } from "fs/promises";
import { ProductData } from "../_types/ProductTypes.type";

// takes in a folder from the products directory and creates an object for each product
export default async function generateProductsFromDir(
  productsPath: string,
  suffixString?: string
) {
  try {
    // get product category from path
    const category = productsPath.split("\\").pop() || "";
    // get files
    const files = await readdir(productsPath);

    // add data
    return files.map((name) => {
      const productName = name.split(".")[0].split("-u")[0].replace("-", " ");
      return {
        imageSrc: `/assets/images/products/${category}/${name}`,
        name: productName + ` ${suffixString || ""}`,
        type: category,
      };
    }) as ProductData[];
  } catch (err) {
    throw err;
  }
}
