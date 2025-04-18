import { readdir, stat } from "fs/promises";
import { glob } from "glob";
import { imageSizeFromFile } from "image-size/fromFile";

async function addAllFilesRecursive(rootPath: string, pathArr: string[] = []) {
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
}

async function getAllFilePaths(rootDir: string) {
  const parentPath = process.cwd() + rootDir;

  const files = await addAllFilesRecursive(parentPath);
  console.log(files);

  const filesWithData = files.map(async (path) => {
    const { width, height } = await imageSizeFromFile(path);
    return {
      path: path.split("public")[1].replaceAll("\\", "/"),
      width,
      height,
    };
  });

  return Promise.all(filesWithData);
}

export default getAllFilePaths;
