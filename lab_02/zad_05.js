const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', num => {
    if (num > 0) {
        for(let i = 0; i < num; i++) {
            console.log('*'.repeat(i + 1));
        }
        for(let i = num; i > 0; i--) {
            console.log('*'.repeat(i));
        }
        for(let i = num; i > 0; i--) {
            console.log(`${' '.repeat(num - i)}${'*'.repeat(i)}`);
        }
        for(let i = 0; i < num; i++) {
            console.log(`${' '.repeat(num - i - 1)}${'*'.repeat(i + 1)}`);
        }
    }
    
});
