var hash = window.location.toString().split('#')[1];
var panelimg_w,
    slidew, actualw,
    slideh, 
    activeindex = 0,
    totalslides=0, slidercontent, resizeend, jssor_slider1, touchdevice=false ;
var clicked = false, clickX;

$(document).ready(function() {
    
    if ("ontouchstart" in document.documentElement){
        touchdevice = true;
        $('html').addClass('touch');
    }
    
    fixthumb();

    if ( /iPad/i.test(navigator.userAgent)==false ){
        $('.side-image').find('img').each(function() {
              var imgsrcipad = $(this).attr('src');
                imgsrcipad = imgsrcipad.replace('-IPAD.jpg','.jpg');
                $(this).attr('src',imgsrcipad);
        });
    totalslides = $('.ay-buttons').length;
    }
    

    $('body').keydown(function(e) {
        if (e.keyCode == 37 && activeindex <= 0) {
            return false;
        }

        if (e.keyCode == 39) {
            var thumblength = $('.thumbscrolls:last > div').length;
            thumblength = thumblength - 4;
            if (activeindex >= thumblength)
                return false;
        }
    });

    if ( /iPad/i.test(navigator.userAgent) ){
        // Fix for the Popups hiding  to top 
            $('.caption, .caption1, .caption2, .shoplook, .shoplook1,.mfp-close').unbind('click');
            $('.caption, .caption1, .caption2, .shoplook, .shoplook1').click(function(e) {
              fixhidetop();
            });
        
            $('.mfp-close').click(function() {
                if ( /iPad/i.test(navigator.userAgent) ){
                        $('.pop-open').animate({ 'right': '-100%' });
                        $('.pop-open').toggleClass("pop-open");
                        
                            window.location.hash = "";
                        
                }else{
                    $('.pop-open').animate({ 'right': '-100%' }, 500, function() {
                        $(this).toggleClass("pop-open");
                        var ua = window.navigator.userAgent;
                        var msie = ua.indexOf("MSIE ");
                        var isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
            
                        if ( isIE11 ){
                            window.location.hash = "";
                        } else if (history.pushState && msie<=0) {
                            history.pushState('', document.title, window.location.pathname);
                        } else {
                            window.location.hash = "";
                        }
                    });
                }
            })

    }else{
        slidercontent = $('#slider1_container').html();
            jssorgenerate();
    }



   
}); //END OF READY

 

