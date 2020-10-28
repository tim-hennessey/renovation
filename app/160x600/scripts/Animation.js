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
        path: './scripts/SP_160x600.json'
    };

    

    var anim = bodymovin.loadAnimation(animData);
    var buttonExit = document.getElementById('button-exit');


	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		anim.setSpeed(1);

		buttonExit.addEventListener('mouseover', function () {
            // t.to(".cta-txt", .25, {fill: "#ff4662"});
            t.to(".cta-bg", .25, {fill: "#3d9a47"});

        });
        buttonExit.addEventListener('mouseout', function () {
            // t.to(".cta-txt", .25, {fill: "#ffed41"});
            t.to(".cta-bg", .25, {fill: "#ff4662"});

        });

	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl.to(legal, .25, {opacity:.8}, "+=3")
		.to(legal, .25, {opacity:0}, "+=3");
		
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
