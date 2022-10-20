const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input => {
    const wordsArr = input.split(' ');
    const result = wordsArr.reduce((acc, word) => {
        acc[word]
            ? acc[word] = acc[word] + 1
            : acc[word] = 1;
        return acc;
    }, {});
    console.log(result);
});
