import fs from 'node:fs';
import path from "node:path";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const read = async () => {
  const readStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'));
  let all = '';
  readStream.on('data', chunk => all += chunk);
  readStream.on('end', () => process.stdout.write(all));
}

await read();
