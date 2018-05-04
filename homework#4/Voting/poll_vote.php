<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
<?php
$vote = $_REQUEST['vote'];
$filename = "poll_result.json";

$content = json_decode(file_get_contents($filename), true)?: ['Tea' => 0, 'Coffee' => 0];
if ($vote == 0) $content['Tea'] += 1;
if ($vote == 1) $content['Coffee'] += 1;

file_put_contents($filename, json_encode($content, JSON_PRETTY_PRINT));
?>
</body>
</html>