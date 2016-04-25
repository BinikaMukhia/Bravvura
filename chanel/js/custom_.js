

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
		
	$("#header").stop().animate({top:-126},400,'easeOutCubic');
	
	if($(window).width() <= 991) {
		$("#header .headerTittle").stop().animate({top:17},400,'easeOutCubic');
		$("#header .brv-logo").stop().animate({"margin-bottom":100},400,'easeOutCubic');
		$("#header .th-nav-btn").stop().animate({top:15},400,'easeOutCubic');
	} else {
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





$(document).ready(function(){
    $('html, body').scrollTop(1);
    $(window).on('load', function() {
		setTimeout(function(){
			$('html, body').scrollTop(1);
		}, 0);
 	});
});

$(window).scroll(function () {
	var scrollTop = $(window).scrollTop();
	if (scrollTop > 200) {
		animateUp();
	}
});

function detectwidth(){
	var width = $(window).width()
	if (width < 991) {
		//$(".prevArticle").find("img").attr("src","images/mob-prev-article.jpg");
		//$(".nextArticle").find("img").attr("src","images/mob-next-article.jpg");
	} else {
		//$("#articleNavigation .prevArticle").find("img").attr("src","images/prev-aarticle-bg.png");
		//$("#articleNavigation .nextArticle").find("img").attr("src","images/next-article-bg.png");
	}
	
	if ((width < 768) < (width < 1025)) {
		//alert("hello")
		//$("#articleNavigation .prevArticle").find("img").attr("src","images/prev-aarticle-bg.png");
		//$("#articleNavigation .nextArticle").find("img").attr("src","images/next-article-bg.png");
		}
	
}

function detectheight(){
	var width = $(window).width()
	if (width > 640) {
		var height = $(".workLeftImage img").height();
		$(".workRightImage img").attr("height", height);
		//$(".relativePosition").css("height", height -0);
	}
	if ((width < 768) < (width < 1025)) {
		//alert("hello")
		var height = $(".workLeftImage img").height();
		//$(".workRightImage img").attr("height", height);
		}
}

function animateUp() {
	$("#header").animate({"top":"-123px"}, "slow");
}

function animateUpStop() {
	$("#header").stop().animate({"top":"0"});
}

$(window).load(function() {
    //animateUpStop();
	detectheight();
});

$(document).ready(function() {
	
	//detectwidth();
	animateUpStop();
	
//	var widthPanning = $(window).width()
//	if ((widthPanning > 768)) {
//		$(".workRightLarge img").imagePanning();
//		$(".workLeftLarge img").imagePanning();
//	}
	
	$(".workRightLarge img").imagePanning();
	$(".workLeftLarge img").imagePanning();

    $.doTimeout(2500, function(){
		$('.repeat.go').removeClass('go');
		return true;
	});
	$.doTimeout(2520, function(){
		$('.repeat').addClass('go');
		return true;
	});
	
	$(".popupLink a").click(function(){
		$("#video").attr("src" , "http://player.vimeo.com/video/153501976?autoplay=1");
	});
	$(".center_popup_close").click(function(){
		$("#video").removeAttr("src" , "http://player.vimeo.com/video/153501976?autoplay=1");
	});
	$(".center_popup").click(function(){
		//$("#video").removeAttr("src" , "http://player.vimeo.com/video/153501976?autoplay=1");
	});
	
	$(".show_center_alert").click(function() {
		$(".center_popup").fadeIn();
	});
	$(".hide_center_alert").click(function() {
		$(".center_popup").fadeOut();
	});
	$(".center_popup").click(function () {
		//$(this).fadeOut();
	});
	$('.popupLink a').click(function() {
        $('.center_popup_box').addClass('go');
    });
	$('.center_popup_close, .center_popup').click(function() {
        //$('.center_popup_box').removeClass('go');
    });
	
	$('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top// - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	
	$('a.largeImageAnchor').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	
	$('.workLeftImage img').click(function() {
		$('.workLeftLarge').fadeIn();
		$('.close-btn').fadeIn();
	});
	$('.workLeftLarge').click(function() {
		$(this).fadeOut();
	});
	$('.workRightImage img').click(function() {
		$('.workRightLarge').fadeIn();
		$('.close-btn').fadeIn();
	});
	$('.workRightLarge').click(function() {
		$(this).fadeOut();
	});
	$('.close-btn').click(function() {
		$('.workLeftLarge, .workRightLarge').fadeOut();
	});
	
});

//$(window).resize(detectwidth);
$(window).resize(detectheight);

var lastScrollTop = 0;
var action = "stopped";
var timeout = 100;
$.fn.scrollEnd = function(callback, timeout) { 
	"use strict";   
	  $(this).scroll(function(){
	  	var st = $(this).scrollTop();
	    var $this = $(this);
		if (lastScrollTop !==0 )
  		{
  			if (st < lastScrollTop){
				action = "scrollUp";
			}
			else if (st > lastScrollTop){
				action = "scrollDown";
			}
		}
		lastScrollTop = st;
	    if ($this.data('scrollTimeout')) {
	      clearTimeout($this.data('scrollTimeout'));
	    }
	    $this.data('scrollTimeout', setTimeout(callback,timeout));
	});
};

function rightNavOpen(){
	$("#th-nav").animate({right:0},800,'easeOutCubic');
	$("#th-nav ul li").addClass("go");
}

function rightNavClose(){
	$("#th-nav").animate({right:-250},800,'easeOutCubic');
	$("#th-nav ul li").removeClass("go");
}

$(window).scrollEnd(function(){
	"use strict";
    if(action!=="stopped"){
		rightNavClose();
    }	
}, timeout);

/*$(window).load(function (){
	var scrollTop = $(window).scrollTop();
	if (scrollTop > 200) {
		animateUpStop();
	} else {
	}
});*/
