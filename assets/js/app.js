document.addEventListener("DOMContentLoaded", function() {
	var input = document.getElementById("amount");
	input.addEventListener("input", function() {
		this.value = this.value.replace(/\D/g, '');
		var numValue = parseInt(this.value, 10);
		if (isNaN(numValue) || numValue < 1) {
			this.value = "1";
		} else if (numValue > 25000) {
			this.value = "25000";
		}
		this.style.width = ((this.value.length + 1) * 0.75) + "rem";
	});
});

function increaseValue() {
	var value = parseInt(document.getElementById('amount').value, 10);
	value = isNaN(value) ? 1 : value;
	value++;
	value = Math.min(value, 25000);
	document.getElementById('amount').value = value;
	updateInputWidth();
}

function decreaseValue() {
	var value = parseInt(document.getElementById('amount').value, 10);
	value = isNaN(value) ? 1 : value;
	value = Math.max(value - 1, 1);
	document.getElementById('amount').value = value;
	updateInputWidth();
}

function updateInputWidth() {
	var input = document.getElementById("amount");
	input.style.width = ((input.value.length + 1) * 0.75) + "rem";
}