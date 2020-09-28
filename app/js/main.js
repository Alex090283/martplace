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



    var mixer = mixitup('.products__inner');



});