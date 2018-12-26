$(document).ready(function () {
    $('.btn').click(function (event) {
        event.preventDefault();
        $('#box-to-animate')
            .addClass('animated shake')
            .one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd', function () {
                $(this).removeClass('shake');
            });
    })
});

