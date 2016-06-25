$( document ).ready(function() {
	$.getJSON("centros_medicos.json", function(data){
		console.log(data);
	});
});

