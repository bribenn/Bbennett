$(document).ready(function(){
	var $menu = $('#sidebar-wrapper');
	// I don't really understand this evt function
	$(document).on('click', '.js-menu-open', function(evt){
		$menu.addClass('open');
		return evt.target.tagName === 'A';
	}).on('click', '.js-menu-close', function(evt){
		console.log('hello');
		console.log($menu);
		$menu.removeClass('open');
	});
});


