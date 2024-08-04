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
      await readJsonFilesRecursively(fullPath);
    } else if (path.extname(file).toLowerCase() === ".json") {
      try {
        const version = fullPath.split("/")[2];
        const jsonContent = read(fullPath);
        const jsonData = JSON.parse(jsonContent) as OutputType;

        for (const child of jsonData.children) {
          const name = child.name;
          const id = child.id;
          const sourceFileName =
            jsonData.symbolIdMap[
              id as unknown as keyof typeof jsonData.symbolIdMap
            ].sourceFileName;

          // Extract category from sourceFileName
          const categoryMatch = sourceFileName.match(/src\/(.+)\/[^/]+\.ts$/);
          const category = categoryMatch ? categoryMatch[1] : "";

          const markdownContent = `---
title: ${name}
---

## About

${name} ${sourceFileName}
`;

          const markdownPath = path.join(
            "src",
            "content",
            "docs",
            version,
            category,
            `${name}.md`,
          );

          fs.mkdirSync(path.dirname(markdownPath), { recursive: true });
          fs.writeFileSync(markdownPath, markdownContent);

          console.log(`Created Markdown file: ${markdownPath}`);
        }
      } catch (error) {
        console.error(`Error processing file ${fullPath}:`, error);
      }
    }
  }
}

async function main() {
  const targetDirectory = "./src/data";
  await readJsonFilesRecursively(targetDirectory);
}

main().catch(console.error);
