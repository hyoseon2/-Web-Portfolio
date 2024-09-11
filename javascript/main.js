$(document).ready(function() {


    // AOS

    AOS.init({
        offset: 100, // 트리거 지점 조정 (기본값: 120)
    });


    // 맨 위 MENU CLICK 시 NAV OPEN / CLOSE

    $(".top button").on("click", function() {
        $("nav").css("top", 0);
    });

    $("nav button").on("click", function() {
        $("nav").css("top", "-100%");
    });


    // CLOSE BUTTON

    $("header nav .top button").addClass('open');


    // 각 MENU 클릭 시 스크롤 이동

    $(".bottom .menu1").click(function() {
        $("html, body").animate({scrollTop:0},450);
    });

    $(".bottom .menu2").click(function() {
        $("html, body").animate({scrollTop:750},450);
    });

    $(".bottom .menu3").click(function() {
        $("html, body").animate({scrollTop:1850},450);
    });

    $(".bottom .menu4").click(function() {
        $("html, body").animate({scrollTop:2400},450);
    });

    $(".bottom .menu5").click(function() {
        $("html, body").animate({scrollTop:3000},450);
    });


    // NAV 인 각 MENU 클릭 시 스크롤 이동

    $("nav .menu1").click(function() {
        $("nav").css("top", "-100%");
        $("html, body").animate({scrollTop:0},450);
    });

    $("nav .menu2").click(function() {
        $("nav").css("top", "-100%");
        $("html, body").animate({scrollTop:750},450);
    });

    $("nav .menu3").click(function() {
        $("nav").css("top", "-100%");
        $("html, body").animate({scrollTop:1850},450);
    });

    $("nav .menu4").click(function() {
        $("nav").css("top", "-100%");
        $("html, body").animate({scrollTop:2400},450);
    });

    $("nav .menu5").click(function() {
        $("nav").css("top", "-100%");
        $("html, body").animate({scrollTop:3000},450);
    });

    // SECTION5 GET_IN_TOUCH 각 아이콘 MOUSEOVER & MOUSELEAVE 시 아이콘 색상 변경

    $(".mail_img").on("mouseenter", function() {
        $(".mail_img").attr("src", "./images/icon_mail_2.png");
    });

      $(".mail_img").on("mouseleave", function() {
        $(".mail_img").attr("src", "./images/icon_mail.png");
    });

    $(".phone_img").on("mouseenter", function() {
        $(".phone_img").attr("src", "./images/icon_phone_2.png");
    });

      $(".phone_img").on("mouseleave", function() {
        $(".phone_img").attr("src", "./images/icon_phone.png");
    });

    $(".web_img").on("mouseenter", function() {
        $(".web_img").attr("src", "./images/icon_web_2.png");
    });

      $(".web_img").on("mouseleave", function() {
        $(".web_img").attr("src", "./images/icon_web.png");
    });
 
});
