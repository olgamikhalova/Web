<?php
session_start();
$user = $_POST['username'];
$password = $_POST['userpass'];

$_SESSION['username'] = $user;
if(empty($user) || empty($password)){
    echo "Please, enter your name and password";
    die();
}

$filename = "names_passwords.json";
$content = json_decode(file_get_contents($filename), true);
if(isset($content[$user])) {
    if($content[$user] === $password){
        header('Location: main_chat.html');
    } else {
		echo "Wrong username and/or password!";		
    }
} else {
    $content[$user] = $password;
    file_put_contents($filename, json_encode($content, JSON_PRETTY_PRINT));
	header('Location: main_chat.html');
}
?>
