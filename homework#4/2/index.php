<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
		$result = 0;

		for ($i = -1000; $i <= 1000; $i++){
			$mod = $i % 10;
			if ($mod == 2 || $mod == -2 || $mod == 3 || $mod == -3 || $mod == 7 || $mod == -7){
				
				$result = $result + $i;	
			}	
		}
		echo "The sum of numbers from -1000 to 1000 which ends at 2, 3 or 7 is " . $result . "<br>";
	?>	
</body>
</html>
