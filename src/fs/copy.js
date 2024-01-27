import * as fs from 'node:fs/promises';
import fss from 'node:fs';
import path from 'node:path';

const copy = async () => {
  fss.stat('./files', {}, (err) => {
    if(err) {
      throw Error('FS operation failed')
    }
    fs.mkdir(path.join('./files_copy'))
      .then(() => fs.readdir(path.join('./files')))
      .then((filesArray) => {
        for (const file of filesArray) {
          fs.copyFile(`${ path.join('./files', file) }`, `${ path.join('./files_copy', file) }`);
        }
      })
      .catch(() => {
        throw Error('FS operation failed')
      })
  })
};

await copy();
