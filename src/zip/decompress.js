import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import zlib from 'node:zlib';
import path from "node:path";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  await pipeline(
    fs.createReadStream(path.join(__dirname, 'files', 'archive.gz')),
    zlib.createUnzip(),
    fs.createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt')))
};

await decompress();
