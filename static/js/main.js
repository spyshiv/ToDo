$(document).ready(function() {
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	$("#main-container").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1;
          var newvalueY = height * pageY * -1;
          $('#main-container').css("background-position", newvalueX+"px     "+newvalueY+"px");
	});
});