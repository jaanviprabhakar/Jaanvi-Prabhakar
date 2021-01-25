// JavaScript Document
$(document).ready(function(){
	$('.menu-toggler').on('click',function(){
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');

		// toggleClass works as a switch - toggles 'open' class
	});


	//to close open class after clicking on nav-links to close hamburger menu
	$('.top-nav .nav-link').on('click', function(){
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});

	//animate scroll in jquery 

	$('nav a[href*="#"]').on('click', function () {
		$('html, body').animate( {
			scrollTop: $($(this).attr('href')).offset().top - 100
		}, 2000);
	});

	$('#up').on('click', function() {
		$('html, body').animate({ //animate fn has 2 parameters - scrolltop:val, duration-2000 (2sec) 
			scrollTop:0
		},2000);
	});

	AOS.init({
		easing: 'ease',
		duration: 1500, //1.5sec
		once:true
	});

});