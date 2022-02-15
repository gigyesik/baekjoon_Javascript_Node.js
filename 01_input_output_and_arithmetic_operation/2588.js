// multiplication
// https://www.acmicpc.net/problem/2588

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var counter = 0;
result = []
rl.on('line', input => {
    result[counter] = input
    counter += 1;
    if(counter > 1) {
        counter = 2;
        rl.close();
    }
    if(counter == 2) {
        console.log(result[0] * result[1][2]);
        console.log(result[0] * result[1][1]);
        console.log(result[0] * result[1][0]);
        console.log(result[0] * result[1]);
    }
})
