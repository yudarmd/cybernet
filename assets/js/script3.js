(function($) {
    "use strict";


    /*************************
     screenshot js start
     *************************/

    $('#screenshot-slider').owlCarousel({
        items: 3,
        margin: 0,
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
            340: {
                items: 2,
                margin: 10
            },
            360: {
                margin: 10
            },
            576: {
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
            480: {
                items: 3
            },
            576: {
                items: 4
            },
            991: {
                items: 5
            }
        }
    });

    /*************************
     brand js end
     *************************/


    /*************************
     blog js start
     *************************/

    $('#blog-slider').owlCarousel({
        items: 3,
        margin: 60,
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
            991: {
                items: 2,
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
            480: {
                items: 2,
                margin: 10
            },
            992: {
                items: 3,
                margin: 30
            }
        }
    });

    /*************************
     pricing js end
     *************************/


    /*************************
     testimonial js start
     *************************/

    $('#testimonial').owlCarousel({
        items: 1,
        margin: 0,
        autoHeight: true,
        nav: true,
        dots: false,
        navText: ['<img src="../assets/images/music/gallery/gallery-icon/left.png">', '<img src="../assets/images/music/gallery/gallery-icon/right.png">'],
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true
    });
    
    /*************************
     testimonial js end
     *************************/
    
})(jQuery);