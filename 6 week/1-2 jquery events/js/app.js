// $('selector').method();
//События

$(document).ready(function () {
    //Click
    $('#btn1').click(function () {
        alert('You clicked me!');
    });

    $('#btn2').mouseover(function () {
        alert('You mouseovered me!');
    });

    $('#btn3').mouseout(function () {
        alert('You mouseout me!');
    });

    //addClass
    //removeClass
    //toggleClass

    $('#btn4').click(function () {
        $(this).addClass('active'); //GOOD
        //$('#btn4').addClass('active'); //BAD
    });

    $('#btn5').click(function () {
        $(this).removeClass('active'); //GOOD
        //$('#btn5').removeClass('active'); //BAD
    });

    $('#btn6').click(function () {
        $(this).toggleClass('active');//GOOD
        //$('#btn6').toggleClass('active'); //BAD
    });

    //html
    //hide
    //show
    //toggle
    //fadeIn
    //fadeOut
    //SlideDown
    //SlideUp

    $('#btn7').click(function () {
        $('.text').html('<div class="test">no <i>youre</i> not!</div>');
    });

    $('#btn8').click(function () {
        $(this).addClass('active');
        $('.text').hide();
    });

    $('#btn9').click(function () {
        $(this).addClass('active');
        $('.text').show();
    });

    $('#btn10').click(function () {
        $(this).addClass('active');
        $('.text').toggle();
    });

    $('#btn11').click(function () {
        $(this).addClass('active');
        $('.text').fadeIn(500);
    });

    $('#btn12').click(function () {
        $(this).addClass('active');
        $('.text').fadeOut(500);
    });

    $('#btn13').click(function () {
        $(this).addClass('active');
        $('.text').slideDown(500);
    });

    $('#btn14').click(function () {
        $(this).addClass('active');
        $('.text').slideUp(500);
    });


});


//Методы манипуляции с Html документом
