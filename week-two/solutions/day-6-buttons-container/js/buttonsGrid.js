var btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function() {
	var btn1 = document.getElementById("btn1"),
		btn2 = document.getElementById("btn2"),
		btn3 = document.getElementById("btn3"),
		btn4 = document.getElementById("btn4"),
		btn6 = document.getElementById("btn6"),
		btn7 = document.getElementById("btn7"),
		btn8 = document.getElementById("btn8"),
		btn9 = document.getElementById("btn9"),
		temp = '';
	temp = btn1.innerHTML;
	btn1.innerHTML = btn4.innerHTML;	
	btn4.innerHTML = btn7.innerHTML;
	btn7.innerHTML = btn8.innerHTML;
	btn8.innerHTML = btn9.innerHTML;	
	btn9.innerHTML = btn6.innerHTML;
	btn6.innerHTML = btn3.innerHTML;
	btn3.innerHTML = btn2.innerHTML;	
	btn2.innerHTML = temp;
});