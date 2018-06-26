<?php
session_start();
require 'config.php';

if(isset($_POST['ajaxsend']) && $_POST['ajaxsend']==true){
	$string = file_get_contents($filename);
	$array = json_decode($string, true);
	$data = "[".$array['time']."]"." "."<b>".$array['user']."</b>"." ".$array['text'];
	echo $data;
	
	/*foreach($array as $val)
		echo $val;*/
	
	//var_dump($chat);
}else if(isset($_POST['ajaxget']) && $_POST['ajaxget']==true){
	$string = file_get_contents($filename);
	$array = json_decode($string, true);
	$data = "[".$array['time']."]"." "."<b>".$array['user']."</b>"." ".$array['text'];
	echo $data;
}

?>