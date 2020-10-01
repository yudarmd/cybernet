(function($) {
    "use strict";
    /*************************
     magnific popup video js start
     *************************/
    $('.button').magnificPopup({
        items: {
            src: 'https://www.youtube.com/embed/HVVk6J6_l8Y'
        },
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/HVVk6J6_l8Y'
                }
            },
            srcAction: 'iframe_src',
        }
    });
    /*************************
     google-map js start
     *************************/

    $(document).ready(function () {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });
    /*************************
     google-map js end
     *************************/
})(jQuery);