
function rightNavOpen(){
	"use strict";

	closeVideo();
	
	if (($("html").hasClass("mobile")) || ($("html").hasClass("tablet"))){
		$("#th-right-nav").stop().show().delay(400).animate({right:0},400,'easeOutCubic');
	} else {
		$("#th-right-nav").stop().animate({right:0},400,'easeOutCubic');
	}
	
	$("#th-right-nav ul li").addClass("go");
	
	if($(window).width() <= 991) {
		$("#th-right-nav .th-vm ul:nth-child(3) li:nth-child(1)").removeClass("delay-1000").addClass("delay-2000");
		$("#th-right-nav .th-vm ul:nth-child(3) li:nth-child(2)").removeClass("delay-1250").addClass("delay-2250");
	} else {
		$("#th-right-nav .th-vm ul:nth-child(3) li:nth-child(1)").removeClass("delay-2000").addClass("delay-1000");
		$("#th-right-nav .th-vm ul:nth-child(3) li:nth-child(2)").removeClass("delay-2250").addClass("delay-1250");
	}
	
	
	
}

function rightNavClose(){
	"use strict";
	
	if (($("html").hasClass("mobile")) || ($("html").hasClass("tablet"))){
		$("#th-right-nav").stop().animate({right:-250},400,'easeOutCubic').hide();
	} else {
		$("#th-right-nav").stop().animate({right:-250},400,'easeOutCubic');
	}
	
	$("#th-right-nav").stop().animate({right:-250},400,'easeOutCubic');
	$("#th-right-nav ul li").removeClass("go");
	
	if($(window).width() <= 991) {
		$("#th-right-nav .th-vm ul:nth-child(3) li:nth-child(1)").removeClass("delay-1000").addClass("delay-2000");
		$("#th-right-nav .th-vm ul:nth-child(3) li:nth-child(2)").removeClass("delay-1250").addClass("delay-2250");
	} else {
		$("#th-right-nav .th-vm ul:nth-child(3) li:nth-child(1)").removeClass("delay-2000").addClass("delay-1000");
		$("#th-right-nav .th-vm ul:nth-child(3) li:nth-child(2)").removeClass("delay-2250").addClass("delay-1250");
	}
}

function topNavOpen(){
	"use strict";	
		
	//$('body').css("overflow","hidden");
	
	$("#header").stop().animate({top:0},800,'easeOutCubic');
	$("#header .th-nav-btn").stop().animate({top:20},800,'easeOutCubic');
	
	if($(window).width() <= 991){
		$("#header .th-logo").stop().animate({"margin-bottom":70},400,'easeOutCubic');
		$("#header .work-case").stop().animate({top:100},800,'easeOutCubic');				
	} else {
		$("#header .th-logo").stop().animate({"margin-bottom":18},400,'easeOutCubic');
		$("#header .work-case").stop().animate({top:23},800,'easeOutCubic');
	}
}

function topNavClose(){
	"use strict";
	
	//$('body').css("overflow","visible");
	
	$("#header").stop().animate({top:-120},400,'easeOutCubic');
	
	if($(window).width() <= 991) {
		$("#header .work-case").stop().animate({top:17},400,'easeOutCubic');
		$("#header .th-logo").stop().animate({"margin-bottom":100},400,'easeOutCubic');
		$("#header .th-nav-btn").stop().animate({top:15},400,'easeOutCubic');
	} else {
		$("#header .th-logo").stop().animate({"margin-bottom":18},400,'easeOutCubic');
		$("#header .work-case").stop().animate({top:15},400,'easeOutCubic');
		$("#header .th-nav-btn").stop().animate({top:14},400,'easeOutCubic');
	}
}

function sectionOneFrtPart(){
	"use strict";
	
	$("#th-intro-sec-text").fadeOut();
	$("#th-intro-text").fadeIn();
	
	$("#th-intro-img").stop().css({ "-webkit-filter": "blur(0)", "filter": "blur(0)" });
	$(".th-down-arrow").removeClass("th-second-section");
	
	$("#th-intro").attr("data-count","0");
	$("#th-intro-sec-text div,#th-intro-sec-text h2,#th-intro-sec-text li").removeClass("go");
	$("#th-intro-text span,#th-intro-text h1,#th-intro-text a").addClass("go");
	
	}

