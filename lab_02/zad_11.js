const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input => {
    const numArr = input.split(' ').map(num => parseFloat(num));
    const result = numArr.reduce((acc, curr) => {
        return acc + curr;
    }, 0.0)
    console.log(result);
});
