(function ($) {
    "use strict";

    /*************************
     testimonial js start
     *************************/

    $('#testimonial-slider').owlCarousel({
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
            575: {
                items:2,
                margin: 10
            },
            991: {
                items: 2,
                margin: 30
            },
            1199: {
                items: 3,
                margin: 30
            }
        }
    });

    /*************************
     testimonial js end
     *************************/

    /*************************
     blog js start
     *************************/

    $('#blog-slider').owlCarousel({
        items: 3,
        margin: 30,
        nav: false,
        dots: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
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
                items: 2,
                margin: 10
            },
            992: {
                items: 3,
                margin: 10
            },
            1600: {
                items: 3
            }
        }
    });

    /*************************
     blog js end
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
    /*************************
     speaker-slider js start
     *************************/

    $('.speaker-slider').owlCarousel({
        items: 3,
        margin: 55,
        nav: false,
        dots: false,
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
                items: 3,
                margin: 10
            },
            767: {
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
     speaker-slider js end
     *************************/
     /*************************
     testimonial js start
     *************************/

    $('#testimonial-slider').owlCarousel({
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
            575: {
                items: 2,
                margin: 10
            },
            991: {
                margin: 30
            },
            1199: {
                items: 3,
                margin: 30
            }
        }
    });

    /*************************
     testimonial js end
     *************************/

    /*************************
     blog js start
     *************************/

    $('#blog-slider').owlCarousel({
        items: 3,
        margin: 55,
        nav: false,
        dots: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
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
                items: 3,
                margin: 10
            },
            1600: {
                items: 3
            }
        }
    });

    /*************************
     blog js end
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
            992: {
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
    /*************************
     speaker-slider js start
     *************************/

    $('.speaker-slider').owlCarousel({
        items: 3,
        margin: 55,
        nav: false,
        dots: false,
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
                items: 3,
                margin: 10
            },
            767: {
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
     speaker-slider js end
     *************************/

})(jQuery);
