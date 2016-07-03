$(document).ready(function() {
	
});

function llenar_info(i) {
	$("#info-mues h2").text("");
	$("#info-mues h2").text("Informacion de la muestra " + i);
	var $par = $("<p></p>");
	$("#info-mues p").text("");
	$par.text("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ino reprehenderit ino voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt ino culpa qui officia deserunt mollit anim id est laborum.");
	$("#info-mues").append($par);
}

