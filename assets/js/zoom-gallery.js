(function ($) {
    "use strict";
    
    /*************************
     gallery js start
     *************************/
    $(document).ready(function () {
        $(".filter-button").click(function () {
            $(this).addClass('active').siblings('.active').removeClass('active');
            var value = $(this).attr('data-filter');
            if (value == "all") {
                $('.filter').show('1000');
            }
            else {
                $(".filter").not('.' + value).hide('3000');
                $('.filter').filter('.' + value).show('3000');
            }
        });
        $("#formButton").click(function () {
            $("#form1").toggle();
        });
        $(".content").slice(0, 6).show();
        $("#loadMore").on("click", function (e) {
            e.preventDefault();
            $(".content:hidden").slice(0, 3).slideDown();
            if ($(".content:hidden").length == 0) {
                $("#loadMore").text("No Content").addClass("noContent");
            }
        });
        $('.zoom-gallery').magnificPopup({
            delegate: '.zoom_gallery',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function (item) {
                    return item.el.attr('title') + ' &middot;';
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function (element) {
                    return element.find('img');
                }
            }

        });
    });

    /*************************
     gallery js end
     *************************/

})(jQuery);