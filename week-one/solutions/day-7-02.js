"use strict";
function processData() {
    console.log('        *        ');
    for(let i = 0; i < 9; i++) {
        let line = '';
        let pos_with_0 = [];
        for(let k = 9 - i; k <= 9 + i ; k++) {
            pos_with_0.push(k);
        }
        for(let j = 1; j < 18; j ++) {
            if(pos_with_0.indexOf(j) === -1) {
                line += ' ';
            } else {
                line += '0';
            }
        }
        console.log(line);
    }
}  

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});