//sending message by pressing ENTER
function sendMessageByEnter(){
	var input = document.getElementById("usermsg");
	input.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			document.getElementById("send").click();
		}
});
}

//sending message to messages.json
function sendMessage(){
    var usermsg = $('#usermsg').val();
    if(usermsg.length > 0) {
		$.ajax({
			type : 'post',
			url  : 'send.php',
			data : {
				'usermsg':usermsg,
			},
			method:'post',
			success: function(data) {
				//delete the content of the message field
				$('#usermsg').val(''); 	
				$('#chatbox').scrollTop($('#chatbox').prop("scrollHeight"));
			},
			error: function() {
				$('#send_message_result').html("Message was not sent");
			}
		});
	} else if(usermsg.length == 0) {
        $('#send_message_result').html("Enter your message!");
    }
}

//show all messages
function show(){
	$.ajax({
		url:'show.php',
		method:'post',
		success: function(data){
			$('#chatbox').html(data);
			//$('#chatbox').scrollTop($('#chatbox').prop("scrollHeight"));
		}
	})
}

$(document).ready(sendMessageByEnter());
    
$(document).ready(show());

var interval = 1000;
    
setInterval('show()', interval);
