$(document).ready(function () {
    $('.clients-list').slick({
        asNavFor: '.clients-img-list',
    });
    $('.clients-img-list').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.clients-list',
        focusOnSelect: true
    });
});

