
function rightNavOpen() {
    "use strict";

    $(".navigation").stop().animate({ right: 0 }, 400, 'easeOutCubic');
    $(".navigation ul li").addClass("go");

}

function rightNavClose() {
    "use strict";
    $(".navigation").stop().animate({ right: -250 }, 400, 'easeOutCubic');
    $(".navigation ul li").removeClass("go");

}

function brvLogo() {
    "use strict";

    if (window.devicePixelRatio >= 2) {
        $("img.bravvuraLogo").attr("src", "images/bravvura-logo-2x.png");
    } else {
        $("img.bravvuraLogo").attr("src", "images/bravvura-logo.png");
    }
}

$(window).resize(function () {
    //brvLogo();
});

$(window).bind("pageshow", function (event) {
    "use strict";
    if (event.originalEvent.persisted) {
        //window.scrollTo(0, 0);
        //$("html,body").animate({scrollTop:0},0);
        window.location.reload();
    }
});


$(document).ready(function () {



    //brvLogo();

    $(".navigation ul li a").click(function () {
        rightNavClose();
    });

    $(".navAbtClk, .downArrowImg").click(function () {
        $("html,body").animate({ scrollTop: $("#slide-2").offset().top }, 800);
    });
    $(".navWrkClk").click(function () {
        $("html,body").animate({ scrollTop: $("#slide-3").offset().top }, 800);

    });
    $(".navConClk").click(function () {
        $("html,body").animate({ scrollTop: $("#slide-11").offset().top }, 800);
    });
    //---Navigation Functionality End----\\

    //----First Section Text Animation Start---\\
    $(window).load(function () {

        firstSection();
    });
    $(".link_txt a").click(function () {
        window.onbeforeunload = function () { event.preventDefault; }
    });
    function firstSection() {
        setTimeout(function () { $(".firstSectionText>span:first-child").css({ "opacity": "1", "margin-right": "0" }) }, 1000)
        setTimeout(function () { $(".firstSectionText>span:nth-child(2)").css({ "opacity": "1", "margin-left": "0" }) }, 1500)
        setTimeout(function () { $(".firstSectionText>span:nth-child(3)").css({ "opacity": "1", "margin-right": "0" }); $(".downArrowImg").animate({ opacity: 1 }, 500) }, 2000)
        setTimeout(function () { $(".firstSectionText>span:last-child").css({ "opacity": "1" }) }, 1000)
        setTimeout(function () { }, 2300)

    }
    $(window).scroll(function () {
        rightNavClose();
        $(".navItemContainer li").removeClass("active");

        if ($(window).scrollTop() >= 200) {
            $(".bravvuraLogo").addClass("logoUpAnimate");

            if ($("html").hasClass("notDesktop")) {
                $(".biglogo").hide().removeClass("trans1");
                $(".smalllogo").show();
            }
        }
        if ($(window).scrollTop() >= $("#slide-2").offset().top) {
            $(".shadowImg").removeClass("hide");
            //$(".topFixImg").slideDown(150);
        }
        if ($(window).scrollTop() < $("#slide-2").offset().top) {
            $(".shadowImg").addClass("hide");
            //$(".topFixImg").slideUp(150);
        }
        if ($(window).scrollTop() > ($(window).height() / 2) && $(window).scrollTop() < ($("#slide-3").offset().top - ($(window).height() / 2))) {
            $(".brdCrmb>span.workBrd, .brdCrmb>span.contactBrd").stop().css("display", "none").addClass("hide");
            $(".brdCrmb>span.aboutBrd").removeClass("hide").fadeIn(400);
            $(".navItemContainer>a").removeClass("slctd");
            $(".navItemContainer li:nth-of-type(1)").addClass("active");
        }
        if ($(window).scrollTop() > ($("#slide-3").offset().top - ($(window).height() / 2)) && $(window).scrollTop() < ($("#slide-11").offset().top - ($(window).height() / 2))) {
            $(".brdCrmb>span.contactBrd,.brdCrmb>span.aboutBrd").stop().css("display", "none").addClass("hide");
            $(".brdCrmb>span.workBrd").removeClass("hide").fadeIn(400);
            $(".navItemContainer>a").removeClass("slctd");
            $(".navItemContainer li:nth-of-type(2)").addClass("active");
        }
        if ($(window).scrollTop() > ($("#slide-11").offset().top - ($(window).height() / 2))) {
            $(".brdCrmb>span.workBrd,.brdCrmb>span.aboutBrd").stop().css("display", "none").addClass("hide");
            $(".brdCrmb>span.contactBrd").removeClass("hide").fadeIn(400);
            $(".navItemContainer>a").removeClass("slctd");
            $(".navItemContainer li:nth-of-type(3)").addClass("active");
        }

        if ($(window).scrollTop() < ($(window).height() / 2)) {
            $(".brdCrmb>span.workBrd, .brdCrmb>span.contactBrd,.brdCrmb>span.aboutBrd").stop().css("display", "none");
            $(".navItemContainer>a").removeClass("slctd");
            $(".bravvuraLogo").removeClass("logoUpAnimate");

            if ($("html").hasClass("notDesktop")) {
                $(".biglogo").show();
                $(".smalllogo").hide();
            }

            //$(".brdCrmb>span.aboutBrd").fadeOut(400);
        }

    })
    //----First Section Text Animation End---\\

    if ($("html").hasClass("desktop")) {
        function wrsz() {
		
			
			
			$("body").mousewheel(function(event, delta){
				if ($(window).width() >= 1024 && $(window).height() >= 600) {
					
					if (delta > 0){
						//scroll Up
						upWard();
					} else if (delta < 0) {
						//scroll down
                        downWard();
					}
					
					//prevent page from scrolling				
					return false;
				}
			});
			
			/*
			
            //if ($(window).width() >= 1024 || $(window).height() >= 657) {

            //Mouse Wheel Event Start

            //======Firefox======\\
            $(window).bind('DOMMouseScroll', function (e) {
                if ($(window).width() >= 1024 && $(window).height() >= 600) {
                    if (e.originalEvent.detail > 0) {
                        //scroll down
                        downWard();
                    } else {
                        //scroll Up
						upWard();
                    }
                    //prevent page fom scrolling
                    return false;
                }
            });
            //------------xxx------------\\

            //======IE, Opera, Safari======\\
            $(window).bind('mousewheel', function (e) {
				
                if ($(window).width() >= 1024 && $(window).height() >= 600) {
                    if (e.originalEvent.wheelDelta < 0) {
                        //scroll down
						downWard();
                    } else {
                        //scroll Up
						upWard();
                    }

                    //prevent page fom scrolling
                    return false;
                }
            });
            //Mouse Wheel Event End
			
			*/
			
            //Arrow Keys Funchtion Start

            $(document).keydown(function (e) {
                if ($(window).width() >= 1024 && $(window).height() >= 600) {
                    var keyCode = e.keyCode || e.which;
                    var arrow = { up: 38, down: 40 };
                    switch (keyCode) {
                        case arrow.up:
                            upWard();
                            break;
                            /*===================
                            CASE UP KEY FINISHED
                            ===================*/
                        case arrow.down:
                            downWard();
                            break;
                    }
                }
            });
            //Arrow Keys Funchtion End
            //}
        }
        wrsz();
    }

    $(window).resize(function () {
        wrsz();
    });

    function downWard() {
        var dC = Number($(".br_scrollDownDiv").attr("data-count"));
        if ($(".br_scrollDownDiv").attr("data-count") == "a" || dC == 11) {
            return false;
        } else {
            var addSlideClass,
				removeSlideClass;
			
			var idCnt = dC + 1;
			
            $(".br_scrollDownDiv").stop().attr("data-count", "a");
            $("html, body").animate({ scrollTop: $("#slide-" + idCnt).offset().top }, 800);
			
			setTimeout(function () { 
				$("main>section").removeClass("actv");
			}, 1550);
			
            if ($("#slide-" + idCnt + " a.viewProjectButton").attr("class") == "viewProjectButton wow fadeInUpBig") {
                setTimeout(function () { $("#slide-" + idCnt + " a.viewProjectButton").addClass("trans5") }, 1000);
                setTimeout(function () { $("#slide-" + idCnt + " a.viewProjectButton").removeAttr("style") }, 1400);
                if ($("html").hasClass("no-smil")) {
                    setTimeout(function () { $("#slide-" + idCnt + " a.viewProjectButton").addClass("SCL") }, 1500);
                    setTimeout(function () { $("#slide-" + idCnt + " a.viewProjectButton").removeClass("SCL") }, 1700);
                } else {
                    setTimeout(function () { $("#slide-" + idCnt + " a.viewProjectButton").addClass("scl3") }, 1500);
                    setTimeout(function () { $("#slide-" + idCnt + " a.viewProjectButton").removeClass("scl3") }, 1700);
                }
            } else {
                if ($("html").hasClass("no-smil")) {
                    setTimeout(function () { $("#slide-" + idCnt + " a.viewProjectButton").addClass("SCL") }, 900);
                    setTimeout(function () { $("#slide-" + idCnt + " a.viewProjectButton").removeClass("SCL") }, 1100);
                } else {
                    setTimeout(function () { $("#slide-" + idCnt + " a.viewProjectButton").addClass("scl3") }, 900);
                    setTimeout(function () { $("#slide-" + idCnt + " a.viewProjectButton").removeClass("scl3") }, 1100);
                }
            }
			
			setTimeout(function () {
                $(".br_scrollDownDiv").stop().attr("data-count", idCnt);
                $("#slide-" + idCnt).addClass("actv");				
            }, 1550);
			
            return false;
        }
    }
	
    function upWard() {
        //var dC = Number($(".br_scrollDownDiv").attr("data-count"));
        var dC = Number($(".br_scrollDownDiv").attr("data-count"));
        if ($(".br_scrollDownDiv").attr("data-count") == "a" || dC == 1) {
            return false;
        } else {
			
			var idCnt = dC - 1;
			
			$(".br_scrollDownDiv").stop().attr("data-count", "a");
			$("html, body").animate({ scrollTop: $("#slide-" + idCnt).offset().top }, 800);
            
			setTimeout(function () {
                $(".br_scrollDownDiv").stop().attr("data-count", idCnt);
                $("#slide-" + idCnt).addClass("actv");
            }, 1550);
			
			setTimeout(function () {
				$("main>section").removeClass("actv");
			}, 1550);
            
			
			
            return false;
        }
    }

    $(window).load(function () {

        /*----------*/
        setTimeout(function () {
            wow = new WOW(
                       {
                           boxClass: 'wow',   // default
                           animateClass: 'animated', // default
                           offset: 10,     // default
                           mobile: true,    // default
                           live: true    // default
                       }
                      )
            wow.init();
        }, 900)
        /*----------*/
        var hsh = location.hash;
        if (hsh) {
            //alert(hsh);

            setTimeout(function () {
                //alert($(hsh).offset().top);
                $("html,body").animate({ scrollTop: ($(hsh).offset().top) }, 1);
                $(".br_scrollDownDiv").attr("data-count", hsh.slice(7));
            }, 900);
            setTimeout(function () {
                $(".outerLink").fadeOut("slow");
            }, 910);
        } else {
            window.scrollTo(0, 0);
            $("html,body").animate({ scrollTop: 0 }, 0);
        }

    })
});


