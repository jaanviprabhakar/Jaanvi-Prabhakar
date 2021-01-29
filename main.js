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

    //Disable right click
    window.onload = function() {
        document.addEventListener("contextmenu", function(e){
          e.preventDefault();
        }, false);
        document.addEventListener("keydown", function(e) {
        //document.onkeydown = function(e) {
          // "I" key
          if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            disabledEvent(e);
          }
          // "J" key
          if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            disabledEvent(e);
          }
          // "S" key + macOS
          if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            disabledEvent(e);
          }
          // "U" key
          if (e.ctrlKey && e.keyCode == 85) {
            disabledEvent(e);
          }
          // "F12" key
          if (event.keyCode == 123) {
            disabledEvent(e);
          }
        }, false);
        function disabledEvent(e){
          if (e.stopPropagation){
            e.stopPropagation();
          } else if (window.event){
            window.event.cancelBubble = true;
          }
          e.preventDefault();
          return false;
        }
      };

    //Disable cut copy paste
    $(document).ready(function () {
        //Disable full page
        $('body').bind('cut copy paste', function (e) {
            e.preventDefault();
        });
        
        //Disable part of page
        $('#id').bind('cut copy paste', function (e) {
            e.preventDefault();
        });
    });
});