import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Detect if running on Vercel serverless
const isServerless = !!process.env.VERCEL;

export async function getData(filename) {
  let filePath;

  if (isServerless) {
    // Serverless environment: use path relative to module
    filePath = path.join(__dirname, "..", "data", filename);
  } else {
    // Local environment: use project root
    filePath = path.join(process.cwd(), "data", filename);
  }

  const content = await fs.readFile(filePath, "utf-8");
  return JSON.parse(content);
}
