$(document).ready(function(){

/*  var AnimateName = function(){
    $('#myname').animate({
      opacity: '1.0',
    }, 1500)
  };

  $(AnimateName).show() */

  var AnimateSummary = function(){
    $('#summary').animate({
      opacity: '1.0',
    }, 3000)
  };

  $(AnimateSummary).show()


  /*$(window).scroll(function(){
    if ($(this).scrollTop()>40){ */
      $('.mywhy li').animate({
        opacity: '1.0'
      }, 8000)
//    }
//  });

  $(window).scroll(function(){
    if ($(this).scrollTop()>80){
      $('#mywhycontent').fadeIn(4000);
      }
  });

  $(window).scroll(function(){
    if ($(this).scrollTop()>80){
      $('.floatblock').fadeIn(4000);
    }
  });

  /* var slideShow = 1
  showTitle(slideShow)

  function plusMessage(n) {
    showTitle(slideShow += n);
  }

  function showTitle(n) {
    var i;
    var x = document.getElementsByClassName("thanks");
    if (n > x.length) {slideShow = 1}
    if (n < 1) {slideShow = x.length};
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
  } */

/*
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("thanks");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
} */




});
