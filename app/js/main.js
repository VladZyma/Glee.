$(function () {
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.details__slide-thumb').slick({
    asNavFor: '.details__slide-big',
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    focusOnSelect: true,
  });
  $('.details__slide-big').slick({
    asNavFor: '.details__slide-thumb',
    arrows: false,
    draggable: false,
    fade: true,
  });

  $('.related__items').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg width="22" height="9" viewBox="0 0 22 9"><path fill="#a3bbc8" fill-rule="evenodd" d="M1460.7,1330.53h-16.94l0.1-2.86a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-0.18-.17a0.267,0.267,0,0,0-.4,0l-4.2,4.21a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l4.2,4.21a0.29,0.29,0,0,0,.4,0l0.18-.17a0.323,0.323,0,0,0,.08-0.21,0.3,0.3,0,0,0-.08-0.2l-0.12-2.86h16.97a0.3,0.3,0,0,0,.29-0.3v-1.37A0.291,0.291,0,0,0,1460.7,1330.53Z" transform="translate(-1439 -1327)"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="22" height="9" viewBox="0 0 22 9"><path fill="#a3bbc8" fill-rule="evenodd" d="M1509.3,1332.47h16.94l-0.1,2.86a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l0.18,0.17a0.267,0.267,0,0,0,.4,0l4.2-4.21a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-4.2-4.21a0.29,0.29,0,0,0-.4,0l-0.18.17a0.323,0.323,0,0,0-.08.21,0.318,0.318,0,0,0,.08.2l0.12,2.86h-16.97a0.3,0.3,0,0,0-.29.3v1.37A0.291,0.291,0,0,0,1509.3,1332.47Z" transform="translate(-1509 -1327)"/></svg></button>',
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

  $('.product-content__filter-sort, .details__input').styler();

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();

    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  })

  const mixerOne = mixitup('.mix-container1',{
    controls: {
      scope: 'local'
    }
  });
  const mixerTwo = mixitup('.mix-container2',{
    controls: {
      scope: 'local'
    }
  });
})
