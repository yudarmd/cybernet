(function ($) {
    "use strict";

    /*************************
        rtl and dark js start
     *************************/

        $('<div class="theme-pannel-main"><ul><li id="rtl_btn"><a href="javascript:void(0)" class="btn setting_btn"><span class="rtl-txt">Rtl</span></a></li><li id="ltr_btn"><a href="javascript:void(0)" class="btn setting_btn"><span class="rtl-txt">Ltr</span></a></li><li class="sidebar-btn dark-light-btn"><a href="javascript:void(0)" class="dark-light"><span class="theme-layout-version">Dark</span></a></li></ul></div>').appendTo($('body'));
        (function() {
        })();
        $('#ltr_btn').hide();
        $("#ltr_btn").on('click', function (){
            $('body').addClass('ltr');
            $('body').removeClass('rtl');
            $('#ltr_btn').hide();
            $('#rtl_btn').show();
        });
        $("#rtl_btn").on('click', function (){
            $('body').addClass('rtl');
            $('body').removeClass('ltr');
            $('#rtl_btn').hide();
            $('#ltr_btn').show();
        });
        $(".setting_buttons li").on('click', function (){
            $(this).addClass('active').siblings().removeClass('active');
        });

    // dark layout //
        var body_event = $("body");
        body_event.on("click", ".theme-layout-version" , function(){
            $(this).toggleClass('dark');
            $('body').removeClass('dark');
            if($('.theme-layout-version').hasClass('dark')){
                $('.theme-layout-version').text('Light');
                $('body').addClass('dark');
            }else{
                $('#theme-dark').remove();
                $('.theme-layout-version').text('Dark');
            }
   });


  })(jQuery);
