function myFunction() {
    document.getElementById("myTextarea").disabled = true;
	var str = document.getElementById("myTextarea").value;
	var arr = str.split(",");
	var i;
	for (i = 0; i < arr.length; i++){
		arr[i] = arr[i].replace(/^https?:\/\//,'');
	}
	var sortedArray = arr.sort();
	for (var i in sortedArray){
		document.write(sortedArray[i] + "<br>");
	}	
}