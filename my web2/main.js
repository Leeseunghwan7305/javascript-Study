$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $(".nav-title").addClass("nav-title-show");
  } else {
    $(".nav-title").removeClass("nav-title-show");
  }
});
let 지금보이는사진 = 1;
$(".pre-btn").click(function () {
  if (지금보이는사진 > 1) {
    $(".img-boxs").css(
      "transform",
      "translateX(-" + (지금보이는사진 - 2) + "00vw"
    );
    지금보이는사진 -= 1;
  }
});
$(".before-btn").click(function () {
  if (지금보이는사진 < 3) {
    $(".img-boxs").css("transform", "translateX(-" + 지금보이는사진 + "00vw)");
    지금보이는사진 += 1;
  }
});
setInterval(function () {
  if (지금보이는사진 < 3) {
    $(".img-boxs").css("transform", "translateX(-" + 지금보이는사진 + "00vw");
    지금보이는사진 += 1;
  } else if (지금보이는사진 == 3) {
    지금보이는사진 = 0;
  }
}, 2000);
$(window).on("scroll", function () {
  if ($(window).scrollTop() == 100) {
    $(".tap").fadeIn();
  }
});
$(".btn1").click(function () {
  let dog = "강아지 강아지";
  $(".dogdog").append(dog);
});
$(".btn2").click(function () {
  let cat = "야옹이 야옹이";
  $(".dogdog").append(cat);
});
$(".btn3").click(function () {
  let ee = "땅땅이 땅땅이";
  $(".dogdog").append(ee);
});
