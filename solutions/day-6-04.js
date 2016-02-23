"use strict";
function processData(input) {
    let input_lines = input.split('\n');
    let n_cases = parseInt(input_lines[0]);
    for(let i = 1 ; i < input_lines.length ; i++) {
        var max_operations = 0;
        var current_word = input_lines[i];
        var left_index = 0;
        var right_index = current_word.length - 1;
        while(left_index < right_index){
            max_operations += Math.abs(current_word.charCodeAt(right_index) - current_word.charCodeAt(left_index));
            left_index++;
            right_index--;
        }
        console.log(max_operations);
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