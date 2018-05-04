<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body> 
	<form  method="get">
		<p>Введите число:</p>
		<input type="text" name="num">
		<input type="submit">
	</form>
	<?php
	if($_SERVER['REQUEST_METHOD']=='GET')
		$number = $_GET['num'];
		do{
			$sum += $number % 10;
		}
		while ($number = (int) $number / 10);
		if (count($_GET) > 0){
			echo "$sum";
		}
    ?>
</body>
</html>