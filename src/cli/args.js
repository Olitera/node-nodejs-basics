import process from 'node:process';
const parseArgs = () => {
  let argv = process.argv.slice(2);
  let arr =[]
  for(let i = 0; i < argv.length; i++) {
    if(i%2 === 0) {
      arr.push(argv[i].slice(2) + ' is ' + argv[i + 1])
    }
    }
  console.log(arr.join(', '))
  }

parseArgs();
