const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input => {
    const n= input.length
    const numArr = input.split('').map(num => parseInt(num))
    const result = numArr.reduce((acc, curr) => {
        return acc + Math.pow(curr, n)
    }, 0)
    console.log(input == result);
});
