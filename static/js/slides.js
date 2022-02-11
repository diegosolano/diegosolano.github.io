$(function(){
	$('#portfolio').slides({
		preload: true,
		preloadImage: 'images/loading.gif',
		play: 5000,
		pause: 1000,
		hoverPause: true,
		animationStart: function(current){
			$('.caption').animate({
				bottom:-35
			},200);
			if (window.console && console.log) {
				// example return of current slide number
				console.log('animationStart on slide: ', current);
			};
		},
		animationComplete: function(current){
			$('.caption').animate({
				bottom:0
			},200);
			if (window.console && console.log) {
				// example return of current slide number
				console.log('animationComplete on slide: ', current);
			};
		},
		slidesLoaded: function() {
			$('.caption').animate({
				bottom:0
			},200);
		}
	});
});