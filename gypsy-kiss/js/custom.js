
function rightNavOpen(){
	"use strict";
	
	closeVideo();
	
	$("#brv-right-nav").stop().animate({right:0},400,'easeOutCubic');
	$("#brv-right-nav ul li").addClass("go");
	
	if($(window).width() <= 991) {
		$("#brv-right-nav .th-vm ul:nth-child(3) li:nth-child(1)").removeClass("delay-1000").addClass("delay-2000");
		$("#brv-right-nav .th-vm ul:nth-child(3) li:nth-child(2)").removeClass("delay-1250").addClass("delay-2250");
	} else {
		$("#brv-right-nav .th-vm ul:nth-child(3) li:nth-child(1)").removeClass("delay-2000").addClass("delay-1000");
		$("#brv-right-nav .th-vm ul:nth-child(3) li:nth-child(2)").removeClass("delay-2250").addClass("delay-1250");
	}
	
}

function rightNavClose(){
	"use strict";
	
	$("#brv-right-nav").stop().animate({right:-250},400,'easeOutCubic');
	$("#brv-right-nav ul li").removeClass("go");
	
	if($(window).width() <= 991) {
		$("#brv-right-nav .th-vm ul:nth-child(3) li:nth-child(1)").removeClass("delay-1000").addClass("delay-2000");
		$("#brv-right-nav .th-vm ul:nth-child(3) li:nth-child(2)").removeClass("delay-1250").addClass("delay-2250");
	} else {
		$("#brv-right-nav .th-vm ul:nth-child(3) li:nth-child(1)").removeClass("delay-2000").addClass("delay-1000");
		$("#brv-right-nav .th-vm ul:nth-child(3) li:nth-child(2)").removeClass("delay-2250").addClass("delay-1250");
	}
}

function topNavOpen(){
	"use strict";	

	$("#header").stop().animate({top:0,width:"100%"},800,'easeOutCubic');
	$("#header .th-nav-btn").stop().animate({top:20},800,'easeOutCubic');
	
	if($(window).width() <= 991){
		$("#header .brv-logo").stop().animate({"margin-bottom":70},400,'easeOutCubic');
		$("#header .work-case").stop().animate({top:100},800,'easeOutCubic');				
	} else {
		$("#header .brv-logo").stop().animate({"margin-bottom":18},400,'easeOutCubic');
		$("#header .work-case").stop().animate({top:23},800,'easeOutCubic');
	}
}

function topNavClose(){
	"use strict";

	$("#header").stop().animate({top:-120,width:"100%"},400,'easeOutCubic');
	
	if($(window).width() <= 991) {
		//alert("Mobile Close");
		$("#header .work-case").stop().animate({top:137},400,'easeOutCubic');		
		$("#header .brv-logo").stop().animate({"margin-bottom":100},400,'easeOutCubic');
		$("#header .th-nav-btn").stop().animate({top:15},400,'easeOutCubic');
	} else {
		//alert("Desktop Open");
		$("#header .brv-logo").stop().animate({"margin-bottom":18},400,'easeOutCubic');
		$("#header .work-case").stop().animate({top:135},400,'easeOutCubic');
		$("#header .th-nav-btn").stop().animate({top:14},400,'easeOutCubic');
	}
}

function sectionOneFrtPart(){
	"use strict";
	
	$("#brv-intro-sec-text").fadeOut();
	$("#brv-intro-text").fadeIn();
	
	$("#brv-intro-img").stop().css({ "-webkit-filter": "blur(0)", "filter": "blur(0)" });
	$(".brv-down-arrow").removeClass("brv-second-section");
	
	$("#brv-intro").attr("data-count","0");
	$("#brv-intro-sec-text div,#brv-intro-sec-text h2,#brv-intro-sec-text li").removeClass("go");
	$("#brv-intro-text span,#brv-intro-text h1,#brv-intro-text a").addClass("go");
	
	}

