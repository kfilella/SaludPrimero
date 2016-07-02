$( document ).ready(function() {
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
        var myOptions = {
            zoom: 18,
            center: new google.maps.LatLng(-2.133330, -79.903968),
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


