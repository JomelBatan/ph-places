import fs from "fs/promises";
import path from "path";

const isServerless = process.env.VERCEL === 1;

export async function getData(filename) {
  if (!isServerless) {
    const path = `./data/${filename}`;
    const content = await fs.readFile(path, "utf-8");
    return JSON.parse(content);
  } else {
    // Serverless (Vercel) — dynamic import
    const imported = await import(`./data/${filename}.json`);
    console.log(imported);
    return imported.default;
  }
}
