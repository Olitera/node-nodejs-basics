import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import crypto from 'node:crypto';
const hash = crypto.createHash('sha256')

const calculateHash = async () => {
  const readStream = fs.createReadStream(path.join(__dirname, 'files','fileToCalculateHashFor.txt'), 'utf-8');
  readStream.pipe(hash)
  readStream.on('end', () => {
    hash.setEncoding('hex')
    console.log(hash.read())
  });
};

await calculateHash();
