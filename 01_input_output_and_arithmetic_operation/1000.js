// A + B
// https://www.acmicpc.net/problem/1000

const fs = require('fs'); // import module file system
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('./1000_input.txt').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);


console.log(a + b);