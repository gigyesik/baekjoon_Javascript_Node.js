// alarm clock
// https://www.acmicpc.net/problem/2884

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var result = []
rl.on('line', input => {
    result = input.split(' ');
    if (result.length == 2) {
        rl.close();
    }
    var h = Number(result[0]);
    var m = Number(result[1]);
    if (m >= 45) {
        m = m - 45;    
    } else {
        if (h == 0) {
            h = 23;
            m = m + 15;
        } else {
            h -= 1;
            m = m + 15;
        };
    };
    console.log(h, m);
})
