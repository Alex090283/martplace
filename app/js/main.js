$(function() {

    $('.aside__title').on('click', function() {
        $('.category__aside-items > ul').slideToggle();

    });

    $('.filter__aside-title').on('click', function() {
        $('.filter__aside-items > ul').slideToggle();

    });

    $('.price-range__aside-title').on('click', function() {
        $(this).next('div').slideToggle();

    });

    $('.slider__slide').slick({
        arrows: true,
        swipeToSlide: true,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        prevArrow: '.left',
        nextArrow: '.right',

    });

    $('.feedback__items').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '.arrow-left',
        nextArrow: '.arrow-right',
        responsive: [{
                breakpoint: 1161,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 781,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]


    });

    $('.rating').rateYo({
        rating: 4.5,
        spacing: "3px",
        starWidth: "14px",
        readOnly: true,
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 320,
        from: 30,
        to: 300,
        prefix: "$"
    });

    $('.selector__icons-list').on('click', function() {
        $('.product-page__items-item').addClass('list');
        $('.selector__icons-list').addClass('active');
        $('.selector__icons-grid').removeClass('active');
    });

    $('.selector__icons-grid').on('click', function() {
        $('.product-page__items-item').removeClass('list');
        $('.selector__icons-grid').addClass('active');
        $('.selector__icons-list').removeClass('active');
    });

    $('.list-1').on('click', function() {
        $('.list-2, .list-3, .list-4, .list-5').removeClass('active');
        $('.content-2, .content-3, .content-4, .content-5').removeClass('active');
        $('.list-1').addClass('active');
        $('.content-1').addClass('active');
    });

    $('.list-2').on('click', function() {
        $('.list-1, .list-3, .list-4, .list-5').removeClass('active');
        $('.content-1, .content-3, .content-4, .content-5').removeClass('active');
        $('.list-2').addClass('active');
        $('.content-2').addClass('active');
    });

    $('.list-3').on('click', function() {
        $('.list-1, .list-2, .list-4, .list-5').removeClass('active');
        $('.content-1, .content-2, .content-4, .content-5').removeClass('active');
        $('.list-3').addClass('active');
        $('.content-3').addClass('active');
    });

    $('.list-4').on('click', function() {
        $('.list-1, .list-2, .list-3, .list-5').removeClass('active');
        $('.content-1, .content-2, .content-3, .content-5').removeClass('active');
        $('.list-4').addClass('active');
        $('.content-4').addClass('active');
    });

    $('.list-5').on('click', function() {
        $('.list-1, .list-2, .list-3, .list-4').removeClass('active');
        $('.content-1, .content-2, .content-3, .content-4').removeClass('active');
        $('.list-5').addClass('active');
        $('.content-5').addClass('active');
    });

    $('#single').on('click', function() {
        $('.multi-text').removeClass('active');
        $('.single-text').addClass('active');

    });

    $('#multi').on('click', function() {
        $('.single-text').removeClass('active');
        $('.multi-text').addClass('active');

    });

    $('.latest').on('click', function() {
        $('.popular').removeClass('active');
        $('.latest').addClass('active');

    });

    $('.popular').on('click', function() {
        $('.latest').removeClass('active');
        $('.popular').addClass('active');

    });

    $('.header__menu-btn').on('click', function() {
        $('.header__menu-items').slideToggle()
    });







    var mixer = mixitup('.products__inner');



});