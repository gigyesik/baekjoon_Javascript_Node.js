// A - B
// https://www.acmicpc.net/problem/1001

const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('1001_input.txt').toString().split(' ');

a = input[0];
b = input[1];
console.log(a - b);