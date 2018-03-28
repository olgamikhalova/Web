var i;
var a = 0;
for (i = -1000; i <= 1000; i++){
	a = a + i;
}
document.getElementById("demo").innerHTML = "Сумма чисел от -1000 до 1000 равна " + a;