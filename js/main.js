;(function($) {
	"use strict";

	$('.gm-tabs').on('click', 'li', function(){

		var tabs = $('.gm-tabs a'),
			cont = $('.gm-content__tab');

		tabs.removeClass('active');
		cont.removeClass('active');

		$(this).children('a').addClass('active');
		cont.eq($(this).index()).addClass('active');

	});


})(jQuery);

