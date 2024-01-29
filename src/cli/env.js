import process from 'node:process';
const parseEnv = () => {
  let arr = []
  for(let key in process.env) {
    if(key.match(/RSS_.*/)) {
      arr.push(key + '=' + process.env[key])
    }
  }
  console.log(arr.join('; '))
};

parseEnv();

