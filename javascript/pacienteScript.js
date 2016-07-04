function cargar_servicios(){
    $.getJSON("datos/centros_medicos.json", function(data){
        $.each(data,function(i) {
            var $descrip = data[i].Descripcion;
            var $descrip2 = data[i].Descripcion;
            var $nombrecentro = data[i].Nombre;
            var $ul = $("<ul></ul>");
            var $ul2 = $("<ul></ul>");
            var $mhmt = $(".modal-header");
            var $h2 = $("<h2></h2>");
            $h2.attr("class","modal-title");
            $h2.attr("id","myModalLabel");
            $h2.text($nombrecentro);
            $h2.appendTo($mhmt[i]);
            var $cp = $(".centroPanel");  // Para paneles
            var $inf = $(".servicios");  // Para Modal

            console.log();
            for (var j = 0; j < $descrip.length ; j++){
                $ul.append("<li>"+$descrip[j]+"</li>");
                $ul2.append("<li>"+$descrip2[j]+"</li>");
            }

            $ul.appendTo($cp[i]);
            $ul2.appendTo($inf[i]);
        });
    });
}


$( document ).ready(function(){
    cargar_servicios();  // Cargar servicios en Paneles y Modals


    /*
    $.getJSON("centros_medicos.json", function(data){
        console.log(data);
    });
    */
/*
    $('#googleMap').gmap3({
     map: {
        options: {
          maxZoom: 14 
        }  
     },
     marker:{
        address: "Haltern am See, Weseler Str. 151",
        options: {
         icon: new google.maps.MarkerImage(
           "http://gmap3.net/skin/gmap/magicshow.png",
           new google.maps.Size(32, 37, "px", "px")
         )
        }
     }
    },
    "autofit" );
*/
    var map1, map2, map3;

    initMap();

    function initMap() {
        var $lat = 0.0;
        var $lon = 0.0;
        $.getJSON("datos/centros_medicos.json", function(data){
            $.each(data,function(i) {
                var $val = data[i].Coordenadas;          
                var $lat = $val.Latitud
                var $lon = $val.Longitud
            });
        });

        var myOptions = {
            zoom: 14,
            center: new google.maps.LatLng($lat,$lon),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        map1 = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        map2 = new google.maps.Map(document.getElementById("map_canvas2"), myOptions);
        map3 = new google.maps.Map(document.getElementById("map_canvas3"), myOptions);
    }

    var hashTagActive = "";
    $(".scroll").click(function (event) {
        if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
            event.preventDefault();
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 750, 'swing');
            hashTagActive = this.hash;
        }
    });

});