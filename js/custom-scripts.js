$(window).ready(function() {

    setTimeout(function() {
        $('.preloader').fadeOut(500);
    }, 500);

    $(document).click(function(event) {

        if (!$(event.target).closest(".custom-select").length) {
            $('.custom-select').removeClass('active');
        }

    });

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

    $('.product-card').hover(
        function () {
            if ($(window).width() > 980) {

                $(this).addClass('active');

            }
        },
        function () {

            if ($(window).width() > 980) {

                $(this).removeClass('active');

            }

        }
    );

    $('.product-card').click(function() {

        if($(window).width() < 981) {

            $(this).toggleClass('active');

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

    $('.header-burger').click(function() {

        $(this).toggleClass('active');
        $(this).siblings('nav').toggleClass('active');

    });

    $('.slider-banner').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.products-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows: '.products-control',
        prevArrow: '.products-control-prev',
        nextArrow: '.products-control-next',
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    $('.catalog-burger').click(function() {
        $(this).parents('.catalog').toggleClass('active');
    });

    $('.products-main-prev').click(function() {
        if($(window).width() < 769) {
            var margin = parseInt($('.product-card:first-of-type').css('margin-left'));
            if(margin !== 250) {
                $('.product-card:first-of-type').css('margin-left', margin + 234 + 'px');
            }
        }
    });

    $('.products-main-next').click(function() {
        if($(window).width() < 769) {
            var value;
            if($(window).width() < 481) {
                value = -(($('.products-list').find('.product-card').length - 2) * 234 - 16);
            } else {
                value = -(($('.products-list').find('.product-card').length - 4) * 234 - 16);
            }
            var margin = parseInt($('.product-card:first-of-type').css('margin-left'));
            if(margin !== value) {
                $('.product-card:first-of-type').css('margin-left', margin - 234 + 'px');
            }
        }
    });

});