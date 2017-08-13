$(window).ready(function() {

    if($(window).width() < 769) {
        $('.form-search').appendTo('header nav');
    } else {
        $('.form-search').insertAfter('.header-logo');
    }

    $(window).resize(function() {

        if($(window).width() < 769) {
            $('.form-search').appendTo('header nav');
        } else {
            $('.form-search').insertAfter('.header-logo');
        }

    });

    $('.custom-select .current-value').click(function() {

        $(this).parent().toggleClass('active');

    });

    $('.custom-select ul li').click(function() {

        var newCurrency = $(this).text();
        var oldCurrency = $(this).parents('.custom-select').find('.current-value').text();

        $(this).parents('.custom-select').find('.current-value').text(newCurrency);
        $(this).text(oldCurrency);
        $(this).parents('.custom-select').find('input').attr('value', newCurrency);

        $(this).parents('.custom-select').removeClass('active');

    });

    $('.burger').click(function() {

        $(this).toggleClass('active');
        $(this).siblings('nav').toggleClass('active');

    });

});