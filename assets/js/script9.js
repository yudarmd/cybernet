(function($) {
    "use strict";
/*************************
 trainer js start
 *************************/

$('#trainers-slider').owlCarousel({
    items: 3,
    margin: 0,
    autoHeight: true,
    nav: false,
    autoplay: true,
    center: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    dots: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 3
        }
    }
});

/*************************
 trainer js end
 *************************/

/*************************
 pricing js start
 *************************/

$('.pricing-slider').owlCarousel({
    items: 3,
    nav: false,
    dots:true,
    autoplay: true,
    center: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 3
        }
    }
});

/*************************
 pricing js end
 *************************/

/*************************
 testimonial js start
 *************************/

$('#testimonial').owlCarousel({
    items: 1,
    margin: 0,
    autoHeight: true,
    nav: true,
    dots: false,
    navText: ['<img src="../assets/images/music/gallery/gallery-icon/left.png">', '<img src="../assets/images/music/gallery/gallery-icon/right.png">'],
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true
});


/*************************
 testimonial js end
 *************************/

/*************************
 brand js start
 *************************/

$('#brand-slider').owlCarousel({
    items: 5,
    margin: 40,
    autoHeight: true,
    nav: false,
    dots:false,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1,
            margin: 40
        },
        320: {
            items: 1,
            margin: 30
        },
        360: {
            items: 2,
            margin: 20
        },
        480: {
            items: 3,
            margin: 30
        },
        768: {
            items: 4,
            margin: 30
        },
        992: {
            items: 5
        }
    }
});

/*************************
 brand js end
 *************************/

    /*************************
     scroll down start
     *************************/
    $(function () {
        $('.down').click(function () {
            $('html, body').animate({scrollTop: $('.feature').offset().top}, 'slow');
            return false;
        });
    });
    /*************************
     scroll down start
     *************************/
})(jQuery);