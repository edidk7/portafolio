$(document).ready(function() {
    AOS.init();

    $('#owl-carousel-uiux').owlCarousel({
        autoplay: true,
        autoplayHoverPaused: true,
        items: 1,
        nav: true,
        dots: false,
        loop: true,
        dots: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
      $('#owl-carousel-maquetacion').owlCarousel({
        autoplay: true,
        autoplayHoverPaused: true,
        items: 4,
        nav: true,
        dots: false,
        loop: true,
        dots: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });

});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll < 50) {
        console.log("muestra la wea");
        $('.fixed-top').css('background', 'transparent');
        $('.fixed-top').css('transition', 'all 0.1s ease-in-out 0s');
        $('.fixed-top').css('border-bottom', '0px solid #fff');
    } else {
        $('.fixed-top').css('background', '#182848');
        $('.fixed-top').css('border-bottom', '1px solid #8393B4');
        $('.nav-link').css('background', '#');
        $('.fixed-top').css('transition', 'all 0.4s ease-in-out 0s');

    }
});
$(window).scroll(function() {
    if ($(document).scrollTop() == 0) {
        $('.navbar').removeClass('tiny');
    } else {
        $('.navbar').addClass('tiny');
    }
});