function jssorgenerate(){

    var wwidth = $(window).width();
    
    //Laptop
    panelimg_w = 180;
    actualw = 1440;
    slidew = 1080;
    slideh = 720;

    // tablet
    if (wwidth <=1025) {
        panelimg_w = 75;
        actualw = 1025;
        slidew = 875;
        slideh = 583;
    } else if (wwidth > 1440) { // Big Monitor
        panelimg_w = 315;
        actualw = 1920;
        slidew = 1290;
        slideh = 860;
    }


    $('#slider1_container').height(slideh).width(actualw);
    $('.innerslide').height(slideh).width(actualw);
    var options = {
        $AutoPlay: false,
        $HWA: false,
        $StartIndex: activeindex,
        $PauseOnHover: 1, //[Optional] Whether to pause when mouse over if a slideshow is auto playing, default value is false
        $ArrowKeyNavigation: true, //Allows arrow key to navigate or not
        $SlideWidth: slidew, //[Optional] Width of every slide in pixels, the default is width of 'slides' container
        $SlideHeight: slideh, //[Optional] Height of every slide in pixels, the default is width of 'slides' container
        $loop: 0,
        $SlideSpacing: 5, //Space between each slide in pixels
        $DisplayPieces: 3, //Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
        $ParkingPosition: panelimg_w, //The offset position to park slide (this options applys only when slideshow disabled).
        $LazyLoading: 0,
        $ArrowNavigatorOptions: { //[Optional] Options to specify and enable arrow navigator or not
            $Class: $JssorArrowNavigator$, //[Requried] Class to create arrow navigator instance
            $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 0, //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
            $Steps: 1 //[Optional] Steps to go for each navigation request, default value is 1
        },

        $ThumbnailNavigatorOptions: {
            $Class: $JssorThumbnailNavigator$, //[Required] Class to create thumbnail navigator instance
            $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always

            $Loop: 0, //[Optional] Enable loop(circular) of carousel or not, 0: stop, 1: loop, 2 rewind, default value is 1
            $SpacingX: 10, //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
            $SpacingY: 1, //[Optional] Vertical space between each thumbnail in pixel, default value is 0
            $DisplayPieces: totalslides, //[Optional] Number of pieces to display, default value is 1
            $ParkingPosition: 0, //[Optional] The offset position to park thumbnail,
            $AutoCenter: 1,
            $Scale: false,
            $DisableDrag: true,
            $FillMode: 4,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$, //[Requried] Class to create arrow navigator instance
                $ChanceToShow: 0, //[Required] 0 Never, 1 Mouse Over, 2 Always
                $AutoCenter: 0, //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                $Steps: 1 //[Optional] Steps to go for each navigation request, default value is 1
            }
        }
    };



    jssor_slider1 = new $JssorSlider$("slider1_container", options);
    jssor_slider1.$On($JssorSlider$.$EVT_PARK, SliderParkEventHandler);


    ScaleSlider();
    
    $(window).bind("load", ScaleSlider);

    
    if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
        $(window).bind('resize', ScaleSlider);
    }
    
    $(window).unbind('orientationchange');
    $(window).bind("orientationchange", function(){
        ScaleSlider();
        resizeend = setTimeout(doneResizing, 500);
        window.setTimeout(fixhw, 30);
        fixProdOverlay();
        fixthumb();
    });

    if (hash == true) {} else {
        fixhidetop();
    }


    // Fix for the Popups hiding  to top 
    $('.caption, .caption1, .caption2,.shoplook, .shoplook1, .mfp-close').unbind('click');
    $('.caption, .caption1, .caption2,.shoplook, .shoplook1').click(function(e) {
        fixhidetop();
        window.setTimeout(fixhidetop, 30);
    });

    $('.mfp-close').click(function() {
        if ( /iPad/i.test(navigator.userAgent) ){
                $('.pop-open').css({ 'right': '-100%' });
                $('.pop-open').toggleClass("pop-open");
                
                    window.location.hash = "";
                
        }else{
            $('.pop-open').animate({ 'right': '-100%' }, 500, function() {
                $(this).toggleClass("pop-open");
                var ua = window.navigator.userAgent;
                var msie = ua.indexOf("MSIE ");
                var isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
    
                if ( isIE11 ){
                    window.location.hash = "";
                } else if (history.pushState && msie<=0) {
                    history.pushState('', document.title, window.location.pathname);
                } else {
                    window.location.hash = "";
                }
            });
        }
    })

    thumbclick();
}  //jssorgenerate


    function SliderParkEventHandler(slideIndex) {

        activeindex = slideIndex;

            var geti = slideIndex;

            var getw = $(window).width();
            var getthumbw = $('.thumbscrolls:last div').width() + 10;
            getthumbpos = getthumbw * geti;
            getw = getw / 2;
            getw = getw / getthumbw;
            getw = Math.round(getw); 
            geti = geti - getw;
            geti++;
            geti++;

            if (geti<0)
                geti=0;

            if ( /iPad/i.test(navigator.userAgent)==false ){
                $('#thumbnav').mCustomScrollbar("scrollTo", $(".thumbscrolls:last > div:eq("+geti+")"));
            }else{
                var getw = $(window).width();
                var getthumbw = $('.thumbscrolls:last div').width() + 10;
                getthumbpos = getthumbw * slideIndex;
                getw = getw / 2;
                getthumbpos = getthumbpos - getw + (getthumbw / 2);
                $('#thumbnav').scrollLeft(getthumbpos);
            }






        if (slideIndex == 0) {
            $('.left-tradisable').show();
        } else {
            $('.left-tradisable').hide();
        }

        var thumblength = $('.thumbscrolls:last > div').length;
        thumblength = thumblength - 2;
        if (slideIndex == thumblength) {
            $('.right-tradisable').show();
            // ADD  SHOW BUTTON FOR SLIDE TO FIRST
            $('.gotofirst').fadeIn();
        } else {
            $('.right-tradisable').hide();
            // ADD  HIDE BUTTON FOR SLIDE TO FIRST
            $('.gotofirst').hide();
        }
        slideIndex++;
    }


    



    function ScaleSlider() {
        var windowWidth = $(window).width();
        wwidth = windowWidth;


        if (wwidth) {
            var windowHeight = $(window).height();
            var originalWidth = jssor_slider1.$GetOriginalWidth();
            var originalHeight = jssor_slider1.$GetOriginalHeight();

            var scaleWidth = windowWidth;
            jssor_slider1.$SetScaleWidth(scaleWidth);

            var getimgw = $('#slider1_container').width();
            var getscale = (jssor_slider1.$GetScaleratio());

            getimgw = getimgw - (panelimg_w * getscale) - (panelimg_w * getscale);
            $('#mainsliderfirst').width(getimgw);
            var getimgh = $('#mainsliderfirst').height();
            $('#mainsliderfirst').css({
                'width': '100%'
            });
            getimghextra = getimgh + 128;
            $('#slider1_container').height(getimghextra);

            //console.log(getimgh)
            $('#left-tra, .left-tradisable').width(panelimg_w - 5).height(getimgh+30);
            $('#right-tra, .right-tradisable').width(panelimg_w - 5).height(getimgh+30);


        } else
            window.setTimeout(ScaleSlider, 30);
            
    }


