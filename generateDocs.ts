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
        const version = fullPath.split("/")[2];
        const jsonContent = read(fullPath);
        const jsonData = JSON.parse(jsonContent) as OutputType;

        // 各子要素に対してMarkdownファイルを生成
        for (const child of jsonData.children) {
          const name = child.name;
          const markdownContent = `---
title: ${name}
---

## About

${name}
`;

          const markdownPath = path.join(
            "src",
            "content",
            "docs",
            version,
            `${name}.md`,
          );

          // ディレクトリが存在することを確認
          fs.mkdirSync(path.dirname(markdownPath), { recursive: true });

          // Markdownファイルを書き込み
          fs.writeFileSync(markdownPath, markdownContent);

          console.log(`Created Markdown file: ${markdownPath}`);
        }
      } catch (error) {
        console.error(`Error processing file ${fullPath}:`, error);
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
