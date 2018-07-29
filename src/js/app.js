import $ from 'jquery';
import 'owl.carousel';
import 'selectric';
import 'jquery-sticky';
import 'remodal';


var clickEventType=((document.ontouchstart!==null)?'click':'touchstart');
// Mmenu
$('.js--mmenu-open, .js--menu-open span').on(clickEventType, function(e) {
  $('.js--mmenu').addClass('mmenu__is-opened');
  $('body').css('overflow','hidden');
  return false;
});
$('.js--mmenu-close').on(clickEventType, function(e) {
  $('.js--mmenu').removeClass('mmenu__is-opened');
  $('body').css('overflow','auto');
  return false;
});

// Function hide open menu
$(window).on(clickEventType, function() {
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
  nav:false,
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
  if($(this).outerWidth() <= 768) {
    $('.head').sticky({topSpacing:0,className:'head__sticky',zIndex:'11'});
    $('.top').unstick();
  } else {
    $('.top').sticky({topSpacing:0,className:'top__sticky',zIndex:'10'});
    $('.head').unstick();
  }
  $('.top').sticky('update');
  $('.head').sticky('update');
});


// Head fixed 
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 120) {
    $('.head, .top').addClass('head__shadow');
  } else {
    $('.head, .top').removeClass('head__shadow');
  }
});
