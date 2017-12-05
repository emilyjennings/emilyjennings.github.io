$(document).ready(function(){

  $('#summary').animate({
    opacity: '1.0',
  }, 4000);



  $(".nav").hide();
  $("#hamburger").click(function(){
    $(".nav").slideToggle("slow", function(){
      $("#hamburger").hide();
      $(".nav").show();
      $("#cross").show();
    });
  });


  $("#cross").click(function(event){
    event.preventDefault();
    //click event that takes information from the event and prevents refresh
    if ($("#cross").is(":visible")){
      $(".nav").slideToggle("slow", function(){
        $("#cross").hide();
        $("#hamburger").show();
      });
    }
  });



var fadeIn = setInterval(function(){
      $('#e').fadeIn(1000, function(){
        $('#a').fadeIn(1000, function(){
          $('#g').fadeIn(1000, function(){
            $('#d').fadeIn(1000, function(){

            });
          });
        });
      });
    });




  




  $("#top").click(function(event){
    $.scrollTo(0, 1000)
  });




  // making the gallery page select a photo group and display it



  var displayGallery = function(whichGallery){
    //hide all no matter what
    $('#philly, #korea, #south').hide();
    //select a group of Photos to display and display it
    //$('#philly').show();
    $(whichGallery).show();
  };
/*
  $('#phillybutton').click(function(event){
    event.preventDefault();
    displayGallery();
  });
*/


  $('.nav-gallery a').on('click', function(event){
    event.preventDefault();
    //remove is active classes
    $('.nav-gallery a').removeClass('is-active');
    //add class of is-active
    $(this).addClass('is-active');
    // get the href attr of "this" using a jQuery selector
    var clicked = $(this).attr('href');
    console.log(clicked);
    displayGallery(clicked);
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
