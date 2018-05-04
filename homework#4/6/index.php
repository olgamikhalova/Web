<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body> 
	<?php
		$numbers = array();
		for ($i = 1; $i <= 100; $i++){ 
			$numbers[$i] = rand(1, 10);
		}
		$unique = array_unique($numbers);
		$sorted = asort($unique);
		$reversed = array_reverse($unique);
		print_r($reversed);
    ?>
</body>
</html>