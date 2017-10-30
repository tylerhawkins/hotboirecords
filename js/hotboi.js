$(document).ready(function() {
	$('header.page-header .mobile-menu-toggle').click(function() {
		$(this).parent().toggleClass('active');
	});
});