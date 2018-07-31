function readDeviceOrientation() {              		
  if (($(window).width() === 768 ||  $(window).width() === 1024 ) && Math.abs(window.orientation) !== 90) {
    $('#hv-tip').removeClass('v');
  } else {
    $('#hv-tip').addClass('v');
  }
}

$ (document).ready (function () {
  // Add smooth scrolling to all links
  $ ('a').on ('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault ();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $ ('html, body').animate (
        {
          scrollTop: $ (hash).offset ().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  var sec6ToTop = $ ('.sec6-function').offset ().top;
  $ (window).bind ('resize scroll', function () {
    readDeviceOrientation();
    var toTopD = $ (this).scrollTop ();
    
    /// sec6 function step card
    if (
      toTopD >= sec6ToTop - 90 &&
      toTopD <= $ ('.step-card:nth-of-type(5)').offset ().top
    ) {
      $ ('.sec6-function').css (
        'transform',
        'translateY(' + (toTopD - sec6ToTop + 90) + 'px)'
      );

      if (toTopD >= $ ('.step-card:nth-of-type(5)').offset ().top - $ ('.step-card').height() / 2) {
        $ ('.step-card').removeClass ('active');
        $ ('.step-card:nth-of-type(5)').addClass ('active');
        $ ('.step').removeClass ('active');
        $ ('.step:nth-of-type(5)').addClass ('active');
        $('.sec6-function .time b').text(60)
      } else if (toTopD >= $ ('.step-card:nth-of-type(4)').offset ().top - $ ('.step-card').height() / 2) {
        $ ('.step-card').removeClass ('active');
        $ ('.step-card:nth-of-type(4)').addClass ('active');
        $ ('.step').removeClass ('active');
        $ ('.step:nth-of-type(4)').addClass ('active');
        $('.sec6-function .time b').text(45)
      } else if (toTopD >= $ ('.step-card:nth-of-type(3)').offset ().top - $ ('.step-card').height() / 2) {
        $ ('.step-card').removeClass ('active');
        $ ('.step-card:nth-of-type(3)').addClass ('active');
        $ ('.step').removeClass ('active');
        $ ('.step:nth-of-type(3)').addClass ('active');
        $('.sec6-function .time b').text(35)
      } else if (toTopD >= $ ('.step-card:nth-of-type(2)').offset ().top - $ ('.step-card').height() / 2) {
        $ ('.step-card').removeClass ('active');
        $ ('.step-card:nth-of-type(2)').addClass ('active');
        $ ('.step').removeClass ('active');
        $ ('.step:nth-of-type(2)').addClass ('active');
        $('.sec6-function .time b').text(20)
      } else if (toTopD >= $ ('.step-card:nth-of-type(1)').offset ().top - $ ('.step-card').height() / 2) {
        $ ('.step-card').removeClass ('active');
        $ ('.step-card:nth-of-type(1)').addClass ('active');
        $ ('.step').removeClass ('active');
        $ ('.step:nth-of-type(1)').addClass ('active');
        $('.sec6-function .time b').text(5)
      } else {
        $('.sec6-function .time b').text(0)
      }
    }

    if ( toTopD <= $('.sec5').offset().top  ) {
      $('.sec3 .left').css('transform', 'translateY(' +  (1 - (toTopD / $('.sec3 .left').offset ().top)) * 100 + '%)')
      $('.sec3 .right').css('transform', 'translateY(' +  (1 - (toTopD / $('.sec3 .right').offset ().top)) * 50 + '%)')
    }

    if ( toTopD <= $('.sec6').offset().top  ) {
      $('.sec4 .right').css('transform', 'translateY(' +  (1 - (toTopD / $('.sec4 .right').offset ().top)) * 100 + '%)')
      $('.sec4 .left').css('transform', 'translateY(' +  (1 - (toTopD / $('.sec4 .left').offset ().top)) * 50 + '%)')
    }

    /// left nav a
    if ( toTopD > $('footer').offset().top - 90) {
      $('nav#nav .middle a').removeClass('active');
      $('nav#nav .middle a:nth-of-type(7)').addClass('active');
    }
    else if ( toTopD > $('.sec9').offset().top - 90) {
      $('nav#nav .middle a').removeClass('active');
      $('nav#nav .middle a:nth-of-type(6)').addClass('active');
    }
    else if ( toTopD > $('.sec8').offset().top - 90) {
      $('nav#nav .middle a').removeClass('active');
      $('nav#nav .middle a:nth-of-type(5)').addClass('active');
    }
    else if ( toTopD > $('.sec7').offset().top - 90) {
      $('nav#nav .middle a').removeClass('active');
      $('nav#nav .middle a:nth-of-type(4)').addClass('active');
    }
    else if ( toTopD > $('.sec6').offset().top - 90) {
      $('nav#nav .middle a').removeClass('active');
      $('nav#nav .middle a:nth-of-type(3)').addClass('active');
    }
    else if ( toTopD > $('.sec3').offset().top - 90) {
      $('nav#nav .middle a').removeClass('active');
      $('nav#nav .middle a:nth-of-type(2)').addClass('active');
    }
    else if ( toTopD > $('.sec2').offset().top - 90) {
      $('nav#nav .middle a').removeClass('active');
      $('nav#nav .middle a:nth-of-type(1)').addClass('active');
    }
  }).resize();
});


window.sr = ScrollReveal({
  scale: 1
});
sr.reveal('.reveal', 500);

