// $(document).ready(function() {
//
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
//
//         /* Check the location of each desired element */
//         $('.jappear').each( function(i){
//
//             var top_of_object = $(this).offset().top;
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > (top_of_object ) ){
//
//                 $(this).animate({'opacity':'1'},750);
//             }
//         });
//     });
// });


// $(document).ready(function() {
// 	$(window).scroll( function(){
// 		var bottom_of_front_page_image = $("#front-page").offset().top + $("#front-page").outerHeight();
// 		var bottom_of_window = $(window).scrollTop() + $(window).height();
//
// 		if (bottom_of_window > bottom_of_front_page_image) {
// 			$("#front-page").animate({'opacity':'1'}, 1500);
// 		}
// 	});
// });
//
// $(document).ready(function() {
// 	$(window).scroll( function(){
// 		var bottom_of_front_page_image = $("#dont-wanna").offset().top + ($("#dont-wanna").height() /2);
// 		var bottom_of_window = $(window).scrollTop() + $(window).height();
//
// 		if (bottom_of_window > bottom_of_front_page_image) {
// 			$("#dont-wanna").animate({'opacity':'1'}, 2000);
// 		}
// 	});
// });


// offset.top finds us the postion from the top
//outerheight gets the height of it (border/padding (margin can be included))
// current vertical position of the scroll bar
