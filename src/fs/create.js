import fs from 'node:fs';

const create = async () => {
  fs.stat('./files/fresh.txt', {}, (err) => {
    if(err) {
      const file = fs.createWriteStream('./files/fresh.txt');
      file.write('I am fresh and young');
    } else {
      throw new Error(`FS operation failed`)
    }
  });
};

await create();
