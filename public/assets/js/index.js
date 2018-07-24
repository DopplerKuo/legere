$(window).load(function() {
  $('#pop-box .close').click(function(){
    $('#pop-box').fadeOut(300);
  });

  $('.pop-btn').click(function() {
    var target = $(this).data('pop')
    $('#pop-box').fadeIn(300);
    $('#pop-box .pop-content').fadeOut(0);
    $('#pop-box .pop-content[data-pop="' + target + '"]').fadeIn(300);
  })
});