// leap year
// https://www.acmicpc.net/problem/2753

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', input => {
    if (input % 4 == 0) {
        if (input % 100 != 0) {
            console.log('1');
        } else if (input % 400 == 0) {
            console.log('1');
        } else {
            console.log('0');
        }
    } else {
        console.log('0');
    }
})