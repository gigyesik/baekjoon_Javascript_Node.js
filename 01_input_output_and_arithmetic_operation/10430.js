// remain
// https://www.acmicpc.net/problem/10430

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var result = []
rl.on('line', input => {
    result = input.split(' ');
    var a = Number(result[0]);
    var b = Number(result[1]);
    var c = Number(result[2]);
    console.log((a+b)%c);
    console.log(((a%c)+(b%c))%c);
    console.log((a*b)%c);
    console.log(((a%c)*(b%c))%c);
});