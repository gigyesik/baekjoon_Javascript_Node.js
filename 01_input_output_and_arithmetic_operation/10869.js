// arithmetic operation
// https://www.acmicpc.net/problem/10869

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

result = []
rl.on('line', input => {
    result = input.split(' ');
    console.log(Number(result[0]) + Number(result[1]));
    console.log(Number(result[0]) - Number(result[1]));
    console.log(Number(result[0]) * Number(result[1]));
    console.log(Math.floor(Number(result[0]) / Number(result[1])));
    console.log(Number(result[0]) % Number(result[1]));
})
  .on('close', () => {
      process.exit();
  })