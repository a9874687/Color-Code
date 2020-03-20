$( document ).ready(function() {
    //--------------------------輪播--------------------------//
    $('.product-card').slick({
        centerMode: true,
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
    //--------------------------滑入位移--------------------------//
    let img = $("#cookie-card .container ul li");
    console.log(img);
    console.log(img[0]);
    let boundingBox = img[0].getBoundingClientRect();
    console.log(boundingBox);
    let centerX = boundingBox.left + boundingBox.width / 2;
    let centerY = boundingBox.top + boundingBox.height / 2;
    $("#cookie-card .container ul").mousemove(function (e) {
        // console.log(e);
        let { pageX, pageY } = e;
        // console.log({ pageX, pageY });
        let [distanceX, distanceY] = [centerX - pageX, centerY - pageY];
        // console.log([distanceX, distanceY]);

        img.css({
            "transform": `rotateX(${distanceX / 20}deg) rotateY(${distanceY / 20}deg) translateZ(40px)`
        });
        $("#cookie-card .container ul li").css({
            "transform": `translateX(${distanceX / 20}px) translateY(${distanceY / 20}px)`
        });
        $("#cookie-card .container ul li").css({
            "transform": `translateX(${-distanceX / 20}px) translateY(${-distanceY / 20}px)`
        });
    });
});