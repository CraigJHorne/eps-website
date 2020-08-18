jQuery(function(o){function e(){"true"!=o.cookie("welcomebarcookie")?(o(".welcomeBar").show(),o("#closeWelcome").click(function(){o(".welcomeBar").slideUp("slow");var e=new Date;e.setTime(e.getTime()+864e5),o.cookie("welcomebarcookie",!0,{expires:e})})):o(".welcomeBar").hide()}o(document).ready(function(){e()}),o(window).load(function(){e()})});

(function($) {
	if($('.wc-pao-addon-personalise-it').length > 0) {
		var nextClass = $('.wc-pao-addon-personalise-it').next().attr('class');
		var classes = nextClass.split(" ");
		var newClass = '';
		for (var i = classes.length - 1; i >= 0; i--) {
			if(classes[i]) {
				newClass +=  '.' + classes[i];
			}
		}

		$('.wc-pao-addon-personalise-it, ' + newClass).wrapAll( $('<div class="ct-wrap">').addClass('wrap') );
		$(newClass).wrapAll( $('<div class="ct-inner-wrap">').addClass('wrap') );
		$('.ct-inner-wrap').prepend('<img src="/wp-content/themes/woodmart/images/shirt-icon.jpg" class="shirt-icon">');
	}
})(jQuery);