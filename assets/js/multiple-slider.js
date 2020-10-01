/*************************
 gallery-slider js start
 *************************/
(function($) {
    "use strict";
    $('#gallery-slider').owlCarousel({
        items: 4,
        autoHeight: true,
        nav: false,
        autoplay: true,
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
                items: 4
            }
        }
    });
})(jQuery);
/*************************
 gallery-slider js end
 *************************/