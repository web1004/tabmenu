$(document).ready(function(){

  $(".tab li").click(function(){

    let num = $(this).index();
    let move = 70*num; //세로높이 70px씩 증가됨

    $(".tab-header .tab-highlight").animate({top: move});
    $(this).siblings().removeClass("active"); 
    $(this).addClass("active"); 

    let result = $(this).attr("data-alt");
    $(".tab-contents div").removeClass("active");
    $("#" + result).addClass("active");

  });

});