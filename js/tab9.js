$(document).ready(function(){

  /* 탭메뉴 클릭_____________________________*/
  $(".tab li").click(function(){

    $(this).addClass("active");  
    $(this).siblings().removeClass("active");
    
    let result = $(this).attr("data-alt");
    $(".panel li").removeClass("active");
    $("#"+result).addClass("active");

  });

  //해당 탭메뉴를 클릭할때 해당 첫 썸네일을 클릭시킴....(마지막에 누른채로 보이지 않고 항상 처음처럼 보이게 함)
  $(".tab li:first-child").click(function(){  
    $(".gallery1 .thumbs li:first").click();
  });
  $(".tab li:nth-child(2)").click(function(){  
    $(".gallery2 .thumbs li:first").click();
  });
  $(".tab li:last-child").click(function(){  
    $(".gallery3 .thumbs li:first").click();
  });


  /*탭메뉴별 이미지갤러리_____________________________*/

  //tab1-gallery
  let goldidxA=0; 
  let gidxA=0;  

  function galleryImgA(gidxA){ 
    if(goldidxA!=gidxA){ 
      $(".gallery1 .thumbs li").eq(goldidxA).css({"opacity":0.3}); 
      $(".gallery1 .thumbs li").eq(gidxA).css({"opacity":1}); 
      $(".gallery1 .largeImg li").eq(goldidxA).stop().fadeOut(300);  
      $(".gallery1 .largeImg li").eq(gidxA).stop().fadeIn(300); 
    };
    goldidxA=gidxA;
  };

  $(".gallery1 .thumbs li").click(function(){
    gidxA=$(this).index();
    galleryImgA(gidxA)
  });

  //tab2-gallery
  let goldidxB=0; 
  let gidxB=0;  

  function galleryImgB(gidxB){ 
    if(goldidxB!=gidxB){ 
      $(".gallery2 .thumbs li").eq(goldidxB).css({"opacity":0.3}); 
      $(".gallery2 .thumbs li").eq(gidxB).css({"opacity":1}); 
      $(".gallery2 .largeImg li").eq(goldidxB).stop().fadeOut(300);  
      $(".gallery2 .largeImg li").eq(gidxB).stop().fadeIn(300); 
    };
    goldidxB=gidxB;
  };

  $(".gallery2 .thumbs li").click(function(){
    gidxB=$(this).index();
    galleryImgB(gidxB)
  });

  //tab3-gallery
  let goldidxC=0; 
  let gidxC=0;  

  function galleryImgC(gidxC){ 
    if(goldidxC!=gidxC){ 
      $(".gallery3 .thumbs li").eq(goldidxC).css({"opacity":0.3}); 
      $(".gallery3 .thumbs li").eq(gidxC).css({"opacity":1}); 
      $(".gallery3 .largeImg li").eq(goldidxC).stop().fadeOut(300);  
      $(".gallery3 .largeImg li").eq(gidxC).stop().fadeIn(300); 
    };
    goldidxC=gidxC;
  };

  $(".gallery3 .thumbs li").click(function(){
    gidxC=$(this).index();
    galleryImgC(gidxC)
  });

});