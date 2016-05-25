require('promis');
var typewriter = require('typewriter-js');
var elementClass = require('element-class');
var $ = function (selector) {
	return document.querySelector(selector);
}

// publish
// test on various phones
// tell producers of bottom content

// typewriter-ify all the quotes
typewriter.prepare('.typewriter');

// unhide first one
elementClass($('.typewriter._1')).remove('hide');

var hasStarted = false;

var indices = [];

for (var i = 1; i < 28; i++) {

	indices.push(i);

}

var DELAY = 50;

window.enterView = function(width) {

	// only start typing if we haven't done it yet
	if (!hasStarted) {

		// set flag so we don't ever start typing again
		hasStarted = true;

		// start typing
		typewriter.type('.typewriter._1', { delay: DELAY })
			.then(function(param) {

				return indices.reduce(function(sequence, index) {

					return sequence.then(function() {

							elementClass($('.trump-wrapper img')).remove('vibrate-left');
							elementClass($('.trump-wrapper img')).remove('vibrate-right');

						if (index % 2 === 0) {
							elementClass($('.trump-wrapper img')).add('vibrate-left');
						} else {
							elementClass($('.trump-wrapper img')).add('vibrate-right');
						}

						// hide the current phrase
						elementClass($('.typewriter._' + index)).add('hide');

						// set the current phrase selector
						var nextPhraseSelector = '.typewriter._' + (index + 1);

						// show the next phrase
						elementClass($(nextPhraseSelector)).remove('hide');

						// start typing the next phrase and return the promise
						return typewriter.type(nextPhraseSelector, { delay: DELAY });

					});


				}, Promise.resolve());

			});

	}

}
