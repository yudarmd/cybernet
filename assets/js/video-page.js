/*************************
 testimonial js start
 *************************/
(function($) {
    "use strict";
    $('.testimonial-carousel').owlCarousel({
        items: 1,
        margin: 0,
        autoHeight: true,
        nav: false,
        dots: false,
        navText: ['<img src="../assets/images/music/gallery/gallery-icon/left.png">', '<img src="../assets/images/music/gallery/gallery-icon/right.png">'],
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
    });
})(jQuery);

/*************************
 testimonial js end
 *************************/