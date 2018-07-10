<?php
session_start();
require 'config.php';
	
$string = file_get_contents($filename);
$arr = json_decode($string, true);
$length = count($arr);
for($i = 0; $i < $length; $i++){
	$timeNow = time();
	$x = $timeNow - $arr[$i]['time'];
	if($x <= 3600){
		$data = "[".date('H:i:s', $arr[$i]['time'])."]"." "."<b>".$arr[$i]['user']."</b>"." ".$arr[$i]['text'];
		echo '<pre>';
		echo $data;
		echo '</pre>';
	}
}
?>
