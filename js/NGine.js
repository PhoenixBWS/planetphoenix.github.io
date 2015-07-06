var day = new Date().getDay();
var colours = ['#D4C81E', '#1ECED4', '#F38080', '#F67BC0', '#CC7BF6', '#73C09D', '#C0A473'];

$(document).ready(function() {
    $('body').css('background-color', colours[day]);
	$('header').css('color', colours[day]);
});
