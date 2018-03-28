var i;
var a = 0;
var b = 0;
var result = 0;

for (i = -1000; i <= 1000; i++){
	a = i;
	var last = a.toString().slice(-1);
	if (last == 2 || last == 3 || last == 7){
		var b = a.valueOf();
		result = result + b;	
	}	
}
document.getElementById("demo").innerHTML = "Сумма чисел от -1000 до 1000, которые заканчиваются на 2,3, и 7 равна " + result;
