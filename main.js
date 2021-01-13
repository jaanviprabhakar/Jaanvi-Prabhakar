// JavaScript Document
$(document).ready(function(){
	$('.menu-toggler').on('click',function(){
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');

		// toggleClass works as a switch
	});
});