<?php
session_start();
require 'config.php';
$user = $_SESSION['username'];
$text = $_POST['usermsg'];
$time = time();

$json_content = json_decode(file_get_contents($filename), true);
$smile = array(":)", ":(");
$grafic = array("<img src = 'happy.png' alt='Smile' align='bottom'>",
	"<img src = 'sad.png' alt='Sad' align='bottom'>");
$newtext = str_replace($smile, $grafic, $text);

$content = array();

if(is_array($json_content)) {
    $content = $json_content;
}

if (!empty($text)) {
	$content[] = array("time" => $time, "user" => $user, "text"  => $newtext);
}

file_put_contents($filename, json_encode($content, JSON_PRETTY_PRINT));
?>