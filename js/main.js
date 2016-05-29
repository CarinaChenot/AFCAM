$(document).ready(function() {

  //Régler taille du header
  $('#banner').css('height', $(window).height());
  $(window).resize(function() {
    $('#banner').css('height', $(window).height());
  });
  //Obscurcir header
  $(window).scroll(function() {
    var currentScrollTop = $(window).scrollTop();
    $('#blackOverlay').css('opacity', currentScrollTop / $('#blackOverlay').height());
  });
  //Scroll to content
  function scrollToAnchor(aid) {
    var aTag = $("a[name='" + aid + "']"); //a[name="test"]
    $('html,body').animate({
      scrollTop: aTag.offset().top
    }, 'slow');
  }
  $('.fa-angle-double-down').on('click', function() {
    scrollToAnchor('content');
  });
  // Mobile Navigation
  $('#hamburger').click(function() {
    $('#smallMenu').slideToggle();
    if ($('#smallMenu').hasClass('open-menu')) {
      $('#smallMenu').removeClass('open-menu', function() {
        $('#hamburger i').toggleClass('fa-arrow-right');
        $('#hamburger i').toggleClass('fa-bars');
      });
    } else {
      $('#smallMenu').addClass('open-menu');
      $('#hamburger i').toggleClass('fa-arrow-right');
      $('#hamburger i').toggleClass('fa-bars', 400, 'easeOutSine');
    }
  });
});
