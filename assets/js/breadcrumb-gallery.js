(function($) {
    "use strict";
    $('.img-slider').owlCarousel({
        items: 1,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 200,
        loop: true,
        dots: false,
        animateOut: 'fadeOut'
    });
})(jQuery);
