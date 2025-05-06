import { readdir } from "fs/promises";
import { ProductData } from "../_types/ProductTypes.type";

export default async function generateProductsFromDir(directory: string) {
  try {
    const category = directory.split("/").pop() || "";
    const files = await readdir(directory);
    // add data
    return files.map((name) => {
      return {
        imageSrc: `/assets/images/products/${category}/${name}`,
        name: name.split(".")[0].replace("-", " "),
        type: category,
      };
    }) as ProductData[];
  } catch (err) {
    throw err;
  }
}
