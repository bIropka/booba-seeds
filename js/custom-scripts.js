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
        dots: true,
        responsive: [
            {
                breakpoint: 641,
                settings: {
                    arrows: false
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

    /*if($(window).width() < 769) {
        $('.products-list').slick({
            appendArrows: '.products-main-control',
            prevArrow: '.products-main-prev',
            nextArrow: '.products-main-next',
            slidesToShow: 4,
            infinite: false
        });
    } else {
        $('.products-list').slick('unslick');
    }

    $(window).resize(function() {

        if($(window).width() < 769) {
            $('.products-list').slick({
                appendArrows: '.products-main-control',
                prevArrow: '.products-main-prev',
                nextArrow: '.products-main-next',
                slidesToShow: 4,
                infinite: false
            });
        } else {
            $('.products-list').slick('unslick');
        }

    });*/

});