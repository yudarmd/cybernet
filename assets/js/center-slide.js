/*************************
 gallery-slider js start
 *************************/
(function($) {
    "use strict";
    $('#gallery-slider').owlCarousel({
        items: 3,
        autoHeight: true,
        nav: false,
        margin: 0,
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
            320: {
                items: 1,
                margin: 10
            },
            460: {
                items: 2
            },
            480: {
                items: 3
            },
            576: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
})(jQuery);
/*************************
 gallery-slider js end
 *************************/