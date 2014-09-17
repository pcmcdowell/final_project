$(document).ready(function(){
	$('.square').keydown(function(key){
		switch (parseInt(key.which, 10)) {
			case 37:
				$('.square').animate({left:'-=100px'}, 'fast', 0.5);
				break;
			case 38:
				$('.square').animate({up:'-=100px'}, 'fast', 0.5);
				break;
			case 39:
				$('.square').animate({left:'+=100px'}, 'fast', 0.5);
				break;
			case 40:
				$('.square').animate({up:'+=100px'}, 'fast', 0.5);
				break;
			}
	});
	$('div').mouseenter(function(){
		$('.square2').fadeTo('slow', 0.5);
	});
	$('div').mouseleave(function(){
		$('.square2').fadeTo('slow', 1);
	});
	$('.square').click(function(){
		$('.square').addClass('red');
	});
});
