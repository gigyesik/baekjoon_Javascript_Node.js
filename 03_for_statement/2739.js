// multiplication table
// https://www.acmicpc.net/problem/2739

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var result = 0
rl.on('line', input => {
    result = Number(input);
    for (var i = 1; i < 10; i++) {
        console.log(result + ' * ' + i + ' = ' + result * i);
    }
    rl.close();
})
