function myFunction() {	
	var sizeOfBoard = document.getElementById("size").value;
	var arr = sizeOfBoard.split("*");
	var i;
	var j;
	
	document.write("<table border='1' width='400' height='400'>");
    for (i = 1; i <= arr[0]; i++){
		document.write("<tr>");
		for (j = 1; j <= arr[0]; j++){
			if((i + j) % 2 != 0){
				document.write("<td bgcolor='black'></td>");
			}else{
				document.write("<td bgcolor='white'></td>");
			}
		}
    }
}