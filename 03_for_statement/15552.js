// quick A + B
// https://www.acmicpc.net/problem/15552

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var result = '';
rl.on('line', input => {
    var sum = input.split(' ');
    if (sum.length == 2) {
        a = Number(sum[0]);
        b = Number(sum[1]);
        result = result + (a + b) + '\n'; 
    };
})
  .on('close', () => {
      console.log(result);
      rl.close();
  })