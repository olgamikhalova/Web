$(document).ready(function(){
	$(window).scroll(function(){	 
		if($(this).scrollTop() != 0){		 
			$('#myBtn').fadeIn();		 
		}else{	 
			$('#myBtn').fadeOut();	 
		} 
	});	 
	$('#myBtn').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
	
	$('a').on('click', function(e) { 
		var el = $( e.target.getAttribute('href') );
		var elOffset = el.offset().top;
		var elHeight = el.height();
		var windowHeight = $(window).height();
		var offset;
		if (elHeight < windowHeight) {
			offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
		}else {
			offset = elOffset;
		}
		var speed = 800;
		$('html, body').animate({scrollTop:offset}, speed);	
	});
});