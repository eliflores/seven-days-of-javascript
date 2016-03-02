'use strict'
for(let s of my_array){
    if(s === s.split('').reverse().join('')) {
        console.log(s);
    }
}