function sectionOneSecPart(){
	"use strict";
	
	closeVideo();
	$("#th-intro-sec-text").fadeIn();
	$("#th-intro-text").fadeOut();
	
	$("#th-intro-img").stop().css({ "-webkit-filter": "blur(8px)", "filter": "blur(8px)" });
	$(".th-down-arrow").addClass("th-second-section");
	
	$("#th-intro-text span,#th-intro-text h1,#th-intro-text a").removeClass("go");
	$("#th-intro-sec-text div,#th-intro-sec-text h2,#th-intro-sec-text li").addClass("go");	
	
	if($("html").hasClass("desktop")){
		$("#th-intro").attr("data-count","1");
	} else {
		setTimeout(function(){
			$("#th-intro").attr("data-count","1");
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
	
	clearTimeout(t);
	var t = setTimeout(function(){
		$("#th-intro-video").append('<iframe class="col-sm-12 col-md-12 col-lg-12" height="500" src="http://player.vimeo.com/video/163386865?autoplay=1"></iframe>');		
	}, 450);
	
	$("#th-intro-video").removeClass("growOut").addClass("growIn").fadeIn();
	
	$('html, body').stop().animate({
		scrollTop: $("#th-intro").offset().top
    }, 1500, 'easeInOutExpo');
}

function closeVideo(){
	"use strict";
	
	$("#th-intro-video").removeClass("growIn").addClass("growOut").fadeOut();
	$("#th-intro-video iframe").remove();		
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

	if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/) ){
		$(".th-gallery-screen > div > img").imagePanning();
	}
}

function brvLogo(){
	"use strict";
	
	if (window.devicePixelRatio >= 2) {
		$("img.th-logo").attr("src","images/brv-logo-2x.png");
	} else {
		$("img.th-logo").attr("src","images/logo.png");
	}	
}

function mobChange(){
	"use strict";
	
	topNavClose();
	rightNavClose();	
	brvLogo();
	
	var bodyOffset = Math.round($(window).height()/2);
	$('body').scrollspy({target: ".th-nav", offset:bodyOffset});
	
	$("#header ul.nav li a, #th-right-nav ul.nav li a").click(function(){
		topNavClose();
		rightNavClose();
		$('body').css("overflow","visible");
	});
	
	$("#th-intro-video").click(function(){
		closeVideo();
	});	
	
	$(".th-down-arrow").click(function() {			
	
		rightNavClose();
	
		if($("#th-intro-text").is(":visible")){		
			sectionOneSecPart();
			topNavClose();
		} else if($("#th-intro-sec-text").is(":visible")){
			$('body').css("overflow","visible");
			$('html, body').stop().animate({
				scrollTop: $("#sectionSecond").offset().top
			}, 1500, 'easeInOutExpo');
		}
	});
	
	if($("html").hasClass("mobile") || $("html").hasClass("tablet")){
		
	$("#th-intro").swipe({
		swipeUp: function () {			
			
			topNavClose();
			sectionOneSecPart();
			
			$('body').css("overflow","hidden");
			
			$("html, body").stop().animate({
				scrollTop: 0
			}, 100,'easeInOutExpo');
			
			if ($("#th-intro").attr("data-count") == 1) {
				$('body').css("overflow","visible");
				
				$("html, body").stop().animate({
					scrollTop: $($("#header.th-nav ul li:nth-child(2) a").attr('href')).offset().top
				}, 1000,'easeInOutExpo');
			}
			
			
			
		},
		swipeDown: function () {
			if ($("#th-intro").attr("data-count") == 0) {
				sectionOneFrtPart();
				$('body').css("overflow","hidden");
				topNavOpen();
				return false;
			} else if ($("#th-intro").attr("data-count") == 1) {
				$("html, body").stop().animate({
					scrollTop: $($("#header.th-nav ul li:nth-child(1) a").attr('href')).offset().top
				}, 1000,'easeInOutExpo');
				$("#th-intro").attr("data-count", 0);
			}
		}
	});
	
	};
	
	$("#th-right-nav").swipe({
		swipeRight: function(){
			rightNavClose();
		}
	});
	
	$("#header").swipe({
		swipeUp: function(){
			topNavClose();
		}
	});
	
		
	if($(window).width() <= 991) {
		
		$("#th-nav .th-logo img").attr("src","images/mob-logo.png");
		$("#sectionThree").find("img").attr("src","images/mob-img2.jpg");
		$("#sectionSeven img.th-img7").attr("src","images/mob-img7.jpg");
		$("#sectionNine div.th-thumb-5").find("img").attr("src","images/mob-thumb-5.jpg");
		$("#sectionTen div:nth-child(1)").find("img").attr("src","images/mob-quicken-loans.jpg");
		$("#sectionTen div:nth-child(2)").find("img").attr("src","images/mob-gypsy-kiss.jpg");	
								
	} else {
		
		if($("#th-bottom").is(":hidden")){
			$(document).scrollTop(0);
		}
		
		$("#th-nav").css("height","160px");
		$("#th-nav .th-top-nav").fadeIn();
		
		$("#th-nav .th-logo img").attr("src","images/logo.png");
		$("#sectionThree").find("img").attr("src","images/img2.jpg");
		$("#sectionSeven img.th-img7").attr("src","images/img7.jpg");
		$("#sectionNine div.th-thumb-5").find("img").attr("src","images/thumb-5.jpg");
		$("#sectionTen div:nth-child(1)").find("img").attr("src","images/quicken-loans.jpg");
		$("#sectionTen div:nth-child(2)").find("img").attr("src","images/gypsy-kiss.jpg");
		
		topNavClose();
		galleryScreen();
	}
	
	$(".playVideo").on('click',function(){ 
			playVideo();		
	});
	
	/*var activeLink = $("#header.th-nav ul li.active a");
	
	$("html, body").stop().animate({
		scrollTop: $(activeLink.attr('href')).offset().top
	}, 100);*/
}

function closeImgGallery(){
	"use strict";
	
	$(".th-gallery-screen").fadeOut();
	$(".th-gallery-screen > div").css("display", "none");
}


$(window).resize(function(){
	"use strict";
	mobChange();
	$("#th-right-nav ul li").removeClass("go");
});

var b
$(window).unbind('orientationchange');
$(window).bind("orientationchange", function(){
	"use strict";
		
	topNavClose();
	rightNavClose();
	closeImgGallery();
	
	$(".th-gallery-screen").fadeOut();
	$(".th-gallery-screen > div").css("display", "none");
	
	var activeLink = $("#header.th-nav ul li.active a");
	
	$("html, body").stop().animate({
		scrollTop: $(activeLink.attr('href')).offset().top
	}, 100);
	
	$("#sectionSix").hide();

	clearInterval(b);
	b = setTimeout(function(){		
		$("#sectionSix").show();
	},700);
		
});

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
	$("html,body").animate({ scrollTop: "0px" }, 0);	
};


