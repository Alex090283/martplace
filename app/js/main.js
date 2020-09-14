$(function() {


    $('.slider__slide').slick({
        arrows: true,
        swipeToSlide: true,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        prevArrow: '.arrow-left',
        nextArrow: '.arrow-right',

    });

    var mixer = mixitup('.products__inner');



});