// Thumb click
function thumbclick() {
    if ($('.thumbscrolls:last').html() != null) {

         if ($('.scrollbar').html() == null) {
            $('.thumbscrolls:last').css({'position':'relative'});
            if ( /iPad/i.test(navigator.userAgent)==false ){
                $("#thumbnav").mCustomScrollbar({
                    axis:"x"
                });
            }

         }
        

        if (navigator.appVersion.indexOf("MSIE 8.") != -1 || navigator.appVersion.indexOf("MSIE 9.") != -1) {
            var geth = $('#slider1_container').height();
            $('#slider1_container > div:first').height(geth+25);

        }

if ( /iPad/i.test(navigator.userAgent)==false ){
        $('.thumbscrolls:last').unbind('mousemove');
        $('.thumbscrolls:last').unbind('mousedown');
        $('.thumbscrolls:last').unbind('mouseup');
        $('.thumbscrolls:last').on({
            'mousemove': function(e) {
                clicked && updateScrollPos(e);
                e.preventDefault();
            },
            'mousedown': function(e) {
                clicked = true;
                clickX = e.pageX;
                e.preventDefault();
            },
            'mouseup': function(e) {
                clicked = false;
            }
        });

        var updateScrollPos = function(e) {
            if ( clicked )
                if((clickX - e.pageX)>0)
                    $('#thumbnav').mCustomScrollbar("scrollTo", "-=80",{
                    timeout:1
                        });
                else
                    $('#thumbnav').mCustomScrollbar("scrollTo", "+=80",{
                    timeout:1
                        });
            clickX = e.pageX;
        }
    }


        //$('.thumbscrolls.ps-active-x .p').unbind('click');
        $('.thumbscrolls:last div .p').click(function(e) {

            var geti = $('.thumbscrolls:last > div').index($(this).parent());

            var getw = $(window).width();
            var getthumbw = $('.thumbscrolls:last div').width() + 10;
            getthumbpos = getthumbw * geti;
            getw = getw / 2;
            getw = getw / getthumbw;
            getw = Math.round(getw); 
            geti = geti - getw;
            geti++;

            if (geti<0)
                geti=0;
        if ( /iPad/i.test(navigator.userAgent)==false ) {
            $('#thumbnav').mCustomScrollbar("scrollTo", $(".thumbscrolls:last > div:eq("+geti+")"));
        }else{
            var geti = $('.thumbscrolls:last > div').index($(this).parent());
            geti--;
            var getw = $(window).width();
            $('.thumbscrolls:last div').width() + 10;
            getthumbpos = getthumbw * geti;
            getw = getw / 2;        
            getthumbpos = getthumbpos- getw + (getthumbw /2);
            $('#thumbnav').scrollLeft(getthumbpos);
        }
            /*$('.thumbscrolls').animate({
                scrollLeft: getthumbpos
            }, 500);*/
                clicked = false;
        });
    } else {
        window.setTimeout(thumbclick, 30);
    }
}

(function($) {

    $(window).load(function() {
        loadscrollbar();
    });
})(jQuery);



