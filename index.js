// integer oskillator that doesnt deal with floating point weirdness yet

function checkNum(num) {
	return typeof num == 'number';
}

var osk = function osk(options) {
	options = options || {};

	var opts = {
		min: checkNum(options.min) ? options.min : 1,
		max: checkNum(options.max) ? options.max : 5,
		inc: options.inc || 1,
		direction: options.reverse ? -1 : 1
	};

	var current = checkNum(options.start) ? options.start : options.reverse ? opts.max : opts.min;
	if (current < opts.min || current > opts.max) {
		throw new Error('Invalid options');
	}
	return function iterate() {
		var initial = current;

		current += opts.inc * opts.direction;

		if (current >= opts.max || current <= opts.min) {
			opts.direction = opts.direction * -1;
		}

		return initial;

	}
};

module.exports = osk;