function sectionOneSecPart(){
	"use strict";
	
	closeVideo();
	
	$("#brv-intro-text").fadeOut();
	$("#brv-intro-sec-text").fadeIn();
	$("#brv-intro-img").stop().css({ "-webkit-filter": "blur(8px)", "filter": "blur(8px)" });
	$(".brv-down-arrow").addClass("brv-second-section");
	
	$("#brv-intro-text span,#brv-intro-text h1,#brv-intro-text a").removeClass("go");
	$("#brv-intro-sec-text div,#brv-intro-sec-text h2,#brv-intro-sec-text li").addClass("go");	
	
	if($("html").hasClass("desktop")){
		$("#brv-intro").attr("data-count","1");
	} else {
		setTimeout(function(){
			$("#brv-intro").attr("data-count","1");
		},500);	
	}
}

function sectionTwo(){
	"use strict";
	$('html, body').stop().animate({
		scrollTop: $("#sectionSecond").offset().top
    }, 1500, 'easeInOutExpo');	
}

function playVideo(){
	"use strict";
	topNavClose();
	rightNavClose();
	
	$("#brv-intro-video").append('<iframe class="col-sm-12 col-md-12 col-lg-12" height="500" src="http://player.vimeo.com/video/161756275?autoplay=1"></iframe>');
	$("#brv-intro-video").removeClass("growOut").addClass("growIn").fadeIn();
	
	$('html, body').stop().animate({
		scrollTop: $("#brv-intro").offset().top
    }, 1500, 'easeInOutExpo');
}

function closeVideo(){
	"use strict";
	
	$("#brv-intro-video").removeClass("growIn").addClass("growOut").fadeOut();
	$("#brv-intro-video iframe").remove();
}


document.onkeydown = function(evt) {
	"use strict";
    evt = evt || window.event;
    if (evt.keyCode === 27) {
        //alert(evt.which);
		closeVideo();
    }
};

function galleryScreen(){
	"use strict";
	$(".brv-gallery-screen > div > img").imagePanning();
}

function brvLogo(){
	"use strict";
	
	if (window.devicePixelRatio >= 2) {
		$("img.brv-logo").attr("src","images/brv-logo-2x.png");
	} else {
		$("img.brv-logo").attr("src","images/logo.png");
	}	
}

