function makeTable() {	
	var sizeOfBoard = document.getElementById("size").value;
	var arr = sizeOfBoard.split("*");
	var table = document.createElement('TABLE');
	document.body.appendChild(table);
	var tr = document.createElement('TR');
	var td = document.createElement('TD');
	td.style.width = '50px';
	td.style.height = '50px';
	for(var i = 0; i < arr[1]; i++){
		table.appendChild(tr.cloneNode(true));
		for(var j = 0; j < arr[0]; j++){
			var row = table.getElementsByTagName('TR')[i];
			row.appendChild(td.cloneNode(true));
			var data = table.getElementsByTagName('TR')[i].getElementsByTagName('TD')[j];
			if((i % 2 == 0 && j % 2 == 0) || i % 2 == 1 && j % 2 == 1){
				data.style.backgroundColor = '#994d00';
			}else{
				data.style.backgroundColor = '#ffe066';
			}
		}
	}
}