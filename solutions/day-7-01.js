"use strict";
function processData() {
    for(let i = 1; i <=14; i++) {
        let pattern = '';
        for(let j = 1 ; j <= 14 ; j++) {
            if (j % 2 === 0) {
                pattern += '\u2572';
            } else {
                pattern +=  '\u2571';
            }   
        }
        console.log(pattern);
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