function mobChange(){
	"use strict";
	
	topNavClose();
	rightNavClose();
	brvLogo();
	
	var bodyOffset = Math.round($(window).height()/2);
	$('body').scrollspy({target: ".site-nav", offset:bodyOffset});
	
	$("#header ul.nav li a, #brv-right-nav ul.nav li a, .site-nav ul li a").click(function(){
		topNavClose();
		rightNavClose();
		closeVideo();
		$("#brv-bottom, #brv-footer").show();
		
	});
	
	$("#brv-intro-video").click(function(){
		closeVideo();
	});	
	
	$(".brv-down-arrow").click(function() {
		
		rightNavClose();
					
		if($("#brv-intro-text").is(":visible")){		
			sectionOneSecPart();
			topNavClose();
		} else if($("#brv-intro-sec-text").is(":visible")){
			$("#brv-bottom, #brv-footer").show();
			$('html, body').stop().animate({
				scrollTop: $("#sectionSecond").offset().top
			}, 1500, 'easeInOutExpo');
		}
	});
	
	if($("html").hasClass("mobile") || $("html").hasClass("tablet")){
		$("#brv-intro").swipe({
			swipeUp: function () {
				
				
				
				topNavClose();
				sectionOneSecPart();
				
				$("html, body").stop().animate({
					scrollTop: 0
				}, 100,'easeInOutExpo');
				
				$("#brv-bottom, #brv-footer").show();
				
				if($("#brv-intro").attr("data-count") == 1) {
					$("html, body").stop().animate({
						scrollTop: $("#brv-intro").innerHeight()
					}, 1000,'easeInOutExpo');
				}
				
			},
			swipeDown: function () {
				
				sectionOneFrtPart();
				topNavOpen();
				$("#brv-bottom, #brv-footer").hide();
						
				/*window.blockMenuHeaderScroll = false;
				$(window).on('touchstart', function(e){
		
					if ($(e.target).closest(this).length === 1)
					{
						blockMenuHeaderScroll = true;	
					}
				});
				$(window).on('touchend', function(){
					blockMenuHeaderScroll = false;
				});
				$(window).on('touchmove', function(e){
					if (blockMenuHeaderScroll){
						e.preventDefault();
					}
				});*/
				
			}
		});
	}
	$("#brv-right-nav").swipe({
		swipeRight: function(){
			rightNavClose();
		}
	});
	
		
	if($(window).width() <= 991) {
		
		$("#brv-nav .brv-logo img").attr("src","images/mob-logo.png");
		$("#sectionThree").find("img").attr("src","images/mob-img2.jpg");
		
		if($(window).width() <= 840) {
			$("#sectionSix div:nth-child(1)").find("img").attr("src","images/mob-site-preview.png");
		} else {
			$("#sectionSix div:nth-child(1)").find("img").attr("src","images/site-preview.png");
		}
		
		$("#sectionSeven img.brv-img7").attr("src","images/mob-img7.jpg");
		$("#sectionTen div:nth-child(1)").find("img").attr("src","images/mob-tommy-hilfiger.jpg");	
		$("#sectionTen div:nth-child(2)").find("img").attr("src","images/mob-the-golfer.jpg");
								
	} else {
		
		if($("#brv-bottom").is(":hidden")){
			$(document).scrollTop(0);
		}
		
		$("#brv-nav").css("height","160px");
		$("#brv-nav .brv-top-nav").fadeIn();
		
		$("#brv-nav .brv-logo img").attr("src","images/logo.png");
		$("#sectionThree").find("img").attr("src","images/img2.jpg");
		$("#sectionSix div:nth-child(1)").find("img").attr("src","images/site-preview.png");
		$("#sectionSeven img.brv-img7").attr("src","images/img7.jpg");
		$("#sectionTen div:nth-child(1)").find("img").attr("src","images/tommy-hilfiger.jpg");
		$("#sectionTen div:nth-child(2)").find("img").attr("src","images/the-golfer.jpg");
		
		topNavClose();
		galleryScreen();
	}
	
	$(".brv-gallery-thumb a").click(function(event) {
        event.preventDefault();
		$(".brv-gallery-screen").fadeIn();
        var tab = $(this).attr("href");
        $(".brv-gallery-screen > div").not(tab).css("display", "none");
        $(tab).fadeIn();
		
		$('html, body').stop().animate({
			scrollTop: $("#sectionNine").offset().top - 50
		}, 1500, 'easeInOutExpo');
		
		
		if((tab === "#screen2") || (tab === "#screen3") || (tab === "#screen6") || (tab === "#screen7")){
			$(".brv-close-gallery").addClass("invert");	
		} else {
			$(".brv-close-gallery").removeClass("invert");
		}	
    });
	
	var t;
	
	$(".playVideo").on('click',function(){ 
		clearTimeout(t);
		t = setTimeout(function(){
			playVideo();		
	    }, 450);
	});
	
}

function closeImgGallery(){
	"use strict";
	
	$(".brv-gallery-screen").fadeOut();
	$(".brv-gallery-screen > div").css("display", "none");
}

$(window).resize(function(){
	"use strict";
	mobChange();
	
	$("#brv-right-nav ul li").removeClass("go");
});

$(window).unbind('orientationchange');
$(window).bind("orientationchange", function(){
	"use strict";
		
	topNavClose();
	rightNavClose();
	closeImgGallery();
	
	var activeLink = $("#header.site-nav ul li.active a");
	
	$("html, body").stop().animate({
		scrollTop: $(activeLink.attr('href')).offset().top
	}, 100);	
	
	
});


