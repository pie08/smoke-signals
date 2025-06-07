import { readdir, writeFile } from "fs/promises";
import path from "path";

interface ProductData {
  imageSrc: string;
  name: string;
  type: string;
  isFeatured: boolean;
}

// takes in a folder from the products directory and creates an object for each product
export default async function generateProductsFromDir(productsPath: string) {
  try {
    // get product category from path
    const category = productsPath.split(/[\\\\/]/).pop() || "";
    // get files
    const files = await readdir(productsPath);

    // add data
    return files.map((name) => {
      const productName = name.split(".")[0].split("-")[0].replace("-", " ");
      const isFeatured = name.includes("-f");
      return {
        imageSrc: `/assets/images/products/${category}/${name}`,
        name: productName,
        type: category,
        isFeatured,
      };
    }) as ProductData[];
  } catch (err) {
    throw err;
  }
}

async function generateProductsManifest() {
  // path to products
  const productsDir = path.resolve(
    path.join(process.cwd(), "public/assets/images/products")
  );

  // read all files in products directory and append file name to productsDir
  const productDirectories = (await readdir(productsDir)).map(
    (productCategory) => path.join(productsDir, productCategory)
  );

  let products: ProductData[] = [];
  for (const productDirectory of productDirectories) {
    const data = await generateProductsFromDir(productDirectory);
    products = [...products, ...data];
  }

  const outputPath = path.join(
    process.cwd(),
    "manifests",
    "products-manifest.json"
  );
  await writeFile(outputPath, JSON.stringify(products, null, 2));
  console.log("✅ Manifest generated at products-manifest.json");
}

generateProductsManifest();
