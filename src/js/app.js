import $ from 'jquery';
import 'owl.carousel';

// Main carousel
$('.slider__carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  items:1,
  dots: true,
});

// Main product slider
var owl = $('.main-product__carousel');
owl.owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:4
    }
  }
});

// Custom Navigation Events
$('.cnav__arr--right').click(function() {
  owl.trigger('next.owl.carousel');
});
$('.cnav__arr--left').click(function() {
  owl.trigger('prev.owl.carousel');
});

$(window).on('resize load', function() {
  let height = $('.head').outerHeight();
  $('.top').css('padding-top',height);
});

// Head fixed 
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 300) {
    $('.head').addClass('head__shadow');
  } else {
    $('.head').removeClass('head__shadow');
  }
});

