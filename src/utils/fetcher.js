import fs from "fs/promises";

export async function getData(filename) {
  const path = `./data/${filename}`;
  const content = await fs.readFile(path, "utf-8");
  return JSON.parse(content);
}
