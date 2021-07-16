jQuery(window).scroll(function() {	
							   
	jQuery('#pagearea .three_column ').each(function(){
		var imagePos = jQuery(this).offset().top;
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				jQuery(this).addClass("fadeInUp");
			}
	});
	
	jQuery('#welcomearea .container').each(function(){
		var imagePos = jQuery(this).offset().top;
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				jQuery(this).addClass("fadeInDown");
			}
	});
	
	jQuery('#section1 .container').each(function(){
		var imagePos = jQuery(this).offset().top;
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				jQuery(this).addClass("fadeInLeft");
			}
	});
	
	jQuery('#section2 .container').each(function(){
		var imagePos = jQuery(this).offset().top;
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				jQuery(this).addClass("fadeInRight");
			}
	});
	
	jQuery('#section3 .container').each(function(){
		var imagePos = jQuery(this).offset().top;
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				jQuery(this).addClass("fadeInDown");
			}
	});
	
	jQuery('#section4 .ourspecialties').each(function(){
		var imagePos = jQuery(this).offset().top;
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				jQuery(this).addClass("fadeInUp");
			}
	});
	
	jQuery('#section5 .container').each(function(){
		var imagePos = jQuery(this).offset().top;
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				jQuery(this).addClass("fadeInUp");
			}
	});
	
	
	jQuery('#section6 .container').each(function(){
		var imagePos = jQuery(this).offset().top;
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				jQuery(this).addClass("fadeInDown");
			}
	});
	
	jQuery('#section7 .container').each(function(){
		var imagePos = jQuery(this).offset().top;
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				jQuery(this).addClass("fadeInRight");
			}
	});
	
	jQuery('#section8 .container').each(function(){
		var imagePos = jQuery(this).offset().top;
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				jQuery(this).addClass("fadeInLeft");
			}
	});
	
	jQuery('#section9 .container').each(function(){
		var imagePos = jQuery(this).offset().top;
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				jQuery(this).addClass("fadeInDown");
			}
	});
	
	jQuery('#section10 .container').each(function(){
		var imagePos = jQuery(this).offset().top;
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				jQuery(this).addClass("fadeInUp");
			}
	});
	
});