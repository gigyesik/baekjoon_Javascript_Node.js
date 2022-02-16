// print N
// https://www.acmicpc.net/problem/2741

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var result = '';
rl.on('line', input => {
    inp = Number(input);
    for(var i = 1; i <= inp; i++) {
        result = result + i + '\n';
    }
    console.log(result);
    rl.close();
})