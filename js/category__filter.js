$(function() {
	$('.categories a').click(function() {
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(300);
		$('.big-post').not(get_current).hide(300);
		get_current.show(300);
	});
});