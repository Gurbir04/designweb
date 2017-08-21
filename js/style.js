// JavaScript Document

$(document).ready(function() {
    
	$('[data-toggle="tooltip"]').tooltip();
	
	$('.owl-carousel').owlCarousel({
		items:1,
		autoplay:true,
		autoplayHoverPause:true,
		margin:15,
		loop:true
	});
	
	$(document).on('click','.navbar-nav > li > a', function(event){
		$('#myNavbar').removeClass('in')
	});
	
});

/************ Smotth scroll*********/
$(document).on('click', '.navbar-nav > li > a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1200);
});