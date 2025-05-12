import { existsSync } from "fs";
import { readdir, stat } from "fs/promises";
import { glob } from "glob";
import { imageSizeFromFile } from "image-size/fromFile";

export interface ImageData {
  path: string;
  width: number;
  height: number;
}

async function addAllFilesRecursive(rootPath: string, pathArr: string[] = []) {
  try {
    const exists = existsSync(rootPath);
    console.log(exists);
    // get all files
    const files = await readdir(rootPath);

    // add all non directories to arr
    for (const path of files) {
      const stats = await stat(rootPath + "/" + path);

      if (stats.isFile()) {
        pathArr.push(rootPath + "/" + path);
      }
    }

    // recursively call this with cild directory
    for (const path of files) {
      const stats = await stat(rootPath + "/" + path);

      if (stats.isDirectory()) {
        await addAllFilesRecursive(rootPath + "/" + path, pathArr);
      }
    }

    return pathArr;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function getAllImagePaths(rootDir: string) {
  const parentPath = process.cwd() + rootDir;

  const files = await addAllFilesRecursive(parentPath);

  const filesWithData = files.map(async (path) => {
    try {
      if (path.split("/").at(-1)![0] === ".") return;

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
  });

  // filter out undefined
  const output = (await Promise.all(filesWithData)).filter(
    (data) => data !== undefined
  );
  return output;
}

export default getAllImagePaths;
