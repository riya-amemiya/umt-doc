import { read } from "umt_plugin_node/module/File/read";
import fs from "node:fs";
import path from "node:path";
import type { OutputType } from "./src/data/types/outputType";

async function readJsonFilesRecursively(directory: string): Promise<void> {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // サブディレクトリの場合、再帰的に処理
      await readJsonFilesRecursively(fullPath);
    } else if (path.extname(file).toLowerCase() === ".json") {
      // JSONファイルの場合、読み込んで処理
      try {
        const jsonContent = read(fullPath);
        const jsonData = JSON.parse(jsonContent) as OutputType;
        console.log(`File: ${fullPath}`);
        console.log(
          "Content:",
          jsonData.children.map((child) => child.name),
        );
        // ここでjsonDataを使って必要な処理を行う
      } catch (error) {
        console.error(`Error reading file ${fullPath}:`, error);
      }
    }
  }
}

// 使用例
async function main() {
  const targetDirectory = "./src/data";
  await readJsonFilesRecursively(targetDirectory);
}

main().catch(console.error);
