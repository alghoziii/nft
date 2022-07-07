// $(document).ready(function(){
//   $(".fancybox").fancybox({
//         openEffect: "none",
//         closeEffect: "none"
//     });
    
//     $(".zoom").hover(function(){
		
// 		$(this).addClass('transition');
// 	}, function(){
        
// 		$(this).removeClass('transition');
// 	});
// });
//     



jQuery(function ($) {
        // Google Maps setup
        var googlemap = new google.maps.Map(
            document.getElementById('googlemap'),
            {
                center: new google.maps.LatLng(44.5403, -78.5463),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
        );
    });