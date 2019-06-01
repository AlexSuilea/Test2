//Parametrii
var number_of_news = 15;

function getData() {
    $.getJSON("https://www.mocky.io/v2/58fda6ce0f0000c40908b8c8", function (data) {
        $.each(data, function (i, item) {
               console.log(data);

                var index;
                var title = [];
                var detail = [];

                for (index = 0; index < number_of_news; index++)
                {
                    title[index] = data.news[index].title;
                    detail[index] = data.news[index].details;

                    // Sterg datele precendente din title si detail
                    $(".title"+index).empty();
                    $(".detail"+index).empty();

                    $(".title"+index).append(title[index]);
                    $(".detail"+index).append(detail[index]);
                }
                 console.log(data);
          });
    });
}
setTimeout(getData, 180000);
getData();

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var timer=null;
function setTimer(){
  timer=setInterval(function(){
    plusSlides(1);
  },15000);
}
setTimer();
