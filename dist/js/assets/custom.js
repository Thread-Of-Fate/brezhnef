$(function () {

  choiceForm = $('#choice-form');
  choiceSelect = $('#choice-select');
  choiceCity = $('.choice_city');
  modalOverlay = $('.modal__overlay');
  modalChoice =$('.modal__choice');
  modalBtn = $('.modal__close');

  choiceSelect.select2({
    width: '100%',
    language: 'ru',
    placeholder: 'Выбрать город',
  });

  choiceCity.on('click', function(e) {
    e.preventDefault();
    modalOverlay.fadeIn();
    modalChoice.fadeIn();
  });

  modalBtn.on('click', function() {
    modalOverlay.fadeOut();
    modalChoice.fadeOut();
  });

  choiceForm.on('change', function() {
    choiceCity.text(choiceSelect.val());
  });

  var headerBtn = $('.header__btn');
  var menu = $('.menu__wrap');
  var menuOverlay = $('.menu__overlay');
  var closeMenu = $('.menu__close');

  headerBtn.on('click', function() {
    menuOverlay.fadeIn(function() {
      menu.addClass('menu__wrap_active');
    });
   });

   closeMenu.on('click', function() {
    menuOverlay.fadeOut();
    menu.removeClass('menu__wrap_active');
   });

   servicesSlider = $('.services__slider');

   servicesSlider.owlCarousel({
     items: 1,
     dots: true,
     loop: true,
     autoplay: true,
     autoplayTimeout: 6000,
     smartSpeed: 2000,
     dotsSpeed: 2000,
     margin: 20
   });

   $('.services__controls .controls__btn-prev').on('click', function(){
     servicesSlider.trigger('prev.owl.carousel');
   });

   $('.services__controls .controls__btn-next').on('click', function(){
    servicesSlider.trigger('next.owl.carousel');
  });

  if($(window).width() >= 1200) {
    var scene = $('.services__parallax').get(0);
    var parallaxInstance = new Parallax(scene);
  }

  if($(window).width() >= 1200) {
    var scene = $('.discount__parallax').get(0);
    var parallaxInstance = new Parallax(scene);
  }

  worksSlider = $('.works__slider');

  worksSlider.owlCarousel({
    items: 3,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
    dotsSpeed: 1000,
    margin: 20
  });

  $('.works__controls .controls__btn-prev').on('click', function(){
    worksSlider.trigger('prev.owl.carousel');
  });

  $('.works__controls .controls__btn-next').on('click', function(){
    worksSlider.trigger('next.owl.carousel');
 });



$('.reviews-slider').slick({
  infinite: false,
  dots: true,
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow: '<img class="slider-arrows slider-arrows__left" src="../img/arrow-left.svg" alt=""></img>',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="../img/arrow-right.svg" alt=""></img>',
  responsive: [
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.certificates-slider').slick({
  infinite: false,
  dots: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: '<img class="slider-arrows slider-arrows__left" src="../img/arrow-left.svg" alt=""></img>',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="../img/arrow-right.svg" alt=""></img>',
});

$("#accordion-list-1").click(function(){
    $("#accordion-body-1, #accordion-list-1").toggleClass("active");
});
$("#accordion-list-2").click(function(){
    $("#accordion-body-2, #accordion-list-2").toggleClass("active");
});
$("#accordion-list-3").click(function(){
    $("#accordion-body-3, #accordion-list-3").toggleClass("active");
});
$("#accordion-list-4").click(function(){
    $("#accordion-body-4, #accordion-list-4").toggleClass("active");
});
$("#accordion-list-5").click(function(){
    $("#accordion-body-5, #accordion-list-5").toggleClass("active");
});
$("#accordion-list-6").click(function(){
    $("#accordion-body-6, #accordion-list-6").toggleClass("active");
});
$("#accordion-list-7").click(function(){
    $("#accordion-body-7, #accordion-list-7").toggleClass("active");
});

});
