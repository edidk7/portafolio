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
        $('.fixed-top').css('background', 'transparent');
        $('.fixed-top').css('transition', 'all 0.4s ease-in-out 0s');
    } else {
        $('.fixed-top').css('background', '#ccc');
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