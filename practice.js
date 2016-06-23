$(document).ready(function() {
  $('li').click(function(event) {
    $('<li>click</li>').appendTo(event.target);
  });

  $('button').click(function(event) {
    $('.board').toggleClass('x')
    if ($('.board').hasClass('x')) {
      $(this).text('X')
    } else {
      $(this).text('O')
    }
  })
});
