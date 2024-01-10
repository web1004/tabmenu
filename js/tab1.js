$(document).ready(function(){

  $(".testimonial-pic img").click(function(){

    $(this).addClass("active");  //선택한 탭의 클래스 생성
    $(this).siblings().removeClass("active");  //선택한 탭외에 나머지 탭은 클래스 삭제
    $(".testimonial .content").removeClass("active");
    $("#"+$(this).attr("data-alt")).addClass("active");
    //#tab1== $("#"+$(this).attr("data-alt"))
  });

});

// siblings() : 앞의 선택자를 제외한 나머지 요소를 말함