import fs from 'node:fs';

const remove = async () => {
    fs.stat('./files/fileToRemove.txt', {}, (err) => {
        if (err) {
            throw Error('FS operation failed')
        }
        fs.unlink('./files/fileToRemove.txt', () => {})
    })
};

await remove();