$(document).ready(function() {
	"use strict";
	
	window.scrollTo(0, 0);
	$("html,body").animate({ scrollTop: "0px" }, 0);
	
	$("#brv-intro").addClass('current');
	
	closeVideo();
	mobChange();
	topNavOpen();
	
	$(".brv-close-gallery,.brv-gallery-screen").click(function(){
		closeImgGallery();
	});
	
	$.doTimeout(2500, function(){
		$('.repeat.go').removeClass('go');
		return true;
	});
	$.doTimeout(2520, function(){
		$('.repeat').addClass('go');
		return true;
	});
	
	$('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	
	$("#header ul.nav li:nth-child(1), #brv-right-nav ul.nav li:nth-child(1)").click(function(){
		topNavOpen();
		sectionOneFrtPart();
		$('html, body').stop().animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
	});
		
	// Facebook API //
	
	$('.fb').click(function() {
        
		var pgtitle = $("#header").data('title');
        var socialdescription = $("#header").data('socialdesc');
        var socialpic = $("#header").data('socialimg');
		
        FB.ui({
            method: 'feed',
            link: document.URL,
            name: pgtitle,
            display: 'popup',
            picture: socialpic,
            description: socialdescription,
        }, function(response) {
            console.log(response);
        });
    });
	
});

$('#brv-intro,#header').hover(function(){
	"use strict";
	
	document.onkeydown = function(evt2) {
		evt2 = evt2 || window.event;
		
		if (evt2.keyCode === 38) {
			if ($("#brv-intro").attr("data-count") == 1) {			
				sectionOneFrtPart();	
				return false;
			}	
			rightNavClose();
			topNavOpen();
		}
		
		if (evt2.keyCode === 40) {
			if ($("#brv-intro").attr("data-count") == 0) {
				sectionOneSecPart();
				return false;
			} else if ($("#brv-intro").attr("data-count") == 1) {
				$("#brv-bottom, #brv-footer").show();
			}
			rightNavClose();
			topNavClose();			
		}

		if (evt2.keyCode === 27) {
			closeVideo();
			rightNavClose();
			topNavClose();
		}
		
	};

	

});

$("body").mousewheel(function(event, delta){
		
	topNavClose();
	closeVideo();
	
	if (delta > 0){
		
		if ($("#brv-intro").attr("data-count") == 1) {			
			sectionOneFrtPart();
			return false;
		}
		
		var windowScroll = $(window).scrollTop();
		
		if(windowScroll < 50) {
			topNavOpen();
		}
				
	} else if (delta < 0) {
		
		if ($("#brv-intro").attr("data-count") == 0) {
			sectionOneSecPart();
			return false;
		} else if ($("#brv-intro").attr("data-count") == 1) {
			$("#brv-bottom, #brv-footer").show();
		}
	}
	
});


/*$( document ).on("vmousemove", function(event) {
	"use strict";
	e.preventDefault();
      var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
  //var msg = "Handler for .vmousemove() called at ";
  //msg += event.pageX + ", " + event.pageY;
  console.log(event.pageX);
  //$( "#log" ).append( " <div>" + msg + "</div>" );
});
  
$(window).bind('touchmove',function(e){
	"use strict";
	
      e.preventDefault();
      var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
      //CODE GOES HERE
     // console.log(touch.pageY+' '+touch.pageX);
});

var lastY,
    $display = $('#display');
$(document).bind('touchmove', function (e) {
	"use strict";
	
    var currentY = e.originalEvent.touches ? 
        e.originalEvent.touches[0].pageY : e.pageY;
    if (currentY > lastY) {
        console.log('down');
		//$display.html('moving down');
    } else {
		console.log('up');
        //$display.html('moving up');
    }
    lastY = currentY;
});
*/




$(window).on('touchmove', function() {
	"use strict";
	
	topNavClose();
	rightNavClose();
});

$(window).mouseup(function(e){
	"use strict";
	
	if (!$("body").is(e.target) && $("body").has(e.target).length === 0){
        closeVideo();
		rightNavClose();
		topNavClose();
    }
});

$(window).scroll(function(){
	"use strict";
	
	rightNavClose();
});