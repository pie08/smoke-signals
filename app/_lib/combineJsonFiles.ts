import { readFile } from "fs/promises";

export async function combineJsonFiles<T>(files: string[]) {
  let output: T[] = [];

  for (const path of files) {
    const file = (await readFile(path)).toString();
    const data = JSON.parse(file);
    output = [...output, ...data];
  }

  return output;
}
