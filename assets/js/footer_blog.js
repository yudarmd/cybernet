
/*************************
 blog js start
 *************************/
(function($) {
    "use strict";
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
})(jQuery);
/*************************
 blog js end
 *************************/
