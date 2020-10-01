(function ($) {
        "use strict";

        /*************************
         pricing js start
         *************************/

        $('.pricing-slider').owlCarousel({
            items: 3,
            margin: 50,
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
                600: {
                    items: 2,
                    margin: 10
                },
                1000: {
                    items: 3,
                    margin: 10
                }
            }
        });

        /*************************
         pricing js end
         *************************/

    })
(jQuery);