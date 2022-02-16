// sum
// https://www.acmicpc.net/problem/8393

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var num = 0
var result = 0
rl.on('line', input => {
    num = Number(input);
    for (var i = 1; i <= num; i++) {
        result += i;
    }
    console.log(result);
    rl.close();
})