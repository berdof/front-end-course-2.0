$(document).ready(function () {
    $('.accordion-header').click(function () {
        $('.accordion-content').slideUp();
        $(this).next().slideToggle();
        $('.accordion-card').removeClass('active');
        $(this).parent().addClass('active');
    });

    $('.accordion-card.active .accordion-content').show();

});