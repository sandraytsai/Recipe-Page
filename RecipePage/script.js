$(document).ready(function() {
  $('#ingredients li').click(function(){
  	$(this).toggleClass('bought');
  });
  $('#directions li').click(function(){
  	$('#directions li').removeClass('bookmark');
  	$(this).addClass('bookmark');
  });
  $('#hideshowimg').click(function(){
  	$('img').toggle();
  });
});
