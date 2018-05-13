$(function() {
	$('#join-btn').on('click', function() {
		$('#main-menu').slideUp();
		$('#join-menu').slideDown();
	});
	
	$('#create-btn').on('click', function() {
		$('#main-menu').slideUp();
		$('#create-menu').slideDown();
	});
});
