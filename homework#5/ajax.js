function sendMessage(){
        var usermsg = $('#usermsg').val();
        if(usermsg.length > 0) {
			$.ajax({
				type : 'post',
				url  : 'send.php',
				data : {
					'usermsg':usermsg,
					ajaxsend: true
				},
				method:'post',
				success: function(data) {
					$('#usermsg').val(''); // удаляем содержимое поля для сообщения	
					//window.console && console.log(data);
					$('#chatbox').html(data);
					//document.getElementById('chatbox').scrollTop = document.getElementById('chatbox').scrollHeight;
					//$('#send_message_result').html("Yes!");
				},
				error: function() {
					$('#send_message_result').html("Message was not sent");
				}
			});
		} else if(usermsg.length == 0) {
            $('#send_message_result').html("Enter your message!");
        }
}

function show(){
	$.ajax({
			url:'show.php',
			data:{
				ajaxget:true
			},
			method:'post',
			success: function(data){
				//window.console && console.log(data);
				$('#chatbox').html(data);
			}
	})
}

var interval = 1000;
    
show();
    
setInterval('show()', interval);