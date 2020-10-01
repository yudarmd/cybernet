(function($) {
    "use strict";
 /*************************
 slider1 js start
 *************************/

$('.slider-1').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    paginationSpeed: 2000,
    slideSpeed: 2000,
    autoplayHoverPause: true,
    nav: true,
    navText: ['<img src="../assets/images/saas1/left.png">', '<img src="../assets/images/saas1/right.png">'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

/*************************
slider1 js end
*************************/

/*************************
 plan js start
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
        576: {
            items: 1
        },
        768: {
            items: 2,
            margin: 20
        },
        992: {
            items: 3
        }
    }
});

/*************************
 plan js end
 *************************/
/*************************
 saas-brand js start
 *************************/

$('.saas-brand').owlCarousel({
    items: 8,
    margin: 80,
    autoHeight: true,
    nav: false,
    dots: false,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        320:{
            items: 2,
            margin: 20
        },
        480:{
            items: 3,
            margin: 10
        },
        576:{
            items: 4,
            margin: 0
        },
        768:{
            items: 4,
            margin: 30
        },
        1200:{
            items: 6,
            margin: 30
        },
        1366: {
            items: 8,
            margin: 50
        }
    }
});

/*************************
 saas-brand js end
 *************************/

/*************************
build js start
*************************/

var sync1 = $("#sync1");
var sync2 = $("#sync2");
var slidesPerPage = 1; //globaly define number of elements per page
var syncedSecondary = true;

sync1.owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: false,
    autoplay: true,
    dots: false,
    loop: true,
    // responsiveRefreshRate: 200,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
}).on('changed.owl.carousel', syncPosition);

sync2
    .on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
        items: slidesPerPage,
        dots: true,
        nav: false,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: slidesPerPage,
        responsiveRefreshRate: 100
    }).on('changed.owl.carousel', syncPosition2);

function syncPosition(el) {
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - (el.item.count / 2) - .5);
    if (current < 0) {
        current = count;
    }
    if (current > count) {
        current = 0;
    }
    sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
}

function syncPosition2(el) {
    if (syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
    }
}

sync2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
});


/*************************
 build js end
 *************************/

/*************************
 plan top js start
 *************************/

// Pricing switcher button
$(".switcher__button").on('click', function (e) {
    $(".switcher__button").toggleClass('switcher__button--enabled');
    if ($('.monthly').hasClass('switcher__button--enabled')) {
        $('#hourly').removeClass('show');
        $('#hourly').addClass('hidden');
        $('#monthly').removeClass('hidden');
        $('#monthly').addClass('show');
    }
    if ($('.yearly').hasClass('switcher__button--enabled')) {
        $('#monthly').removeClass('show');
        $('#monthly').addClass('hidden');
        $('#hourly').removeClass('hidden');
        $('#hourly').addClass('show');
    }
});


$('.modal__overlay--toggle').on('click', function (e) {
    e.preventDefault();
    $('.modal').removeClass('modal--visible');
    $('.modal__content').removeClass('modal__content--visible');
});


/*************************
 plan top js end
 *************************/

/*************************
 testimonial js start
 *************************/

$('.testimonial-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: false
});

/*************************
 testimonial js end
 *************************/

/*************************
 blog js start
 *************************/

$('#blog-slider').owlCarousel({
    items: 2,
    margin: 60,
    nav: false,
    dots: false,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        991: {
            margin: 10
        }
    }
});

/*************************
 blog js end
 *************************/

})(jQuery);