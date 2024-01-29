import {Transform} from 'node:stream'

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const data = chunk.toString().split('').reverse().join('');
      this.push(data);
      callback();
    }
  });
  process.stdin.pipe(transformStream);
  transformStream.on('data', (data)=> process.stdout.write(data.toString() + `\r\n`))
};

await transform();
