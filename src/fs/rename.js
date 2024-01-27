import fs from 'node:fs';
const rename = async () => {
  fs.stat('./files/wrongFilename.txt', {}, (err) => {
    if(err) {
      throw Error('FS operation failed')
    }
    fs.rename('./files/wrongFilename.txt', './files/properFilename.md', (err)=> {
      if(err) {
        throw Error('FS operation failed')
      }
    })
  })
}

await rename();
