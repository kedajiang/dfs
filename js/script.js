$(document).ready(function() {
	var w = 1200;
	var h = 600;

	function shuffle(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	$('.random').each(function() {
			$(this).css({'top' : shuffle(0,h), 'left' : shuffle(0,w), '-webkit-transform' : 'rotate(' + shuffle(0,w) + 'deg)' });
		});

	$('.random').mouseenter(function() {
		$(this).css({'top' : shuffle(0,h), 'left' : shuffle(0,w), '-webkit-transform' : 'rotate(' + shuffle(0,w) + 'deg)', '-webkit-transition' : 'all 3s' });


	});

	$("#img1").mouseenter(function() {
			$("#des1").fadeTo("slow", 1);
	});

	$("#img1").mouseleave(function() {
			$("#des1").fadeTo("slow", 0);
	});

	$("#img2").mouseenter(function() {
			$("#des2").fadeTo("slow", 1);
	});

	$("#img2").mouseleave(function() {
			$("#des2").fadeTo("slow", 0);
	});

	$("#img3").mouseenter(function() {
			$("#des3").fadeTo("slow", 1);
	});

	$("#img3").mouseleave(function() {
			$("#des3").fadeTo("slow", 0);
	});


	$(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 528,
        navigation: false
      });
    });



});