function loadscrollbar(){
        $('.loaderdiv').hide();
    if ( /iPad/i.test(navigator.userAgent)==false ){
        $(".content-1").mCustomScrollbar({
            scrollButtons: {
                enable: true
            },
            axis: "y", // horizontal scrollbar,
        });
    }


        window.setTimeout(function() {
            $('.thumbscrolls').css({
                'left': 0
            });
        }, 500);

        if (window.location.hash) {
                hash = window.location.toString().split('#')[1];
                var ids = hash.replace('product-', '');

                window.setTimeout(function() {
                    $('#' + ids).css({
                        'right': '0'
                    });
                    $('#' + ids).find('img.lazyslide').each(function() {
                        loadsliderimg($(this));
                    });
                    $('#' + ids).toggleClass("pop-open");
                    fixProdOverlay();
                
                    if ( /iPad/i.test(navigator.userAgent) ){
                    var ph = $('#' + ids).height()-80;
                    $('.white-popup.pop-open .mCustomScrollbar.content-1').height(ph)
                }
                    if ( $('.white-popup.pop-open .mCustomScrollbar.content-1').height()<10 ){
                  
                    if ( /iPad/i.test(navigator.userAgent) ){
                    var ph = $('#' + ids).height()-50;
                }else{
                    var ph = $('#slider1_container').height();
                }
                        ph = ph-200;
                        if ( $(window).width() <= 1130 || /iPad/i.test(navigator.userAgent) ){
                            ph = ph+80;
                        }else if ( $(window).width() <= 1400){
                            ph = ph+80;
                        }
                        $('.white-popup.pop-open .mCustomScrollbar.content-1').height(ph);
                    }   
                    getids = $('.white-popup').index( $('#' + ids) );
                    //ids--;
                    var elemindex = $('.opendetail').eq(getids).parent().parent();
                    if (elemindex.hasClass('ay-2button')) {
                        elemindex = elemindex.parent();
                    }
                    var getindex = $('.innerslide > div').index(elemindex);
                    getindex++;
                    $('.thumbscrolls:last > div').eq(getindex).find('.o').trigger('click');
                    $('.loaderdiv').hide();
                }, 5);
        } else {
            $('.loaderdiv').hide();
        }

        fixhw();
        fixthumb();
        fixProdOverlay();
}

window.ondevicemotion = function(event) {
    if (navigator.platform.indexOf("iPad") != -1) {
        var version = 1;
        if (event.acceleration) version += window.devicePixelRatio;
        if (version==1){
          $(window).bind("orientationchange", function(){
            window.location.reload();
        });
      }
    }
    window.ondevicemotion = null;
}


$(window).resize(function() {
    if ( /iPad/i.test(navigator.userAgent)==false ){
        clearTimeout(resizeend);
        resizeend = setTimeout(doneResizing, 500);
        
        window.setTimeout(fixhw, 30);
        fixProdOverlay();
        fixthumb();
    }
});


function doneResizing(){

    if ($('.thumbscrolls:last .p').html() != null && touchdevice==false) {
        var wwidth = $(window).width();
        var sliderchanges = false;

        if (wwidth <=1025 && actualw != 1025) {
            panelimg_w = 75;
            actualw = 1025;
            slidew = 875;
            slideh = 583;
            sliderchanges = true;
        } else if (wwidth > 1440 && actualw != 1920) {
            panelimg_w = 315;
            actualw = 1920;
            slidew = 1290;
            slideh = 860;
            sliderchanges = true;
        } else if (wwidth >1025 && wwidth <= 1440 && actualw != 1440) {
            panelimg_w = 180;
            actualw = 1440;
            slidew = 1080;
            slideh = 720;
            sliderchanges = true;
        }


        if (sliderchanges && ( /iPad/i.test(navigator.userAgent)==false )){
            activeindex = jssor_slider1.$CurrentIndex()
            $('#slider1_container').html(slidercontent);
            fixthumb();
            jssorgenerate();
            loadscrollbar();

                hash = window.location.toString().split('#')[1];
                var ids = hash.replace('product-', '');
                $('#' + ids).css({ 'right': '0'});
                $('#' + ids).find('img.lazyslide').each(function() {
                    loadsliderimg($(this));
                });
                $('#' + ids).toggleClass("pop-open");
                fixProdOverlay();
        }
    }
    window.setTimeout(fixProdOverlay, 300)
}
function fixProdOverlay() {
    var pw = $('.ay-products').width();
        
    if ( /iPad/i.test(navigator.userAgent) ){
        var ph = $('.tablet').height();
    }else{
        var ph = $('#slider1_container').height();
    }
    $('.ay-products, .white-popup').css({
        'height': ph
    });

    var getdetailh = $('#slider1_container').height();
    getdetailh = getdetailh-200;
    if ( $(window).width() <= 1130 || /iPad/i.test(navigator.userAgent) ){
        getdetailh = getdetailh+80;
    }else if ( $(window).width() <= 1400){
        getdetailh = getdetailh+80;
    }
    if (getdetailh>10) {
        $('.white-popup.pop-open .mCustomScrollbar.content-1').height(getdetailh);
    }
}


