import $ from 'jquery';
import 'owl.carousel';
import 'jquery-sticky';
import 'remodal';
import '@fancyapps/fancybox';




// Fancybox gallery init
$().fancybox({
  selector : '[data-fancybox="gallery"]',
  loop     : true
});


// custom select
/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('.select-custom').each(function() {
  var $this = $(this), numberOfOptions = $(this).children('option').length;
  $this.addClass('select-hidden');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');
  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());
  var $list = $('<ul />', {
    'class': 'select-options'
  }).insertAfter($styledSelect);
  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }
  var $listItems = $list.children('li');
  $styledSelect.click(function(e) {
    e.stopPropagation();
    $('div.select-styled.active').not(this).each(function() {
      $(this).removeClass('active').next('ul.select-options').hide();
    });
    $(this).toggleClass('active').next('ul.select-options').toggle();
  });
  $listItems.click(function(e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $list.hide();
    //console.log($this.val());
  });
  $(document).click(function() {
    $styledSelect.removeClass('active');
    $list.hide();
  });
});


// remodal data init
var options = {};
$('[data-remodal-id=order]').remodal(options);

//count
// $('.count__btn').on('click', function() {
//   var $button = $(this);
//   var $input = $button.parent().find('input.count__count');
//   var $max = parseFloat($input.data('max'));
//   var $min = parseFloat($input.data('step'));

//   $input.val(function(i, value) {
//     var $result = (+parseFloat(value) + (1 * +parseFloat($button.data('multi')))).toFixed(1);
//     if($result <= $min) {
//       return $min;
//     } else if($result > $max) {
//       return $max;
//     } else {
//       return $result;
//     }
//   });
// });

// $(function() {
//   $('.count__count').change(function() {
//     if($(this).attr('data-step') === '1') {
//       var max = parseInt($(this).attr('data-max'));
//       var min = 1;
//     } else {
//       var max = parseFloat($(this).attr('data-max'));
//       var min = 0.1;
//     }
//     if ($(this).val() > max)
//     {
//       $(this).val(max);
//     }
//     else if ($(this).val() < min)
//     {
//       $(this).val(min);
//     }
//   });
// });

// $('#msCart input[name="count"], #msCart .count__btn' ).on('click change', function() {
//   var id = $( this ).parents('tr'); // родитель инпута и div-ов с суммой;
//   var input  = id.find('.count__count').val();
//   var count = parseFloat(input);
//   var price  = parseInt(id.find('.ms2_product_price').text().replace(/\s/g, ''));
//   id.find('.ms2_product_cost' ).html( count * price );
// });



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
  //console.log($(this.event.target));
  let openedClass = 'filter__is-open';
  if ($(this.event.target).hasClass('js--filter-open')) {
    if($(this.event.target).next().is(':hidden')) {
      $('body').find('.filter__is-open').removeClass('filter__is-open');
      $(this.event.target).next().addClass(openedClass);
    } else {
      $('body').find('.filter__is-open').removeClass('filter__is-open');
    }
  } else {
    if(!$(this.event.target).hasClass('filter__sbtn')) {
      $('body').find('.filter__is-open').removeClass('filter__is-open');
    }
  }
});
$('.filter__flist').on('click touchstart', function(e) {
  e.stopPropagation();
});
$('.filter__sbtn').on('click touchend', function() {
  setTimeout(() => {
    $('body').find('.filter__is-open').removeClass('filter__is-open');
  }, 300);
});

// Main carousel
var slider = $('.slider__carousel');
slider.owlCarousel({
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
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
  dots: false,
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
