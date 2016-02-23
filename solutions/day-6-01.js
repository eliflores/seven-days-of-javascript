"use strict";
function processData(input) {
    let input_array = input.split('\n');
    let money = parseInt(input_array[0].split(' ')[1]);
    let toys_prices_str = input_array[1].split(' ');
    let toys_prices = toys_prices_str.map(price_str => parseInt(price_str));
    toys_prices.sort((a,b) => a - b);
    let number_of_toys = 0;
    for(let price of toys_prices) {
        money = money - price;
        if (money <=0) {
            break;
        }
        number_of_toys++;
    }
    console.log(number_of_toys);
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