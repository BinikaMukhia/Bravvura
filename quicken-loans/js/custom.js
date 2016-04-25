
function topNavOpen() {	

	$("#header").stop().animate({top:0},800,'easeOutCubic');
	$("#header .th-nav-btn").stop().animate({top:20},800,'easeOutCubic');
	
	if($(window).width() <= 991){
		$("#header .brv-logo").stop().animate({"margin-bottom":64},400,'easeOutCubic');
		$("#header .headerTittle").stop().animate({top:100},800,'easeOutCubic');				
	} else {
		$("#header .brv-logo").stop().animate({"margin-bottom":12},400,'easeOutCubic');
		$("#header .headerTittle").stop().animate({top:23},800,'easeOutCubic');
	}
	
}

function topNavClose() {
		
	if($(window).width() <= 991) {
		
		if($("html").hasClass("desktop")){
			$("#header").stop().animate({top:-126},400,'easeOutCubic');
		} else {
			$("#header").stop().animate({top:-120},400,'easeOutCubic');	
		}
		
		$("#header .headerTittle").stop().animate({top:17},400,'easeOutCubic');
		$("#header .brv-logo").stop().animate({"margin-bottom":100},400,'easeOutCubic');
		$("#header .th-nav-btn").stop().animate({top:15},400,'easeOutCubic');
	} else {
		$("#header").stop().animate({top:-126},400,'easeOutCubic');
		$("#header .brv-logo").stop().animate({"margin-bottom":18},400,'easeOutCubic');
		$("#header .headerTittle").stop().animate({top:15},400,'easeOutCubic');
		$("#header .th-nav-btn").stop().animate({top:14},400,'easeOutCubic');
	}
	
}

function rightNavOpen(){
	"use strict";
	
	closeVideo();
	
	$("#th-nav").stop().animate({right:0},800,'easeOutCubic');
	$("#th-nav ul li").addClass("go");
	
	if($(window).width() <= 991) {
		$("#th-nav .th-vm ul:nth-child(3) li:nth-child(1)").removeClass("delay-1000").addClass("delay-2000");
		$("#th-nav .th-vm ul:nth-child(3) li:nth-child(2)").removeClass("delay-1250").addClass("delay-2250").css("color","red");
	} else {
		$("#th-nav .th-vm ul:nth-child(3) li:nth-child(1)").removeClass("delay-2000").addClass("delay-1000");
		$("#th-nav .th-vm ul:nth-child(3) li:nth-child(2)").removeClass("delay-2250").addClass("delay-1250");
	}
	
}

function rightNavClose(){
	"use strict";
	
	$("#th-nav").stop().animate({right:-250},400,'easeOutCubic');
	$("#th-nav ul li").removeClass("go");
	
	if($(window).width() <= 991) {
		$("#th-nav .th-vm ul:nth-child(3) li:nth-child(1)").removeClass("delay-1000").addClass("delay-2000");
		$("#th-nav .th-vm ul:nth-child(3) li:nth-child(2)").removeClass("delay-1250").addClass("delay-2250");
	} else {
		$("#th-nav .th-vm ul:nth-child(3) li:nth-child(1)").removeClass("delay-2000").addClass("delay-1000");
		$("#th-nav .th-vm ul:nth-child(3) li:nth-child(2)").removeClass("delay-2250").addClass("delay-1250");
	}
}


function playVideo(){
	"use strict";
	
	topNavClose();
	rightNavClose();
	
	$("#video").append('<iframe style="overflow:hidden;" height="500" frameborder="no" src="http://player.vimeo.com/video/163530316?autoplay=1"></iframe>');
	$(".center_popup").removeClass("growOut").addClass("growIn").fadeIn();	
	$('html, body').stop().animate({
		scrollTop: $("#golferIntro").offset().top
    }, 1500, 'easeInOutExpo');
}

function closeVideo(){
	"use strict";
	
	$(".center_popup").removeClass("growIn").addClass("growOut").fadeOut();
	$("#video iframe").remove();	
}


function workPlayVideo(){
	"use strict";
	topNavClose();
	rightNavClose();
	
	var vdsrc = $(".work_center_popup iframe").attr("data-src");
	$(".work_center_popup iframe").attr("src",vdsrc);
	$(".work_center_popup").removeClass("growOut").addClass("growIn").fadeIn();
	
	$('html, body').stop().animate({
		scrollTop: $(".workVideo").offset().top - 50
    }, 1500, 'easeInOutExpo');
}


