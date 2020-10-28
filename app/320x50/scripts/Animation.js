var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var tl = new TimelineMax();
	var t = TweenMax;

    var legal = document.getElementById('legal');
    var animationWindow = document.getElementById('animationWindow');

    var animData = {
        wrapper: animationWindow,
        animType: 'svg',
        loop: false,
        prerender: true,
        autoplay: true,
        path: './scripts/SP_320x50.json'
    };

    

    var anim = bodymovin.loadAnimation(animData);


	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		anim.setSpeed(1);


	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl.to(legal, .25, {opacity:.8}, "+=6.5");
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
