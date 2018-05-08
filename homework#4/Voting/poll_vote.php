<?php
$vote = $_REQUEST['vote'];
$filename = "poll_result.json";

$content = json_decode(file_get_contents($filename), true) ?: ['Tea' => 0, 'Coffee' => 0];

isset($content[$vote]) ? $content[$vote]++ : $content[$vote] = 1;

file_put_contents($filename, json_encode($content, JSON_PRETTY_PRINT));
?>
<script type="text/javascript">
	location.href = "statistics.html";								
</script>