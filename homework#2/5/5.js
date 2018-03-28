function myFunction() {
	var n;
	var num = document.getElementById("age");
	
	if (num.value <= 10 || num.value >= 15) {
        switch (num.value % 10){
        
			case 1:
				n = " год";
				break;
            case 2:
				n = " года";
				break;
            case 3:
                n = " года";
                break;
            case 4:
                n = " года";
                break;
            default:
				n = " лет";
                break; 
        }
    } else {
		n = " лет";
	}
	
	document.getElementById("demo").innerHTML = "Вам " + num.value + n;
	
}