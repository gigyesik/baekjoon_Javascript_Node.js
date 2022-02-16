// oven clock
// https://www.acmicpc.net/problem/2525

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var clock = []
var addmin = 0
var counter = 0
rl.on('line', input => {
    if (counter == 0) {
        clock = input.split(' ');
        counter += 1
    } else if (counter == 1) {
        addmin = Number(input);
        counter += 1
        rl.close();
    };

    if (counter == 2) {
        var h = Number(clock[0]);
        var m = Number(clock[1]);
        if (addmin >= 60) {
            h = h + Math.floor(addmin / 60);
            addmin = addmin - Math.floor(addmin / 60) * 60;
            m = m + addmin;
            if (m >= 60) {
                m = m % 60;
                h += 1;
            }
            if (h >= 24) {
                h = h % 24;
            };
        } else {
            if (m + addmin >= 60) {
                h += 1;
                m = (m + addmin) % 60;
                if (h == 24) {
                    h = 0;
                }
            } else {
                m = m + addmin
            }
        }
        console.log(h, m);
    };
});