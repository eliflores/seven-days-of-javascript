function processData(myArray) {
    var mySet, myArr;
    myArray.sort(function(a, b) {
        return b - a;
    });
    mySet = new Set(myArray);
    myArr = Array.from(mySet)
    console.log(myArr[1]);
}


// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});