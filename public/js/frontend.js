$(document).ready(function () {
	var page = $('#page').html();
	console.log(page);

	if (page) {
		$('.navbar-nav li').removeClass('active');
		$('#' + page.toLowerCase()).addClass('active');
	} else {
		console.error('  EMPTY');

	}

});