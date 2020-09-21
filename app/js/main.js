$(function() {


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

    $(".rating").rateYo({
        rating: 4.5,
        spacing: "3px",
        starWidth: "14px",
        readOnly: true,
    });

    var mixer = mixitup('.products__inner');



});