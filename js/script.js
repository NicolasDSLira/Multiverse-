$(document).ready(function () {

    setInterval(() => {
        var targetOffset  = $(".navbar-scroll").offset().top;
        if (targetOffset  > 100 ) {
            $('.navbar-scroll').css('background','rgb(61, 0, 58)');
        }else{
            $('.navbar-scroll').css('background','linear-gradient(to bottom, rgba(61, 0, 58, 0.500), rgba(87, 0, 83, 0.400),rgba(61, 0, 58, 0.300), rgba(61, 0, 58, 0.200), rgba(61, 0, 58, 0))');
        }
    }, 100);
});

$('.navbar-scroll a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
      
    $('html, body').animate({ 
      scrollTop: targetOffset -100
    }, 500);
  });


var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: false,
    nav: false,
    margin:30,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },            
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
});