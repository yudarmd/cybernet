(function($) {
    "use strict";
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
            1366: {
                items: 5
            }
        }
    });
    /*************************
     brand js end
     *************************/


    /*************************
     blog js start
     *************************/

    $('#blog-slider').owlCarousel({
        items: 3,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            }   ,
            1024: {
                items: 2
            }
        }
    });

    /*************************
     blog js end
     *************************/

    /*************************
     when js start
     *************************/

    $('#when-slider').owlCarousel({
        items: 3,
        margin: 85,
        nav: true,
        dots: false,
        navText: ['<img src="../assets/images/wedding-img/when/prev.png">', '<img src="../assets/images/wedding-img/when/next.png">'],
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            992:{
                items: 2,
                margin: 35
            }
        }
    });

    /*************************
     when js end
     *************************/

    /*************************
     testimonial js start
     *************************/

    $('#testimonial-slider').owlCarousel({
        items: 1,
        margin: 0,
        dots: false,
        nav: false,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true
    });

    /*************************
     testimonial js end
     *************************/
    /*************************
     Footer title Start
     *************************/
    var contentwidth = jQuery(window).width();
    if ((contentwidth) < '480') {
        jQuery('.footer-titles h3').append('<span class="according-menu"></span>');
        jQuery('.footer-titles').on('click', function () {
            jQuery('.footer-titles').removeClass('active');
            jQuery('.footer-contants').slideUp('normal');
            if (jQuery(this).next().is(':hidden') == true) {
                jQuery(this).addClass('active');
                jQuery(this).next().slideDown('normal');
            }
        });
        jQuery('.footer-contants').hide();
    } else {
        jQuery('.footer-contants').show();
    }

    /*************************
     Footer title End
     *************************/

})(jQuery);

/*----------------------------------------
animation
 ----------------------------------------*/
var mobile_menu = $( window ).width();
if(mobile_menu > 1024){
    window.onload = function(){
        var wedding   = document.querySelector('#header'),
            elemOne   = document.querySelector('#girl');
        elemTwo   = document.querySelector('.simple-text');

        wedding.addEventListener('mousemove',function(e){
            var pageX = e.clientX - window.innerWidth,
                pageY = e.clientY - window.innerHeight;
            elemOne.style.transform = 'translateX(' + (10 + pageX/100) + '%) translateY(' + (10 + pageY/100) + '%)';
            elemTwo.style.transform = 'translateX(' + (10 + pageX/100) + '%) translateY(' + (10 + pageY/100) + '%)';
        });
    }
}