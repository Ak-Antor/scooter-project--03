// aos
AOS.init({disable: 'mobile'});


// counter

$('.counter').counterUp({
  delay: 100,
  time: 1000,
  infinite:true,
});

// text effect

var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString('the Future.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('the Future.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>the Future.</strong>')
    .pauseFor(2500)
    .start();

// slick slider

$('.myslider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true,
    autoplay: true,
    prevArrow:'  <i class="fa-solid arrowis nextarrow fa-arrow-right"></i>',
    nextArrow:'<i class="fa-solid arrowis prearrow fa-arrow-left"></i>',
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots:false,
          autoplay: true,
          arrows:false,

        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots:false,
          autoplay: true,
          arrows:false,

        }
      },

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots:false,
          autoplay: false,
          arrows:true,
          

        }
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

//   slick slider 1

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:false,
    draggable:true,
    focusOnSelect:true,
    mobileFirst:true, 
    centerMode:true,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows:false,
  });