window.onbeforeunload = function () {
    $("body>*").css({ "opacity": "0" });
    window.scrollTo(0, 0);
    $("html,body").animate({ scrollTop: "0px" }, 0);

}

// Track position
var pos;

// On scroll update position
document.body.addEventListener("scroll", function () {
    pos = document.body.scrollTop;
}, true);

// On rotation apply the scroll position
window.addEventListener("orientationchange", function () {
    document.body.scrollTop = pos;
}, true);

if ($("html").hasClass("notDesktop")) {

    $(".viewProjectButton").bind('touchstart', function () {
        "use strict";
        $(this).addClass("focus");
    });

    $(".viewProjectButton").bind('touchend', function () {
        "use strict";
        $(this).removeClass("focus");
    });

}


$(window).resize(function () {
    if($(window).width() >= 800 && $("html").hasClass("desktop")){
    var crntsctn = $(".br_scrollDownDiv").attr("data-count");
    //alert(crntsctn);
    var crntsctncnt = Number(crntsctn);
    //alert(crntsctncnt + " " + (2 * crntsctncnt));
    var ofstTp = (crntsctncnt - 1) * $("main>section").height();
    //alert(ofstTp);
    $("html, body").animate({ scrollTop: ofstTp },0);
    $(".br_scrollDownDiv").attr("data-count", crntsctn);
    return false;
    }
});