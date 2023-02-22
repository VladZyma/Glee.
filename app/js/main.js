$(function () {
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

 
  const mixerOne = mixitup('.products__items',{
    controls: {
      scope: 'local'
    }
  });
  const mixerTwo = mixitup('.new-design__items',{
    controls: {
      scope: 'local'
    }
  });
})