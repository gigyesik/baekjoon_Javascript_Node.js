// compare nums
// https://www.acmicpc.net/problem/1330

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', input => {
    var result = input.split(' ');
    var a = Number(result[0]);
    var b = Number(result[1]);
    if (a > b) {
        console.log('>');
    } else if (a < b) {
        console.log('<');
    } else {
        console.log('==');
    };
});
