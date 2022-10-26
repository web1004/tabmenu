$(document).ready(function(){

  $(".tab li").click(function() {

    num = $(this).index();
    move = +160 * num; //가로폭 160px씩 증가됨

    $(".tab-header .tab-highlight").animate({left: move});
    $(this).siblings().removeClass("active"); 
    $(this).addClass("active"); 

    let result = $(this).attr("data-alt");
    $(".tab-contents div").removeClass("active");
    $("#" + result).addClass("active");

  });

});
