/*====================================
 Dynamic slider
 ====================================*/
(function($) {
    "use strict";
    jQuery('.img-to-bg').each(function() {
        var el = $(this),
            src = el.attr('src'),
            parent = el.parent();
        parent.css({
            'background-image': 'url(' + src + ')',
            'background-size': 'cover',
            'background-position': 'center'
        });
        el.hide();
    });
})(jQuery);