(function($) {
    "use strict";

    /*************************
     brand js start
     *************************/
    $('.ecommerce-home-slider').owlCarousel({
        items: 1,
        nav: true,
        navClass: ['owl-prev', 'owl-next'],
        navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
        dots:false,
        autoplay: true,
        slideSpeed: 300,
        loop: true
    });
    $('.product-slider').owlCarousel({
        items: 5,
        margin: 30,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 4
            },
            1000: {
                items: 5,
                margin: 30
            }
        }
    });
    $('.blog-slider').owlCarousel({
        items: 3,
        margin: 30,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1250: {
                items: 3,
                margin: 30
            }
        }
    });

    /*************************
     brand js end
     *************************/
    /*=====================
     05. Image to background js
     ==========================*/
    $(".bg-top" ).parent().addClass('b-top');
    $(".bg-bottom" ).parent().addClass('b-bottom');
    $(".bg-center" ).parent().addClass('b-center');
    $(".bg_size_content").parent().addClass('b_size_content');
    $(".bg-img" ).parent().addClass('bg-size');
    $(".bg-img.blur-up" ).parent().addClass('blur-up lazyload');
    jQuery('.bg-img').each(function() {
        var el = $(this),
            src = el.attr('src'),
            parent = el.parent();
        parent.css({
            'background-image': 'url(' + src + ')',
            'background-size': 'cover',
            'background-position': 'center',
            'display' : 'block'
        });
        el.hide();
    });

})(jQuery);

$(window).on('load', function () {
    $('#exampleModal').modal('show');
});