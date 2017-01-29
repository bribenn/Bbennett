$(document).ready(function(){
	var $menu = $('#sidebar-wrapper');
	// I don't really understand this evt function
	$(document).on('click', '.js-menu-open', function(evt){
		$menu.addClass('open');
		return evt.target.tagName === 'A';
	}).on('click', '.js-menu-close', function(evt){
		$menu.removeClass('open');
	});

// 	$('.row').hover(
// 	function() {
//     $('#box-1').fadeOut(300, function() {
//     	$('#box-b2').fadeIn(300);
//     });
//   },

//   function() {
//     $('#box-b2').fadeOut(300, function() {
//     	$('#box-b1').fadeIn(300);
//     });
//   }
// );

});


