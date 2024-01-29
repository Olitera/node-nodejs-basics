import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import zlib from 'node:zlib';
import path from "node:path";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  await pipeline(
    fs.createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt')),
    zlib.createGzip(),
    fs.createWriteStream(path.join(__dirname, 'files', 'archive.gz')))
};

await compress();
