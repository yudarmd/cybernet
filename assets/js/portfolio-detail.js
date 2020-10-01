(function($) {
    "use strict";

    /*************************
     portfolio-header js start
     *************************/
    $('.portfolio-header').owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
    });
    /*************************
     portfolio-header js end
     *************************/
    $('.portfolio-slider').owlCarousel({
        items: 6,
        nav: false,
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
                items: 6
            }
        }
    });


    /*************************
     portfolio js end
     *************************/

    /*************************
     portfolio js start
     *************************/

    $('.compare-slider').owlCarousel({
        items: 4,
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
                items: 4
            }
        }
    });
})(jQuery);
/*************************
 portfolio js end
 *************************/

