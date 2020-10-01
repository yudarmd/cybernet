(function($) {
    "use strict";
    /*************************
     screenshot js start
     *************************/

    $('#screenshot-slider').owlCarousel({
        items: 3,
        margin: 55,
        autoHeight: true,
        nav: false,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            360: {
                items: 2,
                margin: 10
            },
            480: {
                margin: 15
            },
            576: {
                margin: 15
            },
            1200: {
                margin: 0
            },

            1366: {
                items: 3
            }
        }
    });

    /*************************
     screenshot js end
     *************************/


    /*************************
     brand js start
     *************************/

    $('#brand-slider').owlCarousel({
        items: 6,
        margin: 80,
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
                items: 2,
                margin: 10
            },
            360: {
                items: 3,
                margin: 20
            },
            480: {
                items: 4,
                margin: 30
            },
            767: {
                items: 4,
                margin: 40
            },
            991: {
                items: 4,
                margin: 40
            },
            992: {
                item:6
            }
        }
    });

    /*************************
     brand js end
     *************************/

    /*************************
     team js start
     *************************/

    $('.team-slider').owlCarousel({
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
                items: 1
            },
            576: {
                items: 2,
                margin: 10
            },
            991: {
                items: 3,
                margin: 10
            }
        }
    });

    /*************************
     team js end
     *************************/

    /*************************
     pricing js start
     *************************/

    $('.pricing-slider').owlCarousel({
        items: 3,
        margin: 30,
        nav: false,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            576: {
                items: 2,
                margin: 10
            },
            991: {
                items:2,
                margin: 15
            },
            992: {
                items:3,
                margin: 15
            },
            1000: {
                items: 3
            }
        }
    });

    /*************************
     pricing js end
     *************************/
})(jQuery);