function galleryScreen(){
	"use strict";
	$(".brv-gallery-screen > div > img").imagePanning();	
}

function brvLogo(){
	"use strict";
	
	if (window.devicePixelRatio >= 2) {
		$("img.brv-logo").attr("src","images/brv-logo-2x.png");
	} else {
		$("img.brv-logo").attr("src","images/brv-logo.png");
	}	
}

function sectionOneFrtPart(){
	"use strict";
	
	$("#ql-intro-sec-text").fadeOut();
	$("#ql-intro-text").fadeIn();
	
	$("#ql-intro-img").stop().css({ "-webkit-filter": "blur(0)", "filter": "blur(0)" });
	
	$("#golferIntro").attr("data-count","0");
	$("#ql-intro-sec-text div,#ql-intro-sec-text h2,#ql-intro-sec-text li").removeClass("go");
	$("#ql-intro-text span,#ql-intro-text h1,#ql-intro-text a").addClass("go");
	
	}

function sectionOneSecPart(){
	"use strict";
	
	closeVideo();
	
	$("#ql-intro-text").fadeOut();
	$("#ql-intro-sec-text").fadeIn();
	
	$("#ql-intro-img").stop().css({ "-webkit-filter": "blur(8px)", "filter": "blur(8px)" });
	
	$("#ql-intro-text span,#ql-intro-text h1,#ql-intro-text a").removeClass("go");
	$("#ql-intro-sec-text div,#ql-intro-sec-text h2,#ql-intro-sec-text li").addClass("go");	
	
	if($("html").hasClass("desktop")){
		$("#golferIntro").attr("data-count","1");
	} else {
		setTimeout(function(){
			$("#golferIntro").attr("data-count","1");
		},500);
	}
}


