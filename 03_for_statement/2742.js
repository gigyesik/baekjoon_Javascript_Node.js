// N tnirp
// https://www.acmicpc.net/problem/2742

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var result = '';
rl.on('line', input => {
    inp = Number(input);
    for(var i = inp; i > 0; i--) {
        result = result + i + '\n';
    }
    console.log(result);
    rl.close();
})