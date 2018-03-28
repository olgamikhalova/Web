function myFunction() {
	var y;
	var m;
	var d;
	var h;
	var min;
	var s;
	var timeArray = [];//"years", "months", "days", "hours", "minutes", "seconds"
	
	var num1 = document.getElementById("date1");
	var d1 = new Date(num1.value);
	var num2 = document.getElementById("date2");
	var d2 = new Date(num2.value);
	
	var diffYear = (d2.getTime() - d1.getTime()) / 1000;//millisecond transfer in seconds
	diffYear = diffYear / 31536000;
	var years = Math.abs(Math.floor(diffYear));
	timeArray[0] = years;
	
	var diffMonth = diffYear - years;
	diffMonth = diffMonth * 31536000 / 2592000;
	var months = Math.abs(Math.floor(diffMonth));
	timeArray[1] = months;
	
	var diffDays = diffMonth - months;
	diffDays = diffDays * 2592000 / 86400;
	var days = Math.abs(Math.floor(diffDays));
	timeArray[2] = days;
	
	var diffHours = diffDays - days;
	diffHours = diffHours * 86400 / 3600;
	var hours = Math.abs(Math.floor(diffHours));
	timeArray[3] = hours;
	
	var diffMinutes = diffHours - hours;
	diffMinutes = diffMinutes * 3600 / 60;
	var minutes = Math.abs(Math.floor(diffMinutes));
	timeArray[4] = minutes;
	
	var diffSeconds = diffMinutes - minutes;
	diffSeconds = diffSeconds * 61;
	var seconds = Math.abs(Math.floor(diffSeconds));
	timeArray[5] = seconds;
	
	if (timeArray[0] <= 10 || timeArray[0] >= 15) {
        switch (timeArray[0] % 10){
        
			case 1:
				y = " год";
				break;
            case 2:
				y = " года";
				break;
            case 3:
                y = " года";
                break;
            case 4:
                y = " года";
                break;
            default:
				y = " лет";
                break; 
        }
    } else {
		y = " лет";
	}
	
	if (timeArray[1] <= 10 || timeArray[1] >= 15) {
        switch (timeArray[1] % 10){
        
			case 1:
				m = " месяц";
				break;
            case 2:
				m = " месяца";
				break;
            case 3:
                m = " месяца";
                break;
            case 4:
                m = " месяца";
                break;
            default:
				m = " месяцев";
                break; 
        }
    } else {
		m = " месяцев";
	}
	
	if (timeArray[2] <= 10 || timeArray[2] >= 15) {
        switch (timeArray[2] % 10){
        
			case 1:
				d = " день";
				break;
            case 2:
				d = " дня";
				break;
            case 3:
                d = " дня";
                break;
            case 4:
                d = " дня";
                break;
            default:
				d = " дней";
                break; 
        }
    } else {
		d = " дней";
	}
	
	if (timeArray[3] <= 10 || timeArray[3] >= 15) {
        switch (timeArray[3] % 10){
        
			case 1:
				h = " час";
				break;
            case 2:
				h = " часа";
				break;
            case 3:
                h = " часа";
                break;
            case 4:
                h = " часа";
                break;
            default:
				h = " часов";
                break; 
        }
    } else {
		h = " часов";
	}
	
	if (timeArray[4] <= 10 || timeArray[4] >= 15) {
        switch (timeArray[4] % 10){
        
			case 1:
				min = " минута";
				break;
            case 2:
				min = " минуты";
				break;
            case 3:
                min = " минуты";
                break;
            case 4:
                min = " минуты";
                break;
            default:
				min = " минут";
                break; 
        }
    } else {
		min = " минут";
	}
	
	if (timeArray[5] <= 10 || timeArray[5] >= 15) {
        switch (timeArray[5] % 10){
        
			case 1:
				s = " секунда";
				break;
            case 2:
				s = " секунды";
				break;
            case 3:
                s = " секунды";
                break;
            case 4:
                s = " секунды";
                break;
            default:
				s = " секунд";
                break; 
        }
    } else {
		s = " секунд";
	}
	
	document.getElementById("demo").innerHTML = "Между датами прошло столько времени: " + timeArray[0] + " " + y + ", " + timeArray[1] + " " + m + ", " + 
		timeArray[2] + " " + d + ", " + timeArray[3] + " " + h + ", " + timeArray[4] + " " + min + ", " + timeArray[5] + " " + s;	
}