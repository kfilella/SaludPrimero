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
        $('#inputNombres').val(nombres);
        $('#inputNombres').attr('value', nombres);
        $('#inputApellidos').val(apellidos);
        $('#inputApellidos').attr('value', apellidos);
        $('#inputCedula').val(cedula);
        $('#inputCedula').attr('value', cedula);
        $('#inputEmail').val(email);
        $('#inputEmail').attr('value', email);
        $('#inputDireccion').val(direccion);
        $('#inputDireccion').attr('value', direccion);
        $('#inputTelefono1').val(telefono[0]);
        $('#inputTelefono1').attr('value', telefono[0]);
        $('#inputTelefono2').val(telefono[1]);
        $('#inputTelefono2').attr('value', telefono[1]);
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
});