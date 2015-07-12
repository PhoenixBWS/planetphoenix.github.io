var day = new Date().getDay();
var colours = ['#D4C81E', '#1ECED4'];
var val;
// var colours = ['#D4C81E', '#1ECED4', '#F38080', '#F67BC0', '#CC7BF6', '#73C09D', '#C0A473'];

if(day%2 == 0){
	val = 0
} else{
	val = 1
}

$(document).ready(function() {
    $('body').css('background-color', colours[val]);
	$('header').css('color', colours[val]);
});
