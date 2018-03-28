function myFunction() {
	var num = document.getElementById("number").value;
	var str = num.toString();
	var sum = 0;
	for (var i = 0; i < str.length; i++) {
		sum += parseInt(str.charAt(i), 10);
	}
	document.getElementById("demo").innerHTML = "Сумма цифр введённого числа равна: " + sum;
}