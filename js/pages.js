$(document).ready(function(){
  $('#hambuguer-btn').click(function(){
    $(this).toggleClass('open');
    $('#hambuguer-menu').toggleClass('menu-overlay');
    $('#cabecalho').toggleClass('remove-padding');
  });
});