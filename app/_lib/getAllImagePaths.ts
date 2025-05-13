import { existsSync } from "fs";
import { readdir, stat } from "fs/promises";
import { glob } from "glob";
import { imageSizeFromFile } from "image-size/fromFile";
import path from "path";

export interface ImageData {
  path: string;
  width: number;
  height: number;
}

//
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

async function getAllImagePaths(rootDir: string) {
  // get path to directory
  const parentPath = path.resolve(path.join(process.cwd(), rootDir));

  // get all file paths in directory
  const files = await addAllFilesRecursive(parentPath);

  // add data to files
  const filesWithData = files.map(async (path) => {
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
  });

  // filter out undefined
  const output = (await Promise.all(filesWithData)).filter(
    (data) => data !== undefined
  );
  return output;
}

export default getAllImagePaths;
