$(document).ready(function() {
    $('.carousel').carousel({interval: 7000});
});

function inicio_sesion(){
  	$users=['user','laborat'];
  	$pass=['12345','54321'];
  	$var1 = $("#inputUser").val();
  	/*
  	$var2 = $("#inputPassword").val();
  	if($var1!=""){
  		for (var i = 0 ; i <= length(users); i++) {
  			if ($var1==$users[i]){
  				if ($var2==$pass[i]){
  					console.log("Done");
  				} else {
  					console.log("Incorrect Password.");
  				}
  			} else{
  				console.log("User doesn't exist!");
  			}
  		}
  	}
  	*/

  	if ($var1=="user") {
  		$(".login2 .form-signin").attr("action","paciente.html");
  	}	
    else if ($var1=="laborat") {
		  $(".login2 .form-signin").attr("action","laboratorista.html");
  	} 
    else {
      alert("¡Usuario incorrecto!");
    }
  	
}
