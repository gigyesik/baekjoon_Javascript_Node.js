// 2541 - 1998
// https://www.acmicpc.net/problem/18108

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var result = 2541 - 1998
rl.on('line', input => {
    console.log(input - result);
});