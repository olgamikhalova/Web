<?php
session_start();
header('Refresh:1');

$user = $_SESSION['username'];
$text = $_POST['usermsg'];
$time = time();

$data = "[".date('H:i:s', $time)."]"." "."<b>".$user."</b>"." ".$text;
echo '<pre>';
echo $data;
echo '</pre>';
?>