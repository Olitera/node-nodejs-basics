import fs from 'node:fs';

const read = async () => {
    fs.readFile('./files/fileToRead.txt', (err, data) => {
        if (err) {
            throw Error('FS operation failed')
        }
         console.log(data.toString());
    })
};

await read();
