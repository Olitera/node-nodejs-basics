import fs from 'node:fs';
import path from "node:path";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const writeStream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'))
  process.stdin.on('data', all => {
      writeStream.write(all);
  })
};

await write();


