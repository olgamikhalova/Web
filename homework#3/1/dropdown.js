$(document).ready(function(){
	var contacts = ['Jenny Hess', 'Elliot Fu', 'Stevie Feliciano', 'Christian', 'Matt'];
	$(".dropdown").append('<ul>');
	$("ul").append('<span>');

	for (var i = 0; i < contacts.length; i++){
		$("ul").append('<li><a href="#">' + contacts[i] + '</a></li>');
	}

	$(".dropdown a").click(function(){
		$(".dropdown ul").toggle();
	});
							
	$(".dropdown ul li a").click(function() {
		var text = $(this).html();
		$(".dropdown a span").html(text);
		$(".dropdown ul").hide();
	});

	$(document).bind('click', function(e){
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("dropdown")){
			$(".dropdown ul").hide();
		};
	});
});