$(document).ready(function(){
	"use strict";	
	
	mobChange();
	topNavOpen();
		
	$("#th-intro").addClass('current');	
	
	
	$("#sectionTen a").on('click', function(event) {

		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 500);
		}
	
	});
	
	
			
	$(".th-gallery-thumb a").click(function(event) {
        event.preventDefault();
		$(".th-gallery-screen").fadeIn();
        var tab = $(this).attr("href");
        $(".th-gallery-screen > div").not(tab).css("display", "none");
        $(tab).fadeIn();
		
		$('html, body').stop().animate({
			scrollTop: $("#sectionNine").offset().top - 50
		}, 1500, 'easeInOutExpo');
		
		if((tab === "#screen1") || (tab === "#screen2")){
			$(".th-close-gallery").addClass("invert");	
		} else {
			$(".th-close-gallery").removeClass("invert");
		}			
    });	
	
	$(".th-close-gallery,.th-gallery-screen").click(function(){
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
		
		$('body').css("overflow","visible");
		$("#th-bottom ,#th-footer").show();
		
		closeVideo();
		
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
		
    });
	
	$("#header ul.nav li:nth-child(1), #th-right-nav ul.nav li:nth-child(1)").click(function(){
		topNavOpen();
		sectionOneFrtPart();
	});
	
	$(".th-nav ul li a").click(function(){
		rightNavClose();	
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
	
	if (sessionStorage.getItem("is_reloaded")) {
		alert('Reloaded!');
	}
	
});




$(window).load(function(){
	"use strict";
	
	$("#th-bottom ,#th-footer").show();
});



if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
			
	document.onkeydown = function(evt2) {
		"use strict";
		
		evt2 = evt2 || window.event;
		//alert(evt2.which);
		if (evt2.keyCode === 38) {
			if ($("#th-intro").attr("data-count") == 1) {			
				sectionOneFrtPart();	
				return false;
			}	
			rightNavClose();
			topNavOpen();
		}
		
		if (evt2.keyCode === 40) {
			if ($("#th-intro").attr("data-count") == 0) {
				sectionOneSecPart();
				return false;
			} else if ($("#th-intro").attr("data-count") == 1) {
				$('body').css("overflow","visible");
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
		
	
	$("body").mousewheel(function(event, delta){
			
		topNavClose();
		closeVideo();
		
		if (delta > 0){
			
			if ($("#th-intro").attr("data-count") == 1) {			
				sectionOneFrtPart();
				return false;
			}
			
			var windowScroll = $(window).scrollTop();
			
			if(windowScroll < 50) {
				topNavOpen();
			}
					
		} else if (delta < 0) {
			
			if ($("#th-intro").attr("data-count") == 0) {
				sectionOneSecPart();
				return false;
			} else if ($("#th-intro").attr("data-count") == 1) {
				$("#th-bottom ,#th-footer").show();
			}
		}
		
	});

};

$(document).on('touchmove', function() {
	"use strict";
	
	topNavClose();
	rightNavClose();
});

if ( /iPad/i.test(navigator.userAgent) ){	
	
	var slider = new MasterSlider();
		
		slider.control('arrows');
		slider.control('thumblist' , {autohide:false ,dir:'h',align:'bottom', width:130, height:85, margin:5, space:10 , hideUnder:490});	
		//slider.control('slideinfo',{insertTo:"#partial-view-1" , autohide:false, align:'bottom', size:160});
		//slider.control('circletimer' , {color:"#FFFFFF" , stroke:9});
		slider.control('scrollbar' , {dir:"h"});
		
		slider.setup('masterslider' , {
			width:760,
			height:508,
			space:5,
			loop:true,
			view:'basic',
			layout:'partialview'
		});
	
}

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