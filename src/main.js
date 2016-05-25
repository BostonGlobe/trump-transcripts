require('promis');
var typewriter = require('typewriter-js');
var elementClass = require('element-class');
var $ = function (selector) {
	return document.querySelector(selector);
}

// TODO: make him vibrate
// publish
// test on various phones
// tell producers of bottom content
// show to tonia

// typewriter-ify all the quotes
typewriter.prepare('.typewriter');

// unhide first one
elementClass($('.typewriter._1')).remove('hide');

var hasStarted = false;

window.enterView = function(width) {

	console.log('child enterView');

	// only start typing if we haven't done it yet
	if (!hasStarted) {

		// set flag so we don't ever start typing again
		hasStarted = true;

		// start typing
		typewriter.type('.typewriter._1', { delay: 50 })
			.then(function() {

				// wait a little bit, then
				setTimeout(function () {

					// hide the previous phrase
					elementClass($('.typewriter._1')).add('hide');

					// show the next phrase
					elementClass($('.typewriter._2')).remove('hide');

					// start typing the next phrase and return the promise
					return typewriter.type('.typewriter._2', { delay: 50 });
				}, 1000);

			});

	}

}
