<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body> 
	<form  method="post">
		<p>Введите число:</p>
		<input type="text" name="num">
		<input type="submit">
	</form>
	<?php
	if($_SERVER['REQUEST_METHOD']=='POST')
		$number = $_POST['num'];
		do{
			$sum += $number % 10;
		}
		while ($number = (int) $number / 10);
		if (!empty($sum)){
			echo $sum;
		}
    ?>
</body>
</html>