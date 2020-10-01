(function($) {
    "use strict";

    /*************************
     pricing js start
     *************************/

    $('.pricing-slider').owlCarousel({
        items: 3,
        autoHeight: true,
        nav: false,
        dots:true,
        autoplay: true,
        center: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
                margin:10
            },
            576: {
                items: 2,
                margin:10
            },
            767: {
                items: 2,
                margin:10
            },
            991: {
                items: 2,
                margin:30
            },
            1000: {
                items: 3
            }
        }
    });

    /*************************
     pricing js end
     *************************/

    /*************************
     yoga js start
     *************************/

    $('.yoga-slider').owlCarousel({
        items: 1,
        margin: 0,
        autoHeight: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        dots: false
    });

    /*************************
     yoga js end
     *************************/

    /*************************
     trainers js start
     *************************/


    $('#trainers-slider').owlCarousel({
        center: true,
        loop: true,
        dots: true,
        margin: 10,
        responsive: {
            0: {
                items: 2,
                margin: 10
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    });
    /*************************
     trainers js end
     *************************/


    /*************************
     yoga js end
     *************************/
    $('#brand-slider').owlCarousel({
        items: 5,
        margin: 80,
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
            320: {
                items: 1,
                margin: 10
            },
            480: {
                items: 3
            },
            576: {
                items: 2
            },
            768: {
                items: 4
            },
            991: {
                items: 5
            },
            1000: {
                items: 5
            }
        }
    });

    /*************************
     yoga js end
     *************************/


    /*************************
     testimonial js start
     *************************/
    $('#testimonial-slider').owlCarousel({
        items: 1,
        margin: 0,
        dots: true,
        nav: false,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true
    });

    /*************************
     testimonial js end
     *************************/


    /*************************
     blog js start
     *************************/

    $('#blog-slider').owlCarousel({
        items: 3,
        margin: 60,
        nav: false,
        dots: false,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 1,
                margin: 10
            },
            768: {
                items: 2,
                margin: 10
            },
            1199: {
                items: 2,
                margin: 10
            },
            1200: {
                items: 3,
                margin: 10
            },
            1600: {
                items: 3,
                margin: 30
            }
        }
    });

    /*************************
     blog js end
     *************************/


    /*************************
     gym-brand js start
     *************************/

    $('#gym-brand').owlCarousel({
        items: 5,
        margin: 80,
        autoHeight: true,
        nav: false,
        dots: false,
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
                items: 2
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            991: {
                items: 4,
                margin: 20
            },
            1366: {
                items: 5
            }
        }
    });

    /*************************
     gym brand js end
     *************************/

})(jQuery);