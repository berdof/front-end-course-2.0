$(document).ready(function () {
    $('#showModal').click(function () {
        $('.overlay').fadeIn();
        $('.modal').fadeIn();
    });

    $('.overlay, .modal-close').click(function () {
        $('.overlay').fadeOut();
        $('.modal').fadeOut();
    });
});