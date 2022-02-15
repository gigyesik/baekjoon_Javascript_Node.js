// exam score
// https://www.acmicpc.net/problem/9498

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', input => {
    if (input >= 90) {
        console.log('A');
    } else if (input >= 80) {
        console.log('B');
    } else if (input >= 70) {
        console.log('C');
    } else if (input >= 60) {
        console.log('D');
    } else {
        console.log('F');
    }
});