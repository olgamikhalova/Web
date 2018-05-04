<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<form  method="get">
		<p>Введите высоту шахматной доски:</p>
		<input type="text" name="height">
		<p>Введите ширину шахматной доски:</p>
		<input type="text" name="width">
		<input type="submit">
	</form>
	<table border='1' id="chessBoard">
	
	<?php   
		$table = '';
		$width  = $_GET['width'];
		$height = $_GET['height'];
		for ($i = 1; $i <= $width ; $i++) { 
			$table .= '<tr>';
			for ($j = 1; $j <= $height ; $j++) { 
				$color = ($i + $j) % 2 ? '#ffe066' : '#994d00';
				$table .= "<td bgcolor='{$color}' width='50' height='50'></td>"; 
			}
			$table .= '</tr>';
		}
		echo $table;
	?>
</table>
</body>
</html>