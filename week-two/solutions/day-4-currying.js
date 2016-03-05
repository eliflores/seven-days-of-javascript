  function processData(input) {
    
    "use strict"
    let pressure = (gravity) => (mass) => (height) => gravity * mass * height;  
    let m = input[0];   //m : stores value of mass.
    let g = input[1];   //g : stores value of gravity.
    let h = input[2];   //h : stores value of height.

    let accelerationDueToGravity = pressure(g);
    let particleMass = accelerationDueToGravity(m);
    let particleHeight = particleMass(h);

    let totalPressure = particleHeight;

    console.log(totalPressure);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () { 
   processData(_input.split(' ').map(num =>Number(num)));
});
