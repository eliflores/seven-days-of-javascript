"use strict";
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var cycles = parseInt(readLine());
        var height = 1;
        for(let cycle = 1; cycle <= cycles ; cycle++) {
            if (cycle % 2 === 0) {
                height = height + 1;
            } else {
                height = height * 2;
            }
        }
        console.log(height);
    }

}