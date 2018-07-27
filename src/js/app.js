import $ from 'jquery';
import 'owl.carousel';
import 'selectric';



// Function hide open menu
$(window).on('click touchstart', function() {
  let openedClass = 'filter__is-open';
  if ($(this.event.target).hasClass('js--filter-open')) {
    if($(this.event.target).next().is(':hidden')) {
      $('body').find('.filter__is-open').removeClass('filter__is-open');
      $(this.event.target).next().addClass(openedClass);
    } else {
      $('body').find('.filter__is-open').removeClass('filter__is-open');
    }
  } else {
    $('body').find('.filter__is-open').removeClass('filter__is-open');
  }
});
$('.filter__slist, .filter__flist').on('click touchstart', function(e) {
  e.stopPropagation();
});


// Select selectric jquery custom style
$('.filter__select').selectric();

// Main carousel
var slider = $('.slider__carousel');
slider.owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  items:1,
  dots: true,
});
// Custom Navigation Events
$('.slider__arr--right').click(function() {
  slider.trigger('next.owl.carousel');
});
$('.slider__arr--left').click(function() {
  slider.trigger('prev.owl.carousel');
});

// Main product slider
var owl = $('.js--product-carousel');
owl.owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
    0:{
      items:1
    },
    576:{
      items:2
    },
    992:{
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
  if (scroll >= 100) {
    $('.head').addClass('head__shadow');
  } else {
    $('.head').removeClass('head__shadow');
  }
});

