$( document ).ready(function() {
//--------------------------手機選單--------------------------//
  $(".menushow").click(function(){
    $("#header .container ul").fadeToggle("slow");
  })  //打開選單
    //--------------------------輪播--------------------------//
    $('.product-card').slick({
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 1500,
        centerPadding: '40px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
   
});
//--------------------------點擊移動指定區塊--------------------------//
$(".scrollTop").click(function(e){
  e.preventDefault();
  var target = $(this).attr('href');
  var targetPos = $(target).offset().top;
  $("html,body").animate({scrollTop: targetPos}, 700);
});
