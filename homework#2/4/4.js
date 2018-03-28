var date = new Date(null);
function myFunction() {
	var num = document.getElementById("time");
	date.setSeconds(num.value); 
	var result = date.toISOString().substr(11, 8);
	document.getElementById("demo").innerHTML = result;
}