function mobChange(){
	"use strict";
	
	topNavClose();
	rightNavClose();
	brvLogo();
	
	if($(window).width() > 991) {
		$(".center_popup").height($(window).height());
	}
	
	var bodyOffset = Math.round($(window).height()/2);
	$('body').scrollspy({target: ".mainNav", offset:bodyOffset});
	
	$("#mainNav.mainNav ul li a, #th-nav ul li a").click(function(){
		topNavClose();
		rightNavClose();
		closeVideo();
		$("#ql-bottom").show();
	});
	
	$(".center_popup_box,.work_center_popup").click(function(){
		closeVideo();
	});
	
	$(".down-arrow").click(function() {	
		
		if($("#ql-intro-text").is(":visible")){		
			sectionOneSecPart();
			topNavClose();
			rightNavClose();
		} else if($("#ql-intro-sec-text").is(":visible")){
			$("#ql-bottom").show();
			
			$('html, body').stop().animate({
				scrollTop: $($("#header .mainNav ul li:nth-child(2) a").attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
		}
		
	});
	
	$("#golferIntro").swipe({
		swipeUp: function () {
			topNavClose();
			sectionOneSecPart();
			$("#ql-bottom").show();
			
			$("html, body").stop().animate({
				scrollTop: 0
			}, 100,'easeInOutExpo');
			
			if($("#golferIntro").attr("data-count") == 1) {
				$("html, body").stop().animate({
					scrollTop: $("#golferIntro").innerHeight()
				}, 1000,'easeInOutExpo');
			}
			
		},
		swipeDown: function () {
			
			sectionOneFrtPart();
			topNavOpen();
			$("#ql-bottom").hide();
			
			$("html, body").stop().animate({
				scrollTop: $($("#mainNav.mainNav ul li:nth-child(1) a").attr('href')).offset().top
			}, 1000);
					
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
	
	$("#th-nav").swipe({
		swipeRight: function(){
			rightNavClose();
		}
	});
	
	$("#header").swipe({
		swipeUp: function(){
			topNavClose();
		}
	});
	
	
	var width = $(window).width();
	
	if (width <= 991) {
		$(".prevArticle").find("img").attr("src","images/mob-chanel.jpg");
		$(".nextArticle").find("img").attr("src","images/mob-tommy-hilfiger.jpg");
	} else {
		$("#articleNavigation .prevArticle").find("img").attr("src","images/chanel.jpg");
		$("#articleNavigation .nextArticle").find("img").attr("src","images/tommy-hil.jpg");
		
		galleryScreen();
	}
	
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

$(document).ready(function(){
	"use strict";
	
	closeVideo();
	mobChange();
	topNavOpen();
	
	window.scrollTo(0, 0);
	$("html,body").animate({ scrollTop: "0px" }, 0);
	
	$("#ql-bottom").hide();
	
	
	$(".brv-gallery-thumb a").click(function(event) {
        event.preventDefault();
		$(".brv-gallery-screen").fadeIn();
        var tab = $(this).attr("href");
        $(".brv-gallery-screen > div").not(tab).css("display", "none");
        $(tab).fadeIn();
		
		$('html, body').stop().animate({
			scrollTop: $("#sectionNine").offset().top - 50
		}, 1500, 'easeInOutExpo');
		
		if((tab === "#screen1") || (tab === "#screen2") || (tab === "#screen3")){
			$(".brv-close-gallery").addClass("invert");	
		} else {
			$(".brv-close-gallery").removeClass("invert");
		}
			
    });	
	
	$(".brv-close-gallery,.brv-gallery-screen").click(function(){
		closeImgGallery();
	});
	
			
	//css3 animationit
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
            scrollTop: $($anchor.attr('href')).offset().top// - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	
	
	//work section large image
	$('.workLeftImage img').click(function() {
		$('.workLeftLarge').fadeIn();
	});
	$('.workLeftLarge').click(function() {
		$(this).fadeOut();
	});
	$('.workRightImage img').click(function() {
		$('.workRightLarge').fadeIn();
	});
	$('.workRightLarge').click(function() {
		$(this).fadeOut();
	});
	$('.close-btn').click(function() {
		$('.workLeftLarge, .workRightLarge').fadeOut();
	});

	$("#header ul.nav li:nth-child(1),#th-nav ul.nav li:nth-child(1)").click(function(){
		topNavOpen();
		sectionOneFrtPart();
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



$(window).resize(function(){
	"use strict";
	
	mobChange();
	$("#th-nav ul li").removeClass("go");
});

$(window).unbind('orientationchange');
$(window).bind("orientationchange", function(){
	"use strict";
	
	topNavClose();
	rightNavClose();
	closeImgGallery();
});



document.onkeydown = function(evt2) {
	"use strict";
	evt2 = evt2 || window.event;
	//alert(evt2.which);
	if (evt2.keyCode === 27) {
		closeVideo();
		rightNavClose();
		topNavClose();
	}
	
	if (evt2.keyCode === 40) {
		rightNavClose();
		topNavClose();
		if ($("#golferIntro").attr("data-count") == 0) {
			sectionOneSecPart();
			return false;
		} else if ($("#golferIntro").attr("data-count") == 1) {
			$("#ql-bottom").show();
		}			
	}
	
	if (evt2.keyCode === 38) {
		topNavOpen();
		if ($("#golferIntro").attr("data-count") == 1) {			
			sectionOneFrtPart();	
			return false;
		}	
		rightNavClose();
	}
	
}

$("body").mousewheel(function(event, delta){
		
	topNavClose();
	closeVideo();
	
	if (delta > 0){
		
		if ($("#golferIntro").attr("data-count") == 1) {			
			sectionOneFrtPart();
		}
		
		var windowScroll = $(window).scrollTop();
		
		if(windowScroll < 50) {
			topNavOpen();
		}	
				
	} else if (delta < 0) {
		
		if ($("#golferIntro").attr("data-count") == 0) {
			sectionOneSecPart();
			return false;
		} else if ($("#golferIntro").attr("data-count") == 1) {
			$("#ql-bottom").show();
		}
	}
	
});

$(document).on('touchmove', function() {
	"use strict";
	
	topNavClose();
	rightNavClose();
});

window.blockMenuHeaderScroll = false;
$(window).on('touchstart', function(e){
	"use strict";
	
    if ($(e.target).closest('.center_popup,.work_center_popup').length === 1)
    {
        blockMenuHeaderScroll = true;	
    }
});
$(window).on('touchend', function(){
	"use strict";
	
    blockMenuHeaderScroll = false;
});
$(window).on('touchmove', function(e){
	"use strict";
	
    if (blockMenuHeaderScroll){
        e.preventDefault();
    }
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
