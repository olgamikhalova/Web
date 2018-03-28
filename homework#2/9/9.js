function myFunction() {
	var entr = document.getElementById("entrances").value;
	var apart = document.getElementById("apartments").value;
	var flo = document.getElementById("floors").value;
	var searchedApart = document.getElementById("searchedApartment").value;
	
	var numApartInEntr = apart * flo;
	var temp1 = searchedApart - 1;
	var temp2 = temp1 / numApartInEntr;
	var temp3 = Math.floor(temp2);
	var temp4 = temp1 - temp3 * numApartInEntr;
	var numOfSearchedEntrance = temp3 + 1;
	var numOfSearchedFloor = Math.floor(temp4 / apart + 1);
		
	document.getElementById("demo").innerHTML = "Номер подъезда " + numOfSearchedEntrance + "," + " этаж " + numOfSearchedFloor;	
}