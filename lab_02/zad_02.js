const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input => {
    const result = input.split(' ').reduce((acc, el) => {
        return acc + parseInt(el);
    }, 0)
    console.log(result);
});
