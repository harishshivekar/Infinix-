(function($) {
	
	"use strict";
	var single_carousel_js = function($scope, $) {
		
		// swiper slider
		function thmSwiperInit() {
			if ($(".thm-swiper__slider").length) {
			  $(".thm-swiper__slider").each(function () {
				let elm = $(this);
				let options = elm.data('swiper-options');
				let thmSwiperSlider = new Swiper(elm, options);
			});
			
			}
		}	  
	    thmSwiperInit();
		
	};
	$(window).on('elementor/frontend/init', function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/vitors_banner_carousel.default', single_carousel_js);
		elementorFrontend.hooks.addAction('frontend/element_ready/vitors_testimonials_carousel.default', single_carousel_js);
		elementorFrontend.hooks.addAction('frontend/element_ready/vitors_clients_carousel.default', single_carousel_js);
		elementorFrontend.hooks.addAction('frontend/element_ready/vitors_project_carousel.default', single_carousel_js);
		elementorFrontend.hooks.addAction('frontend/element_ready/vitors_service_carousel.default', single_carousel_js);
    });	

})(window.jQuery);