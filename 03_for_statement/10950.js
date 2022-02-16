// A + B - 3
// https://www.acmicpc.net/problem/10950

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var counter = 0;
var result = [];
rl.on('line', input => {
    if (counter == 0) {
        result[0] = Number(input)
        counter += 1
    } else if (counter < result[0]) {
        result[counter] = input.split(' ')
        result[counter] = result[counter].map(Number);
        result[counter] = result[counter][0] + result[counter][1];
        console.log(result[counter]);
        counter += 1;
    } else if (counter == result[0]) {
        result[counter] = input.split(' ')
        result[counter] = result[counter].map(Number);
        result[counter] = result[counter][0] + result[counter][1];
        console.log(result[counter]);
        rl.close();
    }
})