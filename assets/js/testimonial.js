(function($) {
    "use strict";

    /*************************
     team js start
     *************************/

    $('#app2-slider').owlCarousel({
        items: 5,
        margin: 30,
        autoHeight: true,
        nav: false,
        dots:false,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            320: {
                items: 1,
                margin: 10
            },
            480: {
                items: 1,
                margin: 10
            },
            576: {
                items: 2,
                margin: 10
            },
            768: {
                items: 2,
                margin: 10
            },
            991: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    /*************************
     team js end
     *************************/


    /*************************
     testimonial js start
     *************************/

    $('#event-testimonial').owlCarousel({
        items: 1,
        margin: 0,
        autoHeight: true,
        nav: true,
        dots: false,
        navText: ['<img src="../assets/images/music/gallery/gallery-icon/left.png">', '<img src="../assets/images/music/gallery/gallery-icon/right.png">'],
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
    });


    /*************************
     testimonial js end
     *************************/

    /*************************
     testimonial js start
     *************************/

    $('#saas-1-slider').owlCarousel({
        items: 1,
        margin: 0,
        dots: true,
        nav: false,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
    });

    /*************************
     testimonial js end
     *************************/

    /*************************
     testimonial js start
     *************************/

    $('#gym-testimonial').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*************************
     testimonial js end
     *************************/

    /*************************
     testimonial js start
     *************************/

    $('#music-testimonial-slider').owlCarousel({
        items: 1,
        margin: 0,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true
    });

    /*************************
     testimonial js end
     *************************/

    /*************************
     testimonial js start
     *************************/

    $('#agency-testimonial').owlCarousel({
        items: 3,
        margin: 65,
        nav: true,
        dots: false,
        navText: ['<img src="../assets/images/agency/testimonial/left.png">', '<img src="../assets/images/agency/testimonial/right.png">'],
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            320: {
                items: 1,
                margin: 10
            },
            480: {
                items: 1,
                margin: 10
            },
            575: {
                items: 2,
                margin: 10
            },
            991: {
                items: 2,
                margin: 30
            },
            1199: {
                items: 3,
                margin: 30
            },
            1600: {
                items: 3
            }
        }
    });

    /*************************
     testimonial js end
     *************************/

    /*************************
     magnific popup video js start
     *************************/

    $('.button').magnificPopup({
        items: {
            src: 'https://www.youtube.com/watch?v=7eo8XpT4CmM'
        },
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }
    });

    /*************************
     magnific popup video js end
     *************************/
})(jQuery);