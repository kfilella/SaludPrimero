function cargarInfoPerfil(){
    $.getJSON("datos/usuario.json", function(data){
        var nombres = data.Nombres;
        var apellidos = data.Apellidos;
        var cedula = data.Cedula;
        var email = data.Email;
        var direccion = data.Direccion;
        var telefono = data.Telefonos;
        var paciente = nombres+" "+apellidos;
        $('#pacienteNombre').text(paciente);
        $('#nombres').val(nombres);
        $('#nombres').attr('value', nombres);
        $('#apellidos').val(apellidos);
        $('#apellidos').attr('value', apellidos);
        $('#cedula').val(cedula);
        $('#cedula').attr('value', cedula);
        $('#email').val(email);
        $('#email').attr('value', email);
        $('#direccion').val(direccion);
        $('#direccion').attr('value', direccion);
        $('#telefono1').val(telefono[0]);
        $('#telefono1').attr('value', telefono[0]);
        $('#telefono2').val(telefono[1]);
        $('#telefono2').attr('value', telefono[1]);
    });
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#fotoPerfil')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$( document ).ready(function(){
    cargarInfoPerfil();
    $.validator.setDefaults({
        submitHandler: function() {
            alert("Datos actualizados!");
        }
    });
    $("#perfilForm").validate({
        errorClass: "errorPerfil",
        validClass: "validPerfil",
        rules: {
            nombres: "required",
            apellidos: "required",
            email: {
                required: true,
                email: true
            },
            direccion: "required",
            cedula: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 13
            },
            telefono1: "required"
        },
        messages: {
            nombres: "* Ingrese sus nombres",
            apellidos: "* Ingrese sus apellidos",
            email: "* Ingrese su direcci&oacute;n de correo electr&oacute;nico",
            direccion: "* Ingrese una direcci&oacute;n",
            cedula: "* Ingrese un n&uacute;mero de c&eacute;dula v&aacute;lido",
            telefono1: "* Ingrese su n&uacute;mero telef&oacute;nico"
        }
    });
});