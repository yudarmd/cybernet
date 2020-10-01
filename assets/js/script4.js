(function($) {
    "use strict";

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
     music-slider js start
     *************************/

    $('#music-slider').owlCarousel({
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
     music-slider js end
     *************************/

    /*************************
     gallery-slider js start
     *************************/

    $('#gallery-slider').owlCarousel({
        items: 5,
        autoHeight: true,
        nav: true,
        navText: ['<img src="../assets/images/music/gallery/gallery-icon/left.png">', '<img src="../assets/images/music/gallery/gallery-icon/right.png">'],
        autoplay: true,
        center: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            460: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    });

    /*************************
     gallery-slider js end
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
                items: 1
            },
            576: {
                items: 1,
                margin: 10
            },
            767: {
                items: 1,
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
                margin: 30
            }
        }
    });

    /*************************
     blog js end
     *************************/
    
    /*************************
     blog js start
     *************************/

    $('.artist-slider').owlCarousel({
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
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3,
                margin: 20
            },
            1600: {
                margin: 30
            }
        }
    });

    /*************************
     blog js end
     *************************/

})(jQuery);
