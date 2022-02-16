// Quadrant
// https://www.acmicpc.net/problem/14681

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var result = []
var counter = 0
rl.on('line', input => {
    if (result.length == 1) {
        result[counter] = input;
        rl.close();
    } else {
        result[counter] = input;
        counter += 1;
    }
    
    if (result.length == 2) {
        var x = Number(result[0]);
        var y = Number(result[1]);
        if (x > 0 & y > 0) {
            console.log('1');
        } else if (x > 0 & y < 0) {
            console.log('4');
        } else if (x < 0 & y < 0) {
            console.log('3');
        } else if (x < 0 & y > 0) {
            console.log('2');
        };
    };
})