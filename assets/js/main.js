$(document).ready(function() {
    AOS.init({
      // offset: 120,
	    // delay: 800,
	    // duration: 400,
	    // easing: 'ease'
    });


    $(document).on('click', '.nav-item a', function (e) {
      $(this).parent().addClass('active').siblings().removeClass('active');
  });

    navBarDesktop();
    effectToWritte();
    sliderAbout();
    buttonScroll();
    moveElementMouse();
    portfolioFilter();

    $('.venobox').venobox();

    new fullpage('#fullPage', {
      autoScrolling: true,
      scrollOverflow:false,
      scrollHorizontally:true,
      navigation: true,
      navigationTooltips:['Home','Blog','Aboutus'],
      controlArrows: false,
      slidesNavigation:true,
      keyboardScrolling:true
    })

});

function sliderAbout(){

  $('#owl-carousel-about').owlCarousel({
    autoplay: false,
    autoplayHoverPaused: false,
    items: 1,
    margin:2,
    autoplayTimeout:10000,
    nav: false,
    dots: false,
    loop: false,
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
}

function moveElementMouse(){
  var object1=$('#object1');

  var layer=$('#layer');

  layer.mousemove(function (e){
    var valueX=(e.pageX * -1 / 30);
    var valueY=(e.pageY * -1 / 30);

    object1.css({
      'transform':'translate3d('+valueX+'px,'+valueY+'px,0) rotate(20deg)'
    });
  });
}

function navBarDesktop(){
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll < 50) {
        console.log("muestra la wea");
        $('.fixed-top').css('background', 'transparent');
        $('.fixed-top').css('transition', 'all 0.3s ease-in-out 0s');
        $('.fixed-top').css('border-bottom', '0px solid #fff');
        $('.icon-wsp').removeClass('addColorWhite');
    } else {
        $('.fixed-top').css('background', '#191919');
        $('.icon-wsp').addClass('addColorWhite');
        $('.fixed-top').css('color', '#fff');
        $('.fixed-top').css('border-bottom', '1px solid #8393B4');
        $('.fixed-top').css('transition', 'all 0.5s ease-in-out 0s');

    }
});
$(window).scroll(function() {
    if ($(document).scrollTop() == 0) {
        $('.navbar').removeClass('tiny');
    } else {
        $('.navbar').addClass('tiny');
    }
});
}
function effectToWritte(){
  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 200 - Math.random() * 180;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }
  
    setTimeout(function() {
    that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };
}

function buttonScroll(){

var btn = $('#buttonScroll');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


}

function portfolioFilter(){
    // Porfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
  
    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
  
      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
}