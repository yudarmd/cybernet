(function($) {
    "use strict";

    /*************************
     gym js start
     *************************/

    $('#gym-slider').owlCarousel({
        items: 1,
        margin: 0,
        autoHeight: true,
        nav: false,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true
    });

    /*************************
     gym js end
     *************************/

    /*************************
     gym about  js start
     *************************/

    $('#gym-about-slider').owlCarousel({
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
     gym about js end
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
     trainer js start
     *************************/

    $('#trainers-slider').owlCarousel({
        center: true,
        loop: true,
        dots: true,
        margin: 0,
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
     trainer js end
     *************************/

    /*************************
     gym-brand js start
     *************************/

    $('#gym-brand').owlCarousel({
        items: 6,
        margin: 50,
        autoHeight: true,
        nav: false,
        dots: false,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        responsive: {
            0: {
                items: 2,
                margin: 10
            },
            320: {
                items: 3,
                margin: 10
            },
            480:{
                items: 4,
                margin: 30
            },
            768:{
                items: 5,
                margin: 50
            },
            1200: {
                items: 6
            }
        }
    });

    /*************************
     gym brand js end
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
            991: {
                margin: 15
            },
            992: {
                items: 3,
                margin: 15
            }
        }
    });

    /*************************
     pricing js end
     *************************/
})(jQuery);