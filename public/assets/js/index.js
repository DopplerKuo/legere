$(window).load(function() {
  $('#pop-box .close').click(function(){
    $('#pop-box').fadeOut(300);
    $('body').css('overflow', 'auto');
  });

  $('.pop-btn').click(function() {
    $('body').css('overflow', 'hidden');
    var target = $(this).data('pop')
    $('#pop-box').fadeIn(300);
    $('#pop-box .pop-content').fadeOut(0);
    $('#pop-box .pop-content[data-pop="' + target + '"]').fadeIn(300);
  })

  $('.menu-btn').click(function() {
    $('.menu-btn i').toggleClass('active');
    $('#mb-nav-list').toggleClass('active');
  })

  $('#mb-nav-list a').click(function() {
    $('.menu-btn i').toggleClass('active');
    $('#mb-nav-list').toggleClass('active');
  })
});

$('<img/>').attr('src', 'assets/img/main/header.png').on('load', function() {
   $(this).remove(); // prevent memory leaks as @benweet suggested
   $('.main-bg').addClass('active')
   $('.main-bg.active div').css('background-image', 'url("assets/img/main/header.png")');
});