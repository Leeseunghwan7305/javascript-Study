function pre() {}

$(".slide-2").click(function () {
  $(".slide-container").css("transform", "translateX(-100vw)");
});
$(".slide-3").click(function () {
  $(".slide-container").css("transform", "translateX(-200vw)");
});
$(".slide-1").click(function () {
  $(".slide-container").css("transform", "translateX(0)");
});
$(window).scroll(function () {
  if ($(window).scrollTop() > 50) {
    $(".nav-menu").addClass("nav-black");
  }
});
