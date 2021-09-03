$(".bb").click(function () {
  $.ajax({
    url: `https://codingapple1.github.io/data.json `,
    type: `GET`,
  }).done(function (데이터) {
    $(".card-img-top").attr("src", 데이터.img);
    $(".card-title").html(데이터.brand);
    $(".card-text").html(데이터.model);
    $(".price").html(데이터.price);
    console.log(데이터);
  });
});
