$(document).ready(function(){



  $('#summary').animate({
    opacity: '0.8',
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


//scroll to top effect

  $("#top").click(function(event){
    $.scrollTo(0, 1000);
  });

  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop()
    if (scrollTop > 150) {
      $('#top').animate({
        opacity: '0.75',
      }, 700);
    } else if (scrollTop < 150){
      $('#top').animate({
        opacity: '0.0',
      }, 200);
    }
  });

//slideShow

  var slides = $('.slideShow img');
  console.log('slide ', slides);
  var currentSlideIndex = 0;
  var slideCount = slides.length; //shows the length of the array of imgaes
  slides.eq(currentSlideIndex).show();

  //hide the current one and show the next One
   //leaving out the var keyword to test it out in the console

  doSlides = function(direction){
    //hide the cirrent slide
    slides.eq(currentSlideIndex).fadeOut(function(){
      if (direction === 'next') {
        if (currentSlideIndex === slideCount - 1) {
          currentSlideIndex = 0;
          console.log('found the end, start back at 0')
        } else {
          currentSlideIndex++;
        }

      } else if (direction === "prev") {
        if (currentSlideIndex == 0) {
          currentSlideIndex = slideCount -1;
        } else {
        currentSlideIndex--;
        }
      console.log('currentSlideIndex: ', currentSlideIndex);
      }
      slides.eq(currentSlideIndex).fadeIn();
    })
  };

  $('#next').click(function() {
    doSlides('next');
  });

  $('#prev').click(function() {
    doSlides('prev');
  });




  // making the gallery page select a photo group and display it



  var displayGallery = function(whichGallery){
    //hide all no matter what
    $('#philly, #korea, #south, #tech, #crazy, #creative, #bed, #world, #mom').hide();
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



  $("#bottom").click(function(event){
    $.scrollTo(20000, 1000)
  });


//lightbulb going on and off a few times
  $('i.fa.fa-lightbulb-o').animate({
    opacity: '0',
  }, 300).animate({
    opacity: '1',
  }, 300).animate({
    opacity: '0',
  }, 300).animate({
    opacity: '1'
  }, 300).animate({
    opacity: '0',
  }, 300).animate({
    opacity: '1'
  }, 1000);


  $(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".floatblock, .twainblock, .Thankblock").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();

        if ($(window).innerWidth() < 600) {
          if (objectBottom < windowBottom + 350) { //object comes into view (scrolling down)
            if ($(this).css("opacity")==0) {$(this).fadeTo(700,1);}
          } else { //object goes out of view (scrolling up)
            if ($(this).css("opacity")==1) {$(this).fadeTo(700,0);}
          }
        }else{
          if (objectBottom - 100 < windowBottom) { //object comes into view (scrolling down)
            if ($(this).css("opacity")==0) {$(this).fadeTo(800,1);}
          } else { //object goes out of view (scrolling up)
            if ($(this).css("opacity")==1) {$(this).fadeTo(800,0);}
          }
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });


// mapbox functionality

//list of places
  const locationList = {
    'CollegePark': {
      'headline': "It all started in College Park, Maryland.",
      'story': "I grew up there, in the suburbs of DC!",
      bearing: -0.01,
      center: [-76.931253, 38.976956],
      zoom: 12.51,
      speed: 0.8,
      pitch: 0
    },
    'Pretoria': {
      'headline': "I was so lucky to live in Pretoria, South Africa as a teenager.",
      'story': "In high school, I lived for a year with a host family in South Africa as an exchange student.",
      bearing: -0.01,
      center: [28.218597, -25.740631],
      zoom: 11.74,
      speed: 0.1,
      pitch: 0
    },
    'Dunedin': {
      'headline': "University in New Zealand",
      'story': "I decided to travel after high school. I wanted to go to college too, though. So I just did both at the same time and ended up in Dunedin, New Zealand, and I studied philosophy.",
      bearing: -0.01,
      center: [170.517465, -45.883668],
      zoom: 11.47,
      speed: 0.8,
      pitch: 0
    },
    'DC': {
      'headline': "Back in DC",
      'story': "I wanted to try to use my advanced degree in philosophy to change the world somehow, so I came back to the DC area, but couldn't land a job doing more than administrative work.",
      bearing: -0.01,
      center: [-77.015468, 38.894736],
      zoom: 11.40,
      speed: 0.8,
      pitch: 0
    },
    'Fayetteville': {
      'headline': "Teaching in NC",
      'story': "To really make a difference, I decided to become a teacher and moved to North Carolina where I intended to pursue an alternative licensure as a public school teacher. I taught 8th grade English Language Arts for a year, and lived in Harnett County next to a chicken farm.",
      bearing: -0.01,
      center: [-79.014605, 35.186964],
      zoom: 8.67,
      speed: 0.8,
      pitch: 0
    },
    'South Korea': {
      'story': "Teaching in Korea",
      'story': "Discouraged by all the barriers facing teachers in this country, and yearning to travel once again, I picked up and moved to South Korea for a year to be a public school teacher there. It turned into five years! I lived on a beautiful island - strangely, my first home there was also next to a chicken farm.",
      bearing: -0.01,
      center: [126.564540, 33.392854],
      zoom: 8.50,
      speed: 0.8,
      pitch: 0
    },
    'Philly': {
      'headline': "Philly",
      'story': "After getting married and having a baby in Korea, I wanted to move back to my country to try to start a new career. I fell in love with tech and landed a job as a campus/community manager at a coding bootcamp in Philly. I started coding a lot and knew it was my future.",
      bearing: -0.01,
      center: [-75.157802, 39.950999],
      zoom: 11.50,
      speed: 0.8,
      pitch: 0
    },
    'DC Again': {
      'story': "DC Again!",
      'story': "To be closer to family, I moved in March 2018 back to DC to be near my roots and family. I worked at another coding bootcamp and coded furiously after work and on weekends. And that takes you to the present day!",
      bearing: -0.01,
      center: [-77.015468, 38.894736],
      zoom: 11.40,
      speed: 0.8,
      pitch: 0
    },
    'The End': {
      'headline': "That's the end!",
      'story': "Thanks to MapBox for making this possible. Use the nav menu to go back to the homepage",
      bearing: -0.01,
      center: [-77.015468, 38.894736],
      zoom: 11.40,
      speed: 0.8,
      pitch: 0
    }
  }

  //need to set up array of keys and array of values in the for loop to get each entry I need
  let locations = Object.keys(locationList)
  let results = Object.values(locationList)
  // I need to count the clicks and that gives me the information to display, clicks needs to be a varibale accessible outside the click event
  let clicks = 0
  //the second div starts out hidden
  $("#storycontent").hide();

  //iterating through the array on each click, incrementing the clicks after each one
  $('#mappage').click(function(event){
    for (let i = 0; i < locations.length; i++) {
      if (clicks == i) {
        // hide the note bar because that's ugly
        $('#note').hide()
        $('#mappage').text(results[i].headline)
        //show the content story box
        $('#storycontent').text(results[i].story).show()
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/jenem583/cjs0lsxnn02hs1fqhjnrvxlsd',
          bearing: results[i].bearing,
          center: results[i].center,
          zoom: results[i].zoom,
          speed: results[i].speed,
          pitch: results[i].pitch
        });
        var nav = new mapboxgl.NavigationControl();
          map.addControl(nav, 'bottom-right');
      }
    }
    clicks = clicks + 1
  })








        // counter += 1
      // const map = new mapboxgl.Map({
      //   container: 'map',
      //   style: 'mapbox://styles/jenem583/cjs0lsxnn02hs1fqhjnrvxlsd',
      //   bearing: locationList.CollegePark.bearing,
      //   center: locationList.CollegePark.center,
      //   zoom: locationList.CollegePark.zoom,
      //   speed: locationList.CollegePark.speed,
      //   pitch: locationList.CollegePark.pitch
      // });
      // var nav = new mapboxgl.NavigationControl();
      //   map.addControl(nav, 'bottom-right');
      // }




});
