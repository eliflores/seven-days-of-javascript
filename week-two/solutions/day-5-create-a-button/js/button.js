var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
	var currentValue = this.innerHTML;
    this.innerHTML = parseInt(currentValue) + 1;
});