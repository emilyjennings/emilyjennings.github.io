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




});
