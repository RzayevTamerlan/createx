$(function () {
  var mixer = mixitup('.directions__list');
  $('.directions__filter-btn').on('click', function name() {
    $('.directions__filter-btn').removeClass('directions__filter-btn--accent')
    $(this).addClass('directions__filter-btn--accent')
  })

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    waitForAnimate: true,
    responsive:
      [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            draggable: true,
          },
        },
      ]
  })
  $('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')({
    })
  })
  $('.team__slider-perv').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')({
    })
  })
  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testimonials__dots'),
    responsive:
    [
      {
        breakpoint: 550,
        settings: {
          
        },
      },
    ]
  })
  $('.testimonials__next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')({
    })
  })
  $('.testimonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')({
    })
  })
  $('.program__acc-link').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('program__acc-link--active')
    $(this).children('.program__acc-text').slideToggle()
  })
    $(".header__nav-list, .footer__top-list, .footer__bottom-inner, #header-btn, .header__logo-box, .about__btn-box").on("click","a", function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
    setInterval(() => {
      if ($(window).scrollTop()>980 && $('.header__top').hasClass('header__top--open') === false){
        $('.burger').addClass('burger--follow');
      } else {
        $('.burger').removeClass('burger--follow');
      }
    },0);

    $('.burger, .overlay, .header__top a').on('click', function (e) {
      e.preventDefault()
      $('.header__top').toggleClass('header__top--open')
      $('.overlay').toggleClass('overlay--show')
      $('.burger__liniya1').toggleClass('burger--krest1')
      $('.burger__liniya2').toggleClass('burger--krest2')
      $('.burger__liniya3').toggleClass('burger--krest3')
    })
    $('.footer__top-title--slide').on('click', function() {
      $(this).next().slideToggle()
    })

})