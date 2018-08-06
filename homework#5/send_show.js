//sending message by pressing ENTER
function sendMessageByEnter(){
	$('#usermsg').keyup(function (e) {
		if (e.which == 13) {
			$('#send').click();
			return false;
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
function showAllMessages(){
	$.ajax({
		url:'show.php',
		method:'post',
		success: function(data){
			$('#chatbox').html(data);
			$('#chatbox').scrollTop($('#chatbox').prop("scrollHeight"));
		}
	})
}

//show online messages
function showNewMes(){
	var usermsg = $('#usermsg').val();
	$.ajax({
		type : 'post',
		url:'show_new_message.php',
		data : {
				'usermsg':usermsg,
			},
		method:'post',
		success: function(data){
			$('#chatbox').append(data);
			$('#chatbox').scrollTop($('#chatbox').prop("scrollHeight"));
		}
	})
}

$(document).ready(sendMessageByEnter());
$(document).ready(showAllMessages());
    
//var interval = 1000;
//$(document).ready(setInterval('showNewMes()', interval));
