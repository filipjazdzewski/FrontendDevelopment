const { listeners } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const mapSQRT = (arr) => {
    return arr.map(num => Math.sqrt(num));
}

rl.on('line', (input) => {
    const result = mapSQRT(input.split(' ').map(el => parseInt(el)));
    console.log(result);
});
