$(function () {
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.filter-price__input').ionRangeSlider({
    type: 'double',
    onStart: function (data) {
      $('.filter-price__from').text(`$${data.from}`);
      $('.filter-price__to').text(`$${data.to}`);
    },
    onChange: function (data) {
      $('.filter-price__from').text(`$${data.from}`);
      $('.filter-price__to').text(`$${data.to}`);
    }
  });

  $('.rateYo').rateYo({
    starWidth: '11px',
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true,
  });
  $('.products__item-rating').rateYo({
    starWidth: '16px',
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true,
  });

  $('.product-content__filter-btn').on('click', function () {
    $('.product-content__filter-btn').removeClass('product-content__filter-btn--active');
    $(this).addClass('product-content__filter-btn--active');
  });
  $('.button-grid').on('click', function () {
    $('.products__item').removeClass('products__item--list');
  })
  $('.button-list').on('click', function () {
    $('.products__item').addClass('products__item--list');
  })

  $('.product-content__filter-sort').styler();

 
  const mixerOne = mixitup('.products__items',{
    controls: {
      scope: 'local'
    }
  });
  // const mixerTwo = mixitup('.new-design__items',{
  //   controls: {
  //     scope: 'local'
  //   }
  // });
})