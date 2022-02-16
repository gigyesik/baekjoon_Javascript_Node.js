// three dices
// https://www.acmicpc.net/problem/2480

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var result = []
rl.on('line', input => {
    result = input.split(' ');
    result = result.map(Number)
    var resultset = new Set(result);
    var setarray = Array.from(resultset);
    if (setarray.length == 1) {
        console.log(10000 + setarray[0] * 1000);
    } else if (setarray.length == 2) {
        if (result[0] == result[1]) {
            console.log(1000 + result[0] * 100);
        } else if (result[0] == result[2]) {
            console.log(1000 + result[0] * 100);
        } else {
            console.log(1000 + result[1] * 100);
        }
    } else {
        console.log(Math.max(...setarray) * 100); // ...
    }
    console.log()
    rl.close();
})