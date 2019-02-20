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
      bearing: 9.60,
      center: [-85.113192, 39.385946],
      end: [-76.933839, 38.974368],
      zoom: 1.3,
      nextzoom: 19,
      speed: 0.8,
      pitch: 60.00,
      image: '../img/childhood2.jpg'
    },
    'Pretoria': {
      'headline': "I was so lucky to live in Pretoria, South Africa as a teenager.",
      'story': "In high school, I lived for a year with a host family in South Africa as an exchange student.",
      bearing: 9.60,
      center: [-76.933839, 38.974368],
      end: [28.218597, -25.740631],
      zoom: 19,
      nextzoom: 14,
      speed: 0.8,
      pitch: 60,
      image: '../img/sa.jpg'
    },
    'Dunedin': {
      'headline': "University in New Zealand",
      'story': "I decided to travel after high school. I wanted to go to college too, though. So I just did both at the same time and ended up in Dunedin, New Zealand, and I studied philosophy.",
      bearing: 33.83,
      center: [28.218597, -25.740631],
      end: [170.514093, -45.865646],
      zoom: 14,
      nextzoom: 14.5,
      speed: 0.9,
      pitch: 60,
      image: '../img/graduation2.jpg'
    },
    'DC': {
      'headline': "Back in DC",
      'story': "I wanted to try to use my advanced degree in philosophy to change the world somehow, so I came back to the DC area, but couldn't land a job doing more than administrative work.",
      bearing: 7,
      center: [170.517465, -45.883668],
      end: [-77.015468, 38.894736],
      zoom: 14.5,
      nextzoom: 12.5,
      speed: 0.8,
      pitch: 50,
      image: '../img/dc3.jpg'
    },
    'Fayetteville': {
      'headline': "Teaching in NC",
      'story': "To really make a difference, I decided to become a teacher and moved to North Carolina where I intended to pursue an alternative licensure as a public school teacher. I taught 8th grade English Language Arts for a year, and lived in Harnett County next to a chicken farm.",
      bearing: -153.37,
      center: [-77.015468, 38.894736],
      end: [-79.107013, 35.224293],
      zoom: 13,
      nextzoom: 9.5,
      speed: 0.8,
      pitch: 59,
      image: '../img/fayetteville.jpg'
    },
    'South Korea': {
      'headline': "Teaching in Korea",
      'story': "Discouraged by all the barriers facing teachers in this country, and yearning to travel once again, I picked up and moved to South Korea for a year to be a public school teacher there. It turned into five years! I lived on a beautiful island - strangely, my first home there was also next to a chicken farm.",
      bearing: 8,
      center: [-79.014605, 35.186964],
      end: [126.564540, 33.392854],
      zoom: 9.5,
      nextzoom: 9,
      speed: 0.9,
      pitch: 60,
      image: '../img/jeju14.jpg'
    },
    'Philly': {
      'headline': "Philly",
      'story': "After getting married and having a baby in Korea, I wanted to move back to my country to try to start a new career. I fell in love with tech and landed a job as a campus/community manager at a coding bootcamp in Philly. I started coding a lot and knew it was my future.",
      bearing: 9,
      center: [126.564540, 33.392854],
      end: [-75.157802, 39.950999],
      zoom: 9,
      nextzoom: 14,
      speed: 0.8,
      pitch: 60,
      image: '../img/Oldcity4.JPG'
    },
    'DC Again': {
      'headline': "DC Again!",
      'story': "To be closer to family, I moved in March 2018 back to DC to be near my roots and family. I worked at another coding bootcamp and coded furiously after work and on weekends. And that takes you to the present day!",
      bearing: 29.03,
      center: [-75.157802, 39.950999],
      end: [-77.041798, 38.919742],
      zoom: 14,
      nextzoom: 15,
      speed: 0.8,
      pitch: 60,
      image: '../img/halloween.jpg'
    },
    'The End': {
      'headline': "That's the end!",
      'story': "Thanks to MapBox for making this possible. Use the nav menu to go back to the homepage",
      bearing: 3,
      center: [-77.041798, 38.919742],
      end: [-77.015468, 38.894736],
      zoom: 15,
      nextzoom: 10,
      speed: 0.2,
      pitch: 0,
      image: '../img/hyeopjae2.jpg'
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
    event.preventDefault()
    for (let i = 0; i < locations.length; i++) {
      if (clicks == i) {
        // hide the note bar because it's ugly
        $('#note').hide()
        //headline bar text
        $('#mappage').text(results[i].headline)
        //show the content story box
        $('#storycontent').text(results[i].story).show()
        //photo appears
        $('#img').html('<img src="' + results[i].image + '">')
        //allowing it to fly to the next location
        let start = results[i].center;
        let end = results[i].end;
        //map parameters
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/jenem583/cjs0lsxnn02hs1fqhjnrvxlsd',
          center: start,
          zoom: results[i].zoom,
          container: 'map',
          pitch: 60
        });

        map.flyTo({
          center: end,
          zoom: results[i].nextzoom,
          speed: results[i].speed,
          curve: 1,
          pitch: results[i].pitch,
          bearing: results[i].bearing
        })

        var nav = new mapboxgl.NavigationControl();
          map.addControl(nav, 'bottom-right');
      }
    }
    clicks = clicks + 1
  })

  // The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
map.on('load', function() {
  // Insert the layer beneath any symbol layer.
  var layers = map.getStyle().layers;

  var labelLayerId;
  for (var i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
      labelLayerId = layers[i].id;
      break;
    }
  }

  map.addLayer({
    'id': '3d-buildings',
    'source': 'composite',
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'minzoom': 15,
    'paint': {
    'fill-extrusion-color': '#aaa',

    // use an 'interpolate' expression to add a smooth transition effect to the
    // buildings as the user zooms in
    'fill-extrusion-height': [
      "interpolate", ["linear"], ["zoom"],
      15, 0,
      15.05, ["get", "height"]
    ],
    'fill-extrusion-base': [
      "interpolate", ["linear"], ["zoom"],
      15, 0,
      15.05, ["get", "min_height"]
    ],
    'fill-extrusion-opacity': .6
    }
  }, labelLayerId);
});








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
