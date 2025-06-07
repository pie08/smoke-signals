import { readdir, stat } from "fs/promises";
import { writeFile } from "fs/promises";
import { imageSizeFromFile } from "image-size/fromFile";
import path from "path";

export interface ManifestData {
  path: string;
  width: number;
  height: number;
}

async function addAllFilesRecursive(rootPath: string, pathArr: string[] = []) {
  try {
    // get all files
    const files = await readdir(rootPath);

    // add all non directories to arr
    for (const fileName of files) {
      const stats = await stat(path.join(rootPath, fileName));

      if (stats.isFile()) {
        pathArr.push(path.join(rootPath, fileName));
      }
    }

    // recursively call this with child directories
    for (const childDir of files) {
      const stats = await stat(path.join(rootPath, childDir));

      if (stats.isDirectory()) {
        await addAllFilesRecursive(path.join(rootPath, childDir), pathArr);
      }
    }

    return pathArr;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

const baseDir = path.join(process.cwd(), "public/assets/images");

async function generateManifest() {
  // get all files in baseDir
  const files = await addAllFilesRecursive(baseDir);

  // add data to files
  const filesWithData = await Promise.all(
    files.map(async (path) => {
      try {
        // dont include hidden files
        if (path.split("/").at(-1)![0] === ".") return;

        // add image data
        const { width, height } = await imageSizeFromFile(path);
        return {
          path: path.split("public")[1].replaceAll("\\", "/"),
          width,
          height,
        };
      } catch (err) {
        console.error(err);
        throw err;
      }
    })
  );
  const outputPath = path.join(
    process.cwd(),
    "manifests",
    "assets-manifest.json"
  );
  await writeFile(outputPath, JSON.stringify(filesWithData, null, 2));
  console.log("✅ Manifest generated at assets-manifest.json");
}

generateManifest();
