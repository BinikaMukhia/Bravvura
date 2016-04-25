// DoT Ready Function
//window.onresize = function () { location.reload(); }
var fw = $(window).width(), fh = $(window).height();

//-----------------For Mobile Start-----------------\\

if ($(window).width() < 1025) {

    var mrtpPnkBox = ($(window).height() - $(".pinkBgContainer").outerHeight()) / 2;
    var mrtpChlngSec = ($(window).height() - $(".secondSectionB .b1").outerHeight()) / 2;



    function mobileLandscape() {


        if (window.innerWidth > window.innerHeight) {
            $(".body_bg").css("display", "none");
            $("html").css("background", "url(images/golabal-landscape.jpg) no-repeat 50% 50% #000");
        } else {
            $("html").removeAttr("style");

        }

    }


    function secondAMob() {
        //alert($(".pinkBgContainer").outerHeight());
        $(".pinkBgContainer").css({ "margin-top": mrtpPnkBox });
        $(".secondSectionB .howWeDoIt").css({ "margin-top": (mrtpChlngSec / 2 - 10) });
    }
    $(document).ready(function () {
        $(".scrollButtonDiv").click(function () {
            //alert("df");
            $(".mobFirstSection").animate({ top: (-fh - 10) });
            $(this).fadeOut(100);
        });
        secondAMob();
        mobileLandscape();
    });

    $(window).resize(function () {
        mobileLandscape();
        secondAMob();
        if (window.innerHeight > window.innerWidth) {
            window.location.reload();
        }
    });


    $(function () {
        //Keep track of how many swipes
        var count = 0;
        //Enable swiping...
        //---========First Section Start---========\\
        $(".mobFirstSection").swipe({
            //Generic swipe handler for all directions
            swipeUp: function (event, direction, distance, duration, fingerCount) {
                $(".mobFirstSection").animate({ top: (-fh - 10) });
                $(".scrollButtonDiv").fadeOut(100);
                return false;
            },
            threshold: 0
        });
        //---========First Section End---========\\

        /*-------------------XXX-----------------*/

        //---========Second Section Start---========\\
        /*----Start Second Section B----*/
        $(".secondSectionA").swipe({
            //Generic swipe handler for all directions
            swipeUp: function (event, direction, distance, duration, fingerCount) {
                $(".secondSectionA>.pinkBgContainer").css({ "margin-top": "-200%" });
                $(".secondSectionB").fadeIn(1000);
                setTimeout(function () {
                    //$(".challengeUsUpperDiv").animate({ marginLeft: "-320" });
                    //$(".sliderCounterUl > li").removeClass("selected");
                    //$(".sliderCounterUl > li[data-slide='2']").addClass("selected");
                }, 1000);
                $(".brv-tab-slider").css({ "-webkit-filter": "blur(10px)", "filter": "blur(10px)" });
                return false;
            },
            swipeDown: function (event, direction, distance, duration, fingerCount) {
                $(".mobFirstSection").animate({ top: 0 });
                $(".scrollButtonDiv").fadeIn(100);
                return false;
            },
            threshold: 0
        });
        /*----End Second Section A----*/
        /*----XXX----*/
        /*----Start Second Section B----*/
        $(".secondSectionB").swipe({
            //Generic swipe handler for all directions
            swipeLeft: function (event, direction, distance, duration, fingerCount) {

                var marLft = $(".challengeUsUpperDiv").stop().css("margin-left").replace("px", "");
                //alert(marLft);
                if (marLft <= (-960)) {
                    return false;
                } else {
                    //alert("else True")
                    $(".challengeUsUpperDiv").stop().animate({ marginLeft: (marLft - 320) }, 400);
                    $(".sliderCounterUl > li").removeClass("selected");
                    setTimeout(function () {
                        marLft = $(".challengeUsUpperDiv").stop().css("margin-left").replace("px", "");
                        if (marLft == 0) {
                            $(".sliderCounterUl > li[data-slide='1']").addClass("selected");
                        } else if (marLft == -320) {
                            $(".sliderCounterUl > li[data-slide='2']").addClass("selected");
                        } else if (marLft == -640) {
                            $(".sliderCounterUl > li[data-slide='3']").addClass("selected");
                        } else if (marLft == -960) {
                            $(".sliderCounterUl > li[data-slide='4']").addClass("selected");
                        } else {
                            return false;
                        }
                    }, 510)
                    return false;
                }
            },
            swipeRight: function (event, direction, distance, duration, fingerCount) {
                var marLft = Number($(".challengeUsUpperDiv").css("margin-left").replace("px", ""));
                //alert(marLft);
                if (marLft >= 0) {
                    return false;
                } else {
                    $(".challengeUsUpperDiv").stop().animate({ marginLeft: (marLft + 320) }, 500);
                    $(".sliderCounterUl > li").removeClass("selected");
                    setTimeout(function () {
                        marLft = $(".challengeUsUpperDiv").stop().css("margin-left").replace("px", "");
                        if (marLft == 0) {
                            $(".sliderCounterUl > li[data-slide='1']").addClass("selected");
                        } else if (marLft == -320) {
                            $(".sliderCounterUl > li[data-slide='2']").addClass("selected");
                        } else if (marLft == -640) {
                            $(".sliderCounterUl > li[data-slide='3']").addClass("selected");
                        } else if (marLft == -960) {
                            $(".sliderCounterUl > li[data-slide='4']").addClass("selected");
                        } else {
                            return false;
                        }
                    }, 510)
                    return false;
                }
            },
            swipeDown: function (event, direction, distance, duration, fingerCount) {
                $(".secondSectionB").fadeOut(100);
                setTimeout(function () { $(".secondSectionA>.pinkBgContainer").css({ "margin-top": mrtpPnkBox }) }, 150);
                $(".brv-tab-slider").css({ "-webkit-filter": "blur(0)", "filter": "blur(0)" });
                return false;
            },
            swipeUp: function (event, direction, distance, duration, fingerCount) {
                $(".mobSecondSection").animate({ top: (-fh - 10) });
                return false;
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold: 0
        });
        /*----End Second Section B----*/
        //---========Second Section End---========\\
        //---========Third Section End---========\\
        /*----Start Third Section A----*/
        $(".thirdA").swipe({
            //Generic swipe handler for all directions
            swipeUp: function (event, direction, distance, duration, fingerCount) {
                $(".thirdA").animate({ top: (-fh - 10) });
                return false;
            },
            swipeDown: function (event, direction, distance, duration, fingerCount) {
                $(".mobSecondSection").animate({ top: 0 });
                return false;
            },
            threshold: 0
        });
        /*----End Third Section A----*/
        /*----Start Third Section B----*/
        $(".thirdB").swipe({
            //Generic swipe handler for all directions
            swipeUp: function (event, direction, distance, duration, fingerCount) {
                return false;
            },
            swipeDown: function (event, direction, distance, duration, fingerCount) {
                $(".thirdA").animate({ top: 0 });
                return false;
            },
            threshold: 0
        });
        /*----End Third Section B----*/
    });
} else {

    // Desktop Version Start \\

    $(document).ready(function () {
        //For Navigation Functionality Start\\
        setTimeout(function () {
            $("#br_videodiv").attr("data-wi", $("#br_videodiv").width()).attr("data-hi", $("#br_videodiv").height());
            $("#logo_txt").attr("data-wi", $("#logo_txt").width()).attr("data-hi", $("#logo_txt").height());
        }, 3000);
        $(".navButton").click(function () {
            $(".navigation").animate({ right: 0 }, 400);
            setTimeout(function () { $(".navInnerSection .navItemContainer a:first-child").css({ "margin-right": "0" }) }, 50)
            setTimeout(function () { $(".navInnerSection .navItemContainer a:first-child + a").css({ "margin-right": "0" }) }, 150)
            setTimeout(function () { $(".navInnerSection .navItemContainer a:first-child + a + a").css({ "margin-right": "0" }) }, 250)
            setTimeout(function () { $(".navInnerSection .socialNetworkingContainer a:first-child ").css({ "margin-right": "0" }) }, 350)
            setTimeout(function () { $(".navInnerSection .socialNetworkingContainer a:first-child + a").css({ "margin-right": "0" }) }, 450)
        });
        $(".crossIconImg").click(function () {
            setTimeout(function () { $(".navInnerSection .navItemContainer a:first-child").css({ "margin-right": "" }) }, 450)
            setTimeout(function () { $(".navInnerSection .navItemContainer a:first-child + a").css({ "margin-right": "" }) }, 350)
            setTimeout(function () { $(".navInnerSection .navItemContainer a:first-child + a + a").css({ "margin-right": "" }) }, 250)
            setTimeout(function () { $(".navInnerSection .socialNetworkingContainer a:first-child ").css({ "margin-right": "" }) }, 150)
            setTimeout(function () { $(".navInnerSection .socialNetworkingContainer a:first-child + a").css({ "margin-right": "" }) }, 50)
            setTimeout(function () { $(".navigation").animate({ right: "-244px" }, 500); }, 450);
        });
        //---Navigation Functionality End----\\
        $(".br_scrollDownDiv").stop().attr("data-count", "a");

        $(".br_connect").css({ "display": "none" });
        setTimeout(function () {
            //var mrHgtPnkBx = ((fh - $("#br_videodiv").height()) / 2);
            //$("#br_videodiv").css("margin-top", mrHgtPnkBx);
            //var mrHgtLogoTxt = ((fh - $("#logo_txt").height()) / 2);
            //$("#logo_txt").css("margin-top", mrHgtLogoTxt);
            var hgt = ((fh - $("#br_videodiv").height()) / 2) - 55;
            $(".br_connect").fadeIn().animate({ bottom: hgt }, 500);
        }, 1500);


        setTimeout(function () { $(".br_scrollDownDiv").stop().attr("data-count", "0") }, 2500);


    });
    //---------XXX---------\\

    // For First Section Js
    setTimeout(function () { $(".br_videobox, #br_videodiv2").addClass("wh330px") }, 700);
    setTimeout(function () { $(".bgV").addClass("bgVw") }, 1200);
    document.getElementById("bgvid").onloadeddata = function () {
        $(".bgPinkLayer").fadeOut(800);
    };
    //---------XXX---------\\



    function section_one() {
        $(".br_scrollDownDiv").stop().attr("data-count", "a");

        $('.br_connect').stop().fadeOut(500);
        $('.firstClickDiv').stop().fadeOut(0)

        $('#logo_txt, #br_videodiv').stop().addClass("scl2");
        $('#logo_txt').stop().animate({ marginTop: "23px", top: 0 }, 1000);
        $('#br_videodiv').stop().css({ "background-color": "#fff", "width": "220px", "height": "200px" }).animate({ marginTop: "-14px", top: 0 }, 1000)
        setTimeout(function () {
            var fshgt = ($(window).height() - 362) / 2;
            $('#logo_txt em').stop().css("color", "#fff");
            $('#logo_txt em.bgV').stop().addClass("bgVp");

        }, 300);
        $(".bgPinkLayer").stop().fadeOut(800);

        //$('#br_videodiv2').stop().addClass('br_Bigvideobox').animate({ height: "100%", width: "100%" }, 800);
        $('#br_videodiv2').stop().addClass('br_Bigvideobox').css({ "height": "100%", "width": "100%" });
        $('.br_challenge').stop().fadeIn();

        if (($(window).width() < 499)) {
            $('.br_pinkbox').fadeIn(1000).animate({ width: "250px", height: "365px" }, 1000);

        }
        else {
            var topwdt = ($(window).height() - 362) / 2;
            var lftwdt = ($(window).width() - 332) / 2;
            $(".challengeUsSection").stop().css("top", topwdt);
            //alert(lftwdt +" "+ topwdt)
            $('.br_pinkbox').fadeIn(1000).animate({ width: "318px", height: "318px" }, 1000).children("div.br_txt").fadeIn(300);
        }
        setTimeout(function () { $(".br_scrollDownDiv").addClass(" whImg"); }, 800);
        $('#bgvid').stop().fadeOut(800);
        var vid = document.getElementById("bgvid");
        vid.autoplay = false;
        vid.pause();

        $('#bgvid2').stop().fadeIn(800);
        var vid2 = document.getElementById("bgvid2");
        vid2.autoplay = true;
        vid2.play();
        setTimeout(function () { $(".br_txt>p").stop().removeAttr("class").removeAttr("style") }, 2000);
        setTimeout(function () { $(".br_scrollDownDiv").stop().attr("data-count", "1") }, 2500);
        return false;
    }

    /*=======================================
    Reverse Function For First to Initial 
    =======================================*/

    function reverseFromFirstToInitial() {
        $('.br_connect').stop().fadeIn(500);
        $('.firstClickDiv').stop().fadeIn(0)

        $('#logo_txt, #br_videodiv').removeClass("scl2");


        var fshgt = ($(window).height() - 362) / 2;

        $('#logo_txt em.bgV').stop().removeClass("bgVp");
        $('#br_videodiv').stop().css({ "background-color": "", "width": "", "height": "" })
        $('#br_videodiv').animate({ marginTop: ($(window).height() - $("#br_videodiv").attr("data-hi")) / 2 }, 1000);
        $('#logo_txt').animate({ marginTop: ($(window).height() - $("#logo_txt").attr("data-hi")) / 2 }, 1000);
        setTimeout(function () {
            $('#logo_txt, #br_videodiv').css("margin-top", "auto");
        }, 1100);
        setTimeout(function () {
            $('#logo_txt em').stop().css("color", "");
        }, 400);
        $('#br_videodiv2').stop().removeAttr("style");
        $('.br_challenge, .br_txt').fadeOut();

        if (($(window).width() < 499)) {
            return false;
        }
        else {
            var topwdt = ($(window).height() - 362) / 2;
            var lftwdt = ($(window).width() - 332) / 2;
            $(".challengeUsSection").stop().css("top", topwdt);
            //alert(lftwdt +" "+ topwdt)
            $('.br_pinkbox').stop().fadeOut(1000).animate({ width: "0", height: "0" }, 1000);
            setTimeout(function () { $('.br_pinkbox').stop().removeAttr("style") }, 1100);
        }
        setTimeout(function () {
            $(".br_scrollDownDiv").stop().removeClass(" whImg");
            $('#br_videodiv2').stop().removeAttr("style");
        }, 810);

        $('#bgvid').fadeIn(100);
        var vid = document.getElementById("bgvid");
        vid.autoplay = true;
        vid.play();

        $('#bgvid2').fadeOut(800);
        var vid2 = document.getElementById("bgvid2");
        vid2.autoplay = false;
        vid2.pause();
        $(".br_scrollDownDiv").stop().attr("data-count", "a");
        setTimeout(function () { $(".br_scrollDownDiv").stop().attr("data-count", "0") }, 2500);
        return false;
    }


    //---------XXX---------\\

    //---------Start OF Second Section Animation and it's inner Function---------\\
    $(document).ready(function () {
        
        $(".sliderItemNav a").click(function () {
            var data_sC = $(this).attr("data-sC");
            //alert(data_sC);
            if (data_sC == 1) {
                $(".bigPinkDiv").css("background-color", "#f31858");
            } else if (data_sC == 2) {
                $(".bigPinkDiv").css("background-color", "#867994");
            } else if (data_sC == 3) {
                $(".bigPinkDiv").css("background-color", "#03d9ae");
            } else {
                $(".bigPinkDiv").css("background-color", "#cdc3ae");
            }
            
            $("div[data-sC=" + data_sC + "]").css({ "left": "0" });
            $(".sliderItemNav").css("pointer-events", "none");
            $(".sliderItemNav a").css("pointer-events", "");
            $("div[data-sC].current").css({ "left": "-100%", "right": "100%" });
            setTimeout(function () {
                $("div[data-sC].current").css({ "display": "none", "left": "100%", "right": "0" });
                $("a[data-sC="+data_sC+"]").css("pointer-events", "none");
            }, 500);
            setTimeout(function () {
                $("div[data-sC].current").removeAttr("style").removeClass("current");
                $("div[data-sC=" + data_sC + "]").addClass("current");
                $(".sliderItemNav").css("pointer-events", "");
                
            }, 1100);
            
        });
    });

    /*---------------*/
    /*---------------*/    

    function section_two() {
        $(".br_scrollDownDiv").stop().attr("data-count", "a");
        $(".sliderItemNav a:first-child").css("pointer-events", "none");
        $(".br_pinkbox").animate({ width: "100%", height: "100%" }, 800).children(".br_txt").hide();
        
        setTimeout(function () {

            $(".bigPinkDiv").css("display", "block");
            $(".shadowImg").removeClass("hide");
            setTimeout(function () { $(".br_pinkbox").css({ "width": "318px", "height": "318px" }).children(".br_txt").show(0) }, 100);
        }, 800);
        setTimeout(function () { $(".sliderContentDiv > div[data-sC=\"1\"]").addClass("current"); }, 1800);
        setTimeout(function () { $(".br_scrollDownDiv").stop().attr("data-count", "2") }, 2500);
    }

    /*---------------*/
    /*---------------*/
    /*=======================================
    Reverse Function For Second to First
    =======================================*/

    function reverseFromSecondToFirst() {
        $(".br_scrollDownDiv").stop().attr("data-count", "a");
        $(".sliderItemNav a").css("pointer-events", "");
        $(".shadowImg").addClass("hide");
        $(".bigPinkDiv").animate({ width: "318px", height: "318px" }, 800).children("*").css({ "opacity": "0" });
        setTimeout(function () {
            $(".bigPinkDiv").fadeOut(200);
            setTimeout(function () { $(".bigPinkDiv").removeAttr("style").children("*").css({ "opacity": "" }); $(".sliderContentDiv > div[data-sC]").removeClass("current").removeAttr("style"); }, 250);
        }, 800);
        setTimeout(function () { $(".br_scrollDownDiv").stop().attr("data-count", "1") }, 2500);
    }

    //---------End OF Second Section Animation and it's Reverse---------\\

    /*---xxx---*/

    //---------Start OF Third Section Animation and it's inner Function---------\\
    function section_three() {
        $(".br_scrollDownDiv").stop().attr("data-count", "a");
        $(".bigPinkDiv").animate({ marginTop: "-100%" }, 2000);
        $(".sec3").animate({ top: 0 }, 800);
        $(".brdCrmb>span.contactBrd").css("display","none");
        setTimeout(function () { $(".viewProjectButton").fadeIn(200); $(".sec3 h1,.sec3 p,a.viewProjectButton").removeClass("marTp Opa0"); }, 400);
        setTimeout(function () { $(".brdCrmb.upper").fadeIn(400);}, 800);
        setTimeout(function () { $(".bigPinkDiv").css({ "margin-top": "auto" }); $(".br_scrollDownDiv").stop().attr("data-count", "3") }, 2500);
    }

    /*---------------*/
    /*---------------*/
    /*=======================================
    Reverse Function For third to Second
    =======================================*/

    function reverseFromThirdToSecond() {
        $(".br_scrollDownDiv").stop().attr("data-count", "a");
        $(".sec3").animate({ top: "100%" }, 800);
        setTimeout(function () { $(".viewProjectButton, .brdCrmb.upper").fadeOut(0); $(".viewProjectButton, .sec3 h1").addClass("marTp"); $(".sec3 p, .sec3 h1").addClass("Opa0"); }, 0);
        setTimeout(function () { $(".br_scrollDownDiv").stop().attr("data-count", "2") }, 2500);
    }
    //---------End OF Third Section Animation and it's Reverse---------\\

    /*---xxx---*/

    //---------Start OF Fourth Section Animation and it's inner Function---------\\
    function section_four() {
        $(".br_scrollDownDiv").stop().attr("data-count", "a");
        $(".sec3").animate({ top: "-100%" }, 2000);
        $(".sec4").animate({ top: 0 }, 800);
        setTimeout(function () { $("a.viewProjectButton").addClass("scl3 trans5") }, 800);
        setTimeout(function () { $("a.viewProjectButton").removeClass("scl3") }, 1000);
        setTimeout(function () { $(".sec4 h1,.sec4 p,a.viewProjectButton").removeClass("marTp Opa0"); }, 400);
        setTimeout(function () { $(".sec3").css({ "top": "0" }); $(".br_scrollDownDiv").stop().attr("data-count", "4") }, 2500);
    }

    /*---------------*/
    /*---------------*/
    /*=======================================
    Reverse Function For Fourth to Third
    =======================================*/

    function reverseFromForthToThird() {
        $(".br_scrollDownDiv").stop().attr("data-count", "a");
        setTimeout(function () { $("a.viewProjectButton").removeClass("trans5") }, 0);
        $(".sec4").animate({ top: "100%" }, 800);
        setTimeout(function () { $(".br_scrollDownDiv").stop().attr("data-count", "3") }, 2500);
    }
    //---------End OF Fourth Section Animation and it's Reverse---------\\

    /*---xxx---*/

    //---------Start OF Fifth Section Animation and it's inner Function---------\\
    function section_five() {
        $(".br_scrollDownDiv").stop().attr("data-count", "a");
        $(".sec4").animate({ top: "-100%" }, 2000);
        $(".sec5").animate({ top: 0 }, 800);
        setTimeout(function () { $("a.viewProjectButton").addClass("scl3") }, 800);
        setTimeout(function () { $("a.viewProjectButton").removeClass("scl3") }, 1000);
        setTimeout(function () { $(".sec5 h1,.sec5 p,a.viewProjectButton").removeClass("marTp Opa0"); }, 400);
        setTimeout(function () { $(".sec4").css({ "top": "0" }); $(".br_scrollDownDiv").stop().attr("data-count", "5") }, 2500);
    }

    /*---------------*/
    /*---------------*/
    /*=======================================
    Reverse Function For Fifth to Fourth
    =======================================*/

    function reverseFromFifthToForth() {
        $(".br_scrollDownDiv").stop().attr("data-count", "a");
        $(".sec5").animate({ top: "100%" }, 800);
        setTimeout(function () { $(".br_scrollDownDiv").stop().attr("data-count", "4") }, 2500);
    }
    //---------End OF Fifth Section Animation and it's Reverse---------\\


    /*---xxx---*/

    //---------Start OF Sixth Section Animation and it's inner Function---------\\
    function section_six() {
        $(".br_scrollDownDiv").stop().attr("data-count", "a");
        $(".sec5").animate({ top: "-100%" }, 2000);
        $(".sec6").animate({ top: 0 }, 800);
        setTimeout(function () { $("a.viewProjectButton").addClass("scl3") }, 800);
        setTimeout(function () { $("a.viewProjectButton").removeClass("scl3") }, 1000);
        setTimeout(function () { $(".sec6 h1,.sec6 p,a.viewProjectButton").removeClass("marTp Opa0"); }, 400);
        setTimeout(function () { $(".sec5").css({ "top": "0" }); $(".br_scrollDownDiv").stop().attr("data-count", "6") }, 2500);
    }

    /*---------------*/
    /*---------------*/
    /*=======================================
    Reverse Function For Sixth to Fifth
    =======================================*/

    function reverseFromSixthToFifth() {
        $(".br_scrollDownDiv").stop().attr("data-count", "a");
        $(".sec6").animate({ top: "100%" }, 800);
        setTimeout(function () { $(".br_scrollDownDiv").stop().attr("data-count", "5") }, 2500);
    }
    //---------End OF Sixth Section Animation and it's Reverse---------\\


    /*---xxx---*/

    //---------Start OF Seventh Section Animation and it's inner Function---------\\
    /*
    function section_seven() {
        $(".br_scrollDownDiv").stop().attr("data-count", "a");
        $(".sec6").animate({ top: "-100%" }, 2000);
        $(".sec7").animate({ top: 0 }, 800);
        setTimeout(function () { $("a.viewProjectButton").addClass("scl3") }, 800);
        setTimeout(function () { $("a.viewProjectButton").removeClass("scl3") }, 900);
        setTimeout(function () { $(".sec7 h1,.sec7 p,a.viewProjectButton").removeClass("marTp Opa0"); }, 400);
        setTimeout(function () { $(".sec7").css({ "top": "0" }); $(".br_scrollDownDiv").stop().attr("data-count", "7") }, 2500);
    }
    */
    /*---------------*/
    /*---------------*/
    /*=======================================
    Reverse Function For Sixth to Sixth
    =======================================*/
    /*
    function reverseFromSeventhToFifth() {
        $(".br_scrollDownDiv").stop().attr("data-count", "a");
        $(".sec7").animate({ top: "100%" }, 800);
        setTimeout(function () { $(".br_scrollDownDiv").stop().attr("data-count", "6") }, 2500);
    }
    */
    //---------End OF Seventh Section Animation and it's Reverse---------\\

    /*---xxx---*/

    //---------Start OF Contact Section Animation and it's inner Function---------\\

    function contactSection() {
        $(".brdCrmb>span.workBrd").fadeOut();
        $(".br_scrollDownDiv").stop().attr("data-count", "a").fadeOut(300);
        $(".sec6").animate({ top: "-100%" }, 3000);
        $('.br_footer_nav').stop().fadeIn(100).animate({ top: "0" }, 1200);
        setTimeout(function () { $(".brdCrmb>span.contactBrd").fadeIn(); }, 1300);
        setTimeout(function () { $(".sec6").stop().css({ "top": "0" }); $(".br_scrollDownDiv").stop().attr("data-count", "7"); }, 2500);
        return false;
    }
    /*---------------*/
    /*---------------*/
    /*=======================================
    Reverse Function For Contact to third Section
    =======================================*/

    function reverseFromContactToSixth() {
        $(".br_scrollDownDiv").stop().attr("data-count", "a").fadeOut(300);
        $(".brdCrmb>span.contactBrd").fadeOut();
        $(".sec6").animate({ top: "0" }, 800);
        $('.br_footer_nav').stop().fadeIn(100).animate({ top: "100%" }, 1200);
        setTimeout(function () { $(".brdCrmb>span.workBrd").fadeIn(); }, 1300);
        setTimeout(function () { $(".br_scrollDownDiv").stop().attr("data-count", "6"); }, 2500);
        return false;
    }

    //---------XXX---------\\



    /*==========================
    Scroll Click Funchtion Start
    ==========================*/
    //first ScrollClick Function
    $('.br_scrollDownDiv').click(function () {
        if ($(this).attr("data-count") == 0) {
            section_one();
            return false;
        } else if ($(this).attr("data-count") == 1) {
            section_two();
            return false
        } else if ($(this).attr("data-count") == 2) {
            section_three();
            return false
        } else if ($(this).attr("data-count") == 3) {
            section_four();
            return false
        } else if ($(this).attr("data-count") == 4) {
            section_five();
            return false
        } else if ($(this).attr("data-count") == 5) {
            section_six();
            return false
        } else if ($(this).attr("data-count") == 6) {
            contactSection();
            return false
        } else {
            return false;
        }
    });

    /*========================
    Scroll Click Funchtion End
    ========================*/


    /*========================
    Arrow Keys Funchtion Start
    ========================*/

    $(document).keydown(function (e) {
        var keyCode = e.keyCode || e.which;
        var arrow = { up: 38, down: 40 };
        // alert($(".br_scrollDownDiv").attr("data-count"));
        switch (keyCode) {
            case arrow.up:
                //return false;
                // console.log(posn);reverseFromFirstToInitial()
                if ($(".br_scrollDownDiv").attr("data-count") == 1) {
                    reverseFromFirstToInitial();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 2) {
                    reverseFromSecondToFirst();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 3) {
                    reverseFromThirdToSecond();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 4) {
                    reverseFromForthToThird();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 5) {
                    reverseFromFifthToForth();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 6) {
                    reverseFromSixthToFifth();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 7) {
                    reverseFromContactToSixth();
                    return false;
                } else {
                    return false;
                }
                break;
                /*===================
                CASE UP KEY FINISHED
                ===================*/
            case arrow.down:
                //console.log(posn);
                if ($(".br_scrollDownDiv").attr("data-count") == 0) {
                    section_one();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 1) {
                    section_two();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 2) {
                    section_three();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 3) {
                    section_four();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 4) {
                    section_five();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 5) {
                    section_six();
                    return false
                } else if ($(".br_scrollDownDiv").attr("data-count") == 6) {
                    contactSection();
                    return false
                } else {
                    return false;
                }
                break;
                //default:        
                //  return false;        
        }
    });

    /*======================
    Arrow Keys Funchtion End
    ======================*/


    /*========================
    MouseWheel Function Start
    ========================*/

    //======Firefox======\\
    $(window).bind('DOMMouseScroll', function (e) {
        if (e.originalEvent.detail > 0) {
            //scroll down
            if ($(".br_scrollDownDiv").attr("data-count") == 0) {
                section_one();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 1) {
                section_two();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 2) {
                section_three();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 3) {
                section_four();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 4) {
                section_five();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 5) {
                section_six();
                return false
            } else if ($(".br_scrollDownDiv").attr("data-count") == 6) {
                contactSection();
                return false
            } else {
                return false;
            }
        } else {
            //scroll Up
            if ($(".br_scrollDownDiv").attr("data-count") == 1) {
                reverseFromFirstToInitial();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 2) {
                reverseFromSecondToFirst();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 3) {
                reverseFromThirdToSecond();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 4) {
                reverseFromForthToThird();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 5) {
                reverseFromFifthToForth();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 6) {
                reverseFromSixthToFifth();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 7) {
                reverseFromContactToSixth();
                return false;
            } else {
                return false;
            }
        }

        //prevent page fom scrolling
        return false;
    });
    //------------xxx------------\\

    //======IE, Opera, Safari======\\
    $(window).bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta < 0) {
            //scroll down
            if ($(".br_scrollDownDiv").attr("data-count") == 0) {
                section_one();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 1) {
                section_two();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 2) {
                section_three();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 3) {
                section_four();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 4) {
                section_five();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 5) {
                section_six();
                return false
            } else if ($(".br_scrollDownDiv").attr("data-count") == 6) {
                contactSection();
                return false
            } else {
                return false;
            }
        } else {
            //scroll Up
            if ($(".br_scrollDownDiv").attr("data-count") == 1) {
                reverseFromFirstToInitial();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 2) {
                reverseFromSecondToFirst();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 3) {
                reverseFromThirdToSecond();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 4) {
                reverseFromForthToThird();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 5) {
                reverseFromFifthToForth();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 6) {
                reverseFromSixthToFifth();
                return false;
            } else if ($(".br_scrollDownDiv").attr("data-count") == 7) {
                reverseFromContactToSixth();
                return false;
            } else {
                return false;
            }
        }

        //prevent page fom scrolling
        return false;
    });
    //------------xxx------------\\

    /*========================
    MouseWheel Function End
    ========================*/


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

    /*=====================================*/

    //

    $(function () {
        //Keep track of how many swipes
        var count = 0;
        //Enable swiping...
        $(".first_section").swipe({
            //Generic swipe handler for all directions
            swipeUp: function (event, direction, distance, duration, fingerCount) {
                var txt = "You swiped " + direction + " " + ++count + " times ";
                //alert(txt);
                if ($(".br_scrollDownDiv").attr("data-count") == 0) {
                    section_one();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 1) {
                    section_two()();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 2) {
                    section_three();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 3) {
                    section_four();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 4) {
                    section_five();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 5) {
                    section_six();
                    return false
                } else if ($(".br_scrollDownDiv").attr("data-count") == 6) {
                    contactSection();
                    return false
                } else {
                    return false;
                }

            },
            swipeDown: function (event, direction, distance, duration, fingerCount) {
                if ($(".br_scrollDownDiv").attr("data-count") == 1) {
                    reverseFromFirstToInitial();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 2) {
                    reverseFromSecondToFirst();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 3) {
                    reverseFromThirdToSecond();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 4) {
                    reverseFromForthToThird();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 5) {
                    reverseFromFifthToForth();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 6) {
                    reverseFromSixthToFifth();
                    return false;
                } else if ($(".br_scrollDownDiv").attr("data-count") == 7) {
                    reverseFromContactToSixth();
                    return false;
                } else {
                    return false;
                }
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold: 0
        });

    });

}