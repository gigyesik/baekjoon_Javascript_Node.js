// A + B - 7
// https://www.acmicpc.net/problem/11021

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var result = []
var counter = 0
rl.on('line', input => {
    var sum = input.split(' ');
    if (sum.length == 2) {
        a = Number(sum[0]);
        b = Number(sum[1]);
        result[counter] = a + b;
        counter += 1;
    }
})
  .on('close', () => {
    for (var i=0; i< result.length; i++) {
        console.log('Case #'+(i+1)+': '+result[i]);
    }
    rl.close();
  })