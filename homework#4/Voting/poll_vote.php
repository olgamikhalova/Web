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
if ($vote == 'tea_drink') $content['Tea'] += 1;
if ($vote == 'coffee_drink') $content['Coffee'] += 1;

file_put_contents($filename, json_encode($content, JSON_PRETTY_PRINT));
?>
<script type="text/javascript">
	location.href = "statistics.html";								
</script>
</body>
</html>