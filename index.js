$.getJSON('https://www.mocky.io/v2/58fda6ce0f0000c40908b8c8', function(data) {
    console.log(data);

    var title0 = data.news[0].title;
    var title1 = data.news[1].title;
    var title2 = data.news[2].title;
    var title3 = data.news[3].title;
    var title4 = data.news[4].title;
    var title5 = data.news[5].title;
    var title6 = data.news[6].title;
    var title7 = data.news[7].title;
    var title8 = data.news[8].title;
    var title9 = data.news[9].title;
    var title10 = data.news[10].title;
    var title11 = data.news[11].title;
    var title12 = data.news[12].title;
    var title13 = data.news[13].title;
    var title14 = data.news[14].title;

    var detail0 = data.news[0].details;
    var detail1 = data.news[1].details;
    var detail2 = data.news[2].details;
    var detail3 = data.news[3].details;
    var detail4 = data.news[4].details;
    var detail5 = data.news[5].details;
    var detail6 = data.news[6].details;
    var detail7 = data.news[7].details;
    var detail8 = data.news[8].details;
    var detail9 = data.news[9].details;
    var detail10 = data.news[10].details;
    var detail11 = data.news[11].details;
    var detail12 = data.news[12].details;
    var detail13 = data.news[13].details;
    var detail14 = data.news[14].details;

    $(".title0").append(title0);
    $(".detail0").append(detail0);

    $(".title1").append(title1);
    $(".detail1").append(detail1);

    $(".title2").append(title2);
    $(".detail2").append(detail2);

    $(".title3").append(title3);
    $(".detail3").append(detail3);

    $(".title4").append(title4);
    $(".detail4").append(detail4);

    $(".title5").append(title5);
    $(".detail5").append(detail5);

    $(".title6").append(title6);
    $(".detail6").append(detail6);

    $(".title7").append(title7);
    $(".detail7").append(detail7);

    $(".title8").append(title8);
    $(".detail8").append(detail8);

    $(".title9").append(title9);
    $(".detail9").append(detail9);

    $(".title10").append(title10);
    $(".detail10").append(detail10);

    $(".title11").append(title11);
    $(".detail11").append(detail11);

    $(".title12").append(title12);
    $(".detail12").append(detail12);

    $(".title13").append(title13);
    $(".detail13").append(detail13);

    $(".title14").append(title14);
    $(".detail14").append(detail14);
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 15000);
}
