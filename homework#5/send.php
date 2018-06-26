<?php
session_start();
require 'config.php';
$user = $_SESSION['username'];
$text = $_POST['usermsg'];
$time = date('H:i:s');

$json_content = json_decode(file_get_contents($filename), true);

$content = array();

if(is_array($json_content)) {
    $content = $json_content;
}

if (!empty($text)) {
	$content = array("time" => $time, "user" => $user, "text"  => $text);
}

file_put_contents($filename, json_encode($content, JSON_PRETTY_PRINT),FILE_APPEND);
?>