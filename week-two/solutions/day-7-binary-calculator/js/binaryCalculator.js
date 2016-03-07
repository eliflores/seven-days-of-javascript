document.getElementById("btnClr").addEventListener("click", function() {
	var res = document.getElementById("res");
	res.innerHTML = '';
});

document.getElementById("btn0").addEventListener("click", function() {
	var res = document.getElementById("res");
	res.innerHTML = res.innerHTML + '0';
});

document.getElementById("btn1").addEventListener("click", function() {
	var res = document.getElementById("res");
	res.innerHTML = res.innerHTML + '1';
});

document.getElementById("btnSum").addEventListener("click", function() {
	var res = document.getElementById("res");
	res.innerHTML = res.innerHTML + '+';
});

document.getElementById("btnSub").addEventListener("click", function() {
	var res = document.getElementById("res");
	res.innerHTML = res.innerHTML + '-';
});

document.getElementById("btnMul").addEventListener("click", function() {
	var res = document.getElementById("res");
	res.innerHTML = res.innerHTML + '*';
});

document.getElementById("btnDiv").addEventListener("click", function() {
	var res = document.getElementById("res");
	res.innerHTML = res.innerHTML + '/';
});

document.getElementById("btnEql").addEventListener("click", function() {
	var resElement = document.getElementById("res")
		resContent = resElement.innerHTML,
		indexOfSum = resContent.indexOf('+'),
		indexOfSub = resContent.indexOf('-'),
		indexOfDiv = resContent.indexOf('/'),
		indexOfMul = resContent.indexOf('*'),
		res;

	if (indexOfSum > 0) {
		var o1 = resContent.substring(0, indexOfSum);
		var o2 = resContent.substring(indexOfSum + 1, resContent.length);
		res = parseInt(o1, 2) + parseInt(o2, 2);
	} else if (indexOfSub > 0) {
		var o1 = resContent.substring(0, indexOfSub);
		var o2 = resContent.substring(indexOfSub + 1, resContent.length);
		res = parseInt(o1, 2) - parseInt(o2, 2);
	} else if (indexOfDiv > 0) {
		var o1 = resContent.substring(0, indexOfDiv);
		var o2 = resContent.substring(indexOfDiv + 1, resContent.length);
		res = Math.floor(parseInt(o1, 2) / parseInt(o2, 2));
	} else if (indexOfMul > 0) {
		var o1 = resContent.substring(0, indexOfMul);
		var o2 = resContent.substring(indexOfMul + 1, resContent.length);
		res = parseInt(o1, 2) * parseInt(o2, 2);
	}
	resElement.innerHTML = res.toString(2);
});