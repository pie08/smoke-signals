import { statSync } from "fs";
import { readdir, stat } from "fs/promises";
import { glob } from "glob";
import { imageSizeFromFile } from "image-size/fromFile";

async function addAllFilesRecursive(rootPath: string, pathArr: string[]) {
  // get all files
  const files = await readdir(rootPath);

  // get all directories
  const directories = await glob(rootPath + "/**/*", {
    nodir: true,
  });
  console.log(directories);

  // // add all non directories to arr
  // files.forEach((path) => {
  //   const stats = statSync(rootPath + "/" + path);

  //   if (stats.isFile()) {
  //     pathArr.push(path);
  //   }
  // });

  // // recursively call this with cild directory
  // files.forEach((path) => {
  //   const stats = statSync(rootPath + "/" + path);

  //   if (stats.isDirectory()) {
  //     addAllFilesRecursive(rootPath + "/" + path, pathArr);
  //   }
  // });
}

async function getAllFilePaths(rootDir: string) {
  const parentPath = process.cwd() + rootDir;

  const files = await glob(parentPath + "/**/*", {
    nodir: true,
  });

  const filesWithData = files.map(async (path) => {
    const { width, height } = await imageSizeFromFile(
      process.cwd() + "/" + path
    );
    return { path: "/" + path.slice(7).replaceAll("\\", "/"), width, height };
  });

  return Promise.all(filesWithData);
}

export default getAllFilePaths;
