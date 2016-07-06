function cargarExamenes(){

    $.getJSON("datos/examenes.json", function(data){
        
        var examenes = $('#examenes');
        var examenesColumn = $('<div class="col-md-12" style="padding-top:20px; color:#000; text-shadow:none;; font-size:0.8em"></div>');
        var examenesPanel = $('<div class="panel panel-default"></div>');
        var examenesHeading = $('<div class="panel-heading"></div>');
        var examenesTitle = $('<h3 class="panel-title">Ex&aacute;menes recientes</h3>');
        var examenesBody = $('<div class="panel-body"></div>');
        var examenesTable = $('<table class="table table-hover"></table>');
        var examenesTableHead = $('<thead></thead>');
        var examenesTableRowHead = $('<tr></tr>');
        var examenesTipo = $('<th>Tipo</th>');
        var examenesFecha = $('<th>Fecha</th>');
        var examenesProgreso = $('<th>Progreso</th>');
        var examenesResultado = $('<th>Resultado</th>');
        var examenesTableBody = $('<tbody></tbody>');
        examenes.append(examenesColumn);
        examenesColumn.append(examenesPanel);
        examenesPanel.append(examenesHeading);
        examenesHeading.append(examenesTitle);
        examenesPanel.append(examenesBody);
        examenesBody.append(examenesTable);
        examenesTable.append(examenesTableHead);
        examenesTable.append(examenesTableBody);
        examenesTableHead.append(examenesTableRowHead);
        examenesTableRowHead.append(examenesTipo);
        examenesTableRowHead.append(examenesFecha);
        examenesTableRowHead.append(examenesProgreso);
        examenesTableRowHead.append(examenesResultado);

        $.each(data,function(i) {
            var tipo = data[i].tipo;
            var fecha = data[i].fecha;
            var estado = data[i].estado;
            var examenDetalle;
            if(estado == 0){
                examenDetalle = $('<tr><td>'+tipo+'</td><td>'+fecha+'</td><td><div class="progress"><div data-toggle="tooltip" title="Pendiente" class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width:25%"></div></div></td><td><button class="btn btn-default disabled">No disponible</button></td></tr>');
            }
            else if(estado == 1){
                examenDetalle = $('<tr><td>'+tipo+'</td><td>'+fecha+'</td><td><div class="progress"><div data-toggle="tooltip" title="Datos ingresados" class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%"></div></div></td><td><button class="btn btn-default disabled">No disponible</button></td></tr>');
            }
            else if(estado == 2){
                examenDetalle = $('<tr><td>'+tipo+'</td><td>'+fecha+'</td><td><div class="progress"><div data-toggle="tooltip" title="En proceso" class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:75%"></div></div></td><td><button class="btn btn-default disabled">No disponible</button></td></tr>');
            }
            else if(estado == 3){
                examenDetalle = $('<tr><td>'+tipo+'</td><td>'+fecha+'</td><td><div class="progress"><div data-toggle="tooltip" title="Resultados disponibles" class="progress-bar progress-bar-progress progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">100%</div></div></td><td><button id="examen'+i+'" class="btn btn-primary">Descargar</button></td></tr>');
            }
            else{
                examenDetalle = $('<tr><td>'+tipo+'</td><td>'+fecha+'</td></tr>');
            }

            examenesTableBody.append(examenDetalle);

        });
    });
}



$( document ).ready(function(){
    cargarExamenes();
});