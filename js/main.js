$(document).ready(function(){


  var AnimateName = function(){
    $('#myname').animate({
      opacity: '1.0',
    }, 1500)
  };

  $(AnimateName).show()

  var AnimateSummary = function(){
    $('#summary').animate({
      opacity: '1.0',
    }, 3000)
  };

  $(AnimateSummary).show()


/*  $(window).scroll(function(){
    if ($(this).scrollTop()>100){
      $('.mywhy').fadeIn(3500);
      }
  }); */

  $(window).scroll(function(){
    if ($(this).scrollTop()>100){
      $('#mywhycontent').fadeIn(4000);
      }
  });

  $(window).scroll(function(){
    if ($(this).scrollTop()>100){
      $('.floatblock').fadeIn(4000);
    }
  });


});
