function myFunction() {
	var num = document.getElementById("date");
	var dt = new Date(num.value);
	var month = dt.getMonth();
	var day = dt.getDate();
	var img = document.createElement("img");

	if ((month == 2 && day >= 21) || (month == 3 && day <= 20)) {
		img.src = "aries.png";
		var src = document.getElementById("image");
		document.getElementById("demo").innerHTML = "Ваш знак зодиака - овен!";
		src.appendChild(img);
	}
	if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
		img.src = "taurus.png";
		var src = document.getElementById("image");
		document.getElementById("demo").innerHTML = "Ваш знак зодиака - телец!";
		src.appendChild(img);
	}
	if ((month == 4 && day >= 21) || (month == 5 && day <= 21)) {
		img.src = "gemini.png";
		var src = document.getElementById("image");
		document.getElementById("demo").innerHTML = "Ваш знак зодиака - близнецы!";
		src.appendChild(img);
	}
	if ((month == 5 && day >= 22) || (month == 6 && day <= 22)) {
		img.src = "cancer.png";
		var src = document.getElementById("image");
		document.getElementById("demo").innerHTML = "Ваш знак зодиака - рак!";
		src.appendChild(img);
	}
	if ((month == 6 && day >= 23) || (month == 7 && day <= 23)) {
		img.src = "leo.png";
		var src = document.getElementById("image");
		document.getElementById("demo").innerHTML = "Ваш знак зодиака - лев!";
		src.appendChild(img);
	}
	if ((month == 7 && day >= 24) || (month == 8 && day <= 23)) {
		img.src = "virgo.png";
		var src = document.getElementById("image");
		document.getElementById("demo").innerHTML = "Ваш знак зодиака - дева!";
		src.appendChild(img);
	}
	if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
		img.src = "libra.png";
		var src = document.getElementById("image");
		document.getElementById("demo").innerHTML = "Ваш знак зодиака - весы!";
		src.appendChild(img);
	}
	if ((month == 9 && day >= 24) || (month == 10 && day <= 22)) {
		img.src = "scorpio.png";
		var src = document.getElementById("image");
		document.getElementById("demo").innerHTML = "Ваш знак зодиака - скорпион!";
		src.appendChild(img);
	}
	if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
		img.src = "sagittarius.png";
		var src = document.getElementById("image");
		document.getElementById("demo").innerHTML = "Ваш знак зодиака - стрелец!";
		src.appendChild(img);
	}
	if ((month == 11 && day >= 22) || (month == 0 && day <= 20)) {
		img.src = "capricorn.png";
		var src = document.getElementById("image");
		document.getElementById("demo").innerHTML = "Ваш знак зодиака - козерог!";
		src.appendChild(img);
	}
	if ((month == 0 && day >= 21) || (month == 1 && day <= 20)) {
		img.src = "aquarius.png";
		var src = document.getElementById("image");
		document.getElementById("demo").innerHTML = "Ваш знак зодиака - водолей!";
		src.appendChild(img);
	}
	if ((month == 1 && day >= 21) || (month == 2 && day <= 20)) {
		img.src = "pisces.png";
		var src = document.getElementById("image");
		document.getElementById("demo").innerHTML = "Ваш знак зодиака - рыбы!";
		src.appendChild(img);
	}
}