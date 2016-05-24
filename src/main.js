require('promis');
var typewriter = require('typewriter-js');
var elementClass = require('element-class');
var $ = function (selector) {
	return document.querySelector(selector);
}

// typewriter-ify all the quotes
typewriter.prepare('.typewriter');

// unhide first one
elementClass($('.typewriter._1')).remove('hide');

// type away
typewriter.type('.typewriter._1', { delay: 50 })
	.then(function() {

		setTimeout(function () {
			elementClass($('.typewriter._1')).add('hide');
			elementClass($('.typewriter._2')).remove('hide');
			return typewriter.type('.typewriter._2', { delay: 50 });
		}, 1000);

	});
