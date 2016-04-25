 /**
 * This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
 * Want to see more similar demos and tutorials?
 * Help by spreading the word about Ihatetomatoes blog.
 * Facebook - https://www.facebook.com/ihatetomatoesblog
 * Twitter - https://twitter.com/ihatetomatoes
 * Google+ - https://plus.google.com/u/0/109859280204979591787/about
 * Article URL: http://ihatetomatoes.net/simple-parallax-scrolling-tutorial/
 */
if ($("html").hasClass("desktop")) {
var main = ( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	$(window).resize(function () {
	    adjustWindow();
	});
	function adjustWindow(){
		
		// Init Skrollr
		var s = skrollr.init({
		    forceHeight: false
		});
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    
	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));
	    
	}
		
})(jQuery);


/*--------------------------*/
$(document).ready(function () {
    $(window).on('scroll', function () {
        var wh = $(window).height()/2;
        var st = $(window).scrollTop();
        var dc = $(".br_scrollDownDiv").attr("data-count");
        var s1 = $("#slide-1").offset().top;
        var s2 = $("#slide-2").offset().top;
        var s3 = $("#slide-3").offset().top;
        var s4 = $("#slide-4").offset().top;
        var s5 = $("#slide-5").offset().top;
        var s6 = $("#slide-6").offset().top;
        var s7 = $("#slide-7").offset().top;
        var s8 = $("#slide-8").offset().top;
        var s9 = $("#slide-9").offset().top;
        var s10 = $("#slide-10").offset().top;
        var s11 = $("#slide-11").offset().top;
        /*------------------------------*/
        if (st >= 0 && st < s2 && dc != "a") {
            $(".br_scrollDownDiv").attr("data-count", "1");
        } else if (st >= s2 && st < s3 && dc != "a") {
            $(".br_scrollDownDiv").stop().attr("data-count", "2");
        } else if (st >= s3 && st < s4 && dc != "a") {
            $(".br_scrollDownDiv").stop().attr("data-count", "3");
        } else if (st >= s4 && st < s5 && dc != "a") {
            $(".br_scrollDownDiv").stop().attr("data-count", "4");
        } else if (st >= s5 && st < s6 && dc != "a") {
            $(".br_scrollDownDiv").stop().attr("data-count", "5");
        } else if (st >= s6 && st < s7 && dc != "a") {
            $(".br_scrollDownDiv").stop().attr("data-count", "6");
        } else if (st >= s7 && st < s8 && dc != "a") {
            $(".br_scrollDownDiv").stop().attr("data-count", "7");
        } else if (st >= s8 && st < s9 && dc != "a") {
            $(".br_scrollDownDiv").stop().attr("data-count", "8");
        } else if (st >= s9 && st < s10 && dc != "a") {
            $(".br_scrollDownDiv").stop().attr("data-count", "9");
        } else if (st >= s10 && st < s11 && dc != "a") {
            $(".br_scrollDownDiv").stop().attr("data-count", "10");
        } else if (st >= s11 && dc != "a") {
            $(".br_scrollDownDiv").stop().attr("data-count", "11");
        }
    })
})

    //window.sr = ScrollReveal({ reset: true }).reveal('.hsContent>div.scrlrvl,.hsContent>div.scrlrvl+div,.hsContent>div.scrlrvl+div+span', { opacity: 0, duration: 0, viewOffset: { top: 190 }, scale: 1, easing: 'cubic-bezier( 0, 0, 0, 0 )' });
} else {
    //alert($(window).height());
    $("html").addClass("notDesktop");
    $("body").imagesLoaded(function () {
        setTimeout(function () {
            // Resize sections
            $("main>section").height($(window).height());
            // Fade in sections
                

        }, 800);
    });
    $("html").addClass("notDesktop");
    $(window).resize(function () {
        $("main>section").height($(window).height());
    });
    window.onload = function () {
    window.scrollTo(0, 0);
    $("html,body").animate({ scrollTop: 0 }, 0);
    $("body").removeClass('loading').addClass('loaded');
}
}
if ($(window).width() < 768) {
    $("img.shadowImg").attr("src", "images/shadow-img-mob.png");
    $('html.notDesktop img[src="images/approch.png"]').attr("src", "images/approch-mob.png");
    $("body *").removeClass("wow");
}
if ($(window).width() < 1024 || $(window).height() <= 600) {
    $("body *").removeClass("wow");
}
/*---------------------*/


//Custon Plugin for Second Section PINK Start\\
function sldChnge() {
	
	console.log(1);
	
    var data_sC = $(".sliderItemNav>a.active").attr("data-sC");
    //alert(data_sC);
    if (data_sC == 1) {
        $(".bigPinkDiv").css("background-color", "#f31858").removeClass("s2 s3 s4").addClass("s1");
    } else if (data_sC == 2) {
        $(".bigPinkDiv").css("background-color", "#867994").removeClass("s1 s3 s4").addClass("s2");
    } else if (data_sC == 3) {
        $(".bigPinkDiv").css("background-color", "#03d9ae").removeClass("s1 s2 s4").addClass("s3");
    } else {
        $(".bigPinkDiv").css("background-color", "#cdc3ae").removeClass("s1 s2 s3").addClass("s4");
    }

}
//Custon Plugin for Second Section PINK End\\


// Profile Page Slider
var pswiper = new Swiper('.sliderContentDiv', {
    keyboardControl: true,
    slidesPerView: 1,
    spaceBetween: 0,
    onSlideChangeStart: function () {
        $('.sliderItemNav>a.active').removeClass('active');
        $('.sliderItemNav>a').eq(pswiper.activeIndex).addClass('active');
        sldChnge();
        if ($(window).width() <= 767) {
            $("html,body").animate({ scrollTop: $("#slide-2").offset().top + 60 });
        }
    }
});
//navigation
$('.sliderItemNav>a').click(function () {
    pswiper.slideTo($(this).index());
    $('.sliderItemNav>a').removeClass('active');
    $(this).addClass('active');
    sldChnge();
});
