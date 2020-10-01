(function ($) {
    "use strict";

    /*************************
     swipper slider js start
     *************************/

    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 4,
        initialSlide: 2,
        keyboardControl: true,
        mousewheelControl: false,
        lazyLoading: true,
        preventClicks: false,
        preventClicksPropagation: false,
        lazyLoadingInPrevNext: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.43,
            slideShadows: false
        },
        breakpoints: {
            1199: {
                slidesPerView: 4,
                spaceBetween: 0
            },
            991: {
                slidesPerView: 4
            },
            767: {
                slidesPerView: 3
            },
            575: {
                slidesPerView: 2
            }
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination'
        }
    });

    /*************************
     swipper slider js end
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
            600:{
                items: 2,
                margin: 10
            },
            992: {
                items: 3
            }
        }
    });

    /*************************
     pricing js end
     *************************/

})(jQuery);

