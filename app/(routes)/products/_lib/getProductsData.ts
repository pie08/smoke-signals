import { combineJsonFiles } from "@/app/_lib/combineJsonFiles";
import { ProductData } from "../_types/ProductTypes.type";
import { readdir } from "fs/promises";

export async function getProductsData() {
  // get json files
  const dataPath = process.cwd() + "/app/(routes)/products/_data";
  const files = (await readdir(dataPath)).map((path) => dataPath + "/" + path);
  // extract json data
  const data = await combineJsonFiles<ProductData>(files);

  return data;
}
