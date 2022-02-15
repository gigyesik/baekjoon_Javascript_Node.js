// A / B
// https://www.acmicpc.net/problem/1008

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

result = []
rl.on('line', input => {
    result = input.split(' ');
    console.log(result[0] / result[1]);
})
  .on('close', input => {
    process.exit();
  })