$( document ).ready(function() {
	/*
	$.getJSON("centros_medicos.json", function(data){
		console.log(data);
	});
	*/

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

    $('#googleMap2').gmap3({
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

    $('#googleMap3').gmap3({
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