function fixhw() {
    var sw = $(window).width();
    var sh = $('#slider1_container').height() + 40;
    $('.pop-open').css({
        'width': sw,
        'height': sh
    });
}

function fixthumb() {
    var fixThumb = $(window).width() - 20;
    //  var sht = $('#slider1_container').height();
    //   $('#slider1_container').height(sht) + 100;
    // console.log(sht + 'px');
    // $('.jssort07').css({'top': sht , 'bottom':'auto !important'});

    $('.jssort07').width(fixThumb);
}



$(function() {

    if (window.location.hash) {
        fixhidetop()
    }

});

$(window).on('hashchange', function() {
    var gethash = window.location.hash;
    if (gethash) {
        var ids = gethash.replace('product-', '');
        $(ids).toggleClass("pop-open");
        
        if ( /iPad/i.test(navigator.userAgent) ){
            fixProdOverlay();
            $(ids).animate({ 'right': '0' });
                var getdetailh = $('.tablet').height();
                getdetailh = getdetailh-200;
                if ( $(window).width() <= 1130 || /iPad/i.test(navigator.userAgent)  ){
                    getdetailh = getdetailh+80;
                }
                    var loadprodipad = setTimeout(function(){
                        //$(ids).find('img.lazyslide').each(function() {
                            loadsliderimgipad($(ids));
                        //});
                    }, 1000);
                $('.white-popup.pop-open .mCustomScrollbar.content-1').height(getdetailh);
        }else{
            fixProdOverlay();
            $(ids).animate({
                'right': '0'
            }, 500, function() {
                var getdetailh = $('#slider1_container').height();
                getdetailh = getdetailh-200;
                if ( $(window).width() <= 1130 || /iPad/i.test(navigator.userAgent)  ){
                    getdetailh = getdetailh+80;
                }else if ( $(window).width() <= 1400){
                    getdetailh = getdetailh+80;
                }
                $('.white-popup.pop-open .mCustomScrollbar.content-1').height(getdetailh);
            });
        }
        
        
        
        if ( /iPad/i.test(navigator.userAgent)==false ){
            $(ids).find('img.lazyslide').each(function() {
                loadsliderimg($(this));
            });
        }

    }
});



function loadsliderimg(getelement, onloadstatus) {
    if (getelement.hasClass('lazyslide')) {
        getelement.css({
            opacity: 0
        });
        getsource = getelement.data("original");
        if ( onloadstatus==null ){
            getelement.load(function() {
                getelement.css({
                    opacity: 1
                });
            });
        }
        getelement.attr('src', getsource);
        getelement.removeClass('lazyslide');
        return true;
    } else {
        return true;
    }
}


function loadsliderimgipad(idelem){
    var imgelem = idelem.find('img.lazyslide:first');
    if(imgelem!=null){
        loadsliderimg(imgelem, 1) ;
        imgelem.load(function() {
            imgelem.css({
                opacity: 1
            });
            setTimeout(function(){
                loadsliderimgipad(idelem);
            },500);
        });
    }
    
}

function fixhidetop() {
    var mainoffset = $('.tommy-main-outer-layer').offset();

        $('body,html').stop().animate({
            'scrollTop': mainoffset.top - 148
        }, 500);

}


if ( /iPad/i.test(navigator.userAgent) ){
	//
}
else{
 var gotofirst = $Jssor$.$GetElement("gotofirst");
     $Jssor$.$AddEvent(gotofirst, "click", GoTo);

      function GoTo() {
        jssor_slider1.$GoTo(jssor_slider1.$CurrentIndex() + 1);
    }
	
}
