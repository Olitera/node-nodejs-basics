import fs from 'node:fs';
import path from 'node:path';

const list = async () => {
    fs.readdir('./files', (err, files) => {
      if (err) {
        throw Error('FS operation failed')
      }
      for (let i = 0; i < files.length; i++) {
        fs.stat('./files' + '/'+ files[i], (err, stats) => {
          if (stats.isFile()) {
            console.log(`${path.basename(files[i], path.extname(files[i]))}`)
          }
        })
        }
      })
}

await list();
