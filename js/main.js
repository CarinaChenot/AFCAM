$(document).ready(function() {
  //Header Small display
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#headerSmall').slideDown(400, function() {});
    }
    if ($(this).scrollTop() < 100) {
      $('#headerSmall').fadeOut(300);
    }
    if ($(this).scrollTop() > 760) {
      $('header li').removeClass('active');
      $('.menuAbout').addClass('active');
    }
    if ($(this).scrollTop() > 1228) {
      $('header li').removeClass('active');
      $('.menuBureau').addClass('active');
    }
    if ($(this).scrollTop() > 1998) {
      $('header li').removeClass('active');
      $('.menuEvents').addClass('active');
    }
    if ($(this).scrollTop() > 2667) {
      $('header li').removeClass('active');
      $('.menuJoin').addClass('active');
    }
    if ($(this).scrollTop() > 3000) {
      $('header li').removeClass('active');
      $('.menuContact').addClass('active');
    }

  });
  //Menu match section
  console.log($(window).scrollTop());

  //Scroll sections
  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 63
        }, 1000);
        return false;
      }
    }
  });
});
  //Mobile menu
  $("#menu-icon").on('click', function() {
    $('#mobileMenu').toggle('slide', {
      direction: 'right'
    }, 500);
    $('#menu-icon').toggleClass('glyphicon-remove');
    $('#menu-icon').toggleClass('glyphicon-menu-hamburger');
  });
  //Hero Slider
  var nbSlide = 1;
  //Changer slide
  window.setInterval(function() {
    $('#circle' + nbSlide).removeClass('fa-circle');
    $('#circle' + nbSlide).addClass('fa-circle-o');
    $('#hero').css('background-image', 'url(img/herobg' + nbSlide + '.jpg)');
    nbSlide = (nbSlide + 1) % 3;
    $('#circle' + nbSlide).removeClass('fa-circle-o');
    $('#circle' + nbSlide).addClass('fa-circle');
  }, 5000);
  //Hover photo
  $('.photo').hover(function() {
      $(this).find('.photoInfo').fadeIn();
    },
    function() {
      $(this).find('.photoInfo').fadeOut();
    });
});
