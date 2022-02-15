// ??!
// https://www.acmicpc.net/problem/10926

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', input => {
    console.log(input + '??!');
})
  .on('close', () => {
    process.exit();
  });