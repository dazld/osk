var osk = require('../');
var should = require('should');

var correctOptions = {
	min: 1,
	max: 3,
	inc: 1,
	start: 1,
	reverse: false
};

var doTimes = function(times, fn) {
	for (var i = 0; i < times; i++) {
		fn();
	}
};

describe('when passing correct options', function() {
	var testOsc;

	beforeEach(function() {
		testOsc = osk(correctOptions);
	});

	it('returns a function', function() {
		testOsc.should.be.a.function;
	});

	it('returns the start value when invoked', function() {
		testOsc().should.eql(correctOptions.start);
	});

	it('after invoking twice returns the maximum value when invoked again', function() {
		doTimes(2, testOsc);
		testOsc().should.eql(3);
	});

	// it('after invoking max times returns the maximum value minus the increment when invoked again', function () {
	// 	doTimes(correctOptions.max - 1, testOsc);
	// 	testOsc().should.eql(correctOptions.max - correctOptions.inc);
	// });

	// it('after invoking max times 3 returns the minimum when invoked again', function () {
	// 	doTimes((correctOptions.max * 3), testOsc);
	// 	testOsc().should.eql(correctOptions.min);
	// });



});

describe('when invoking with no options, it uses the defaults', function() {
	var defaultOsc;
	beforeEach(function() {
		defaultOsc = osk();
	});

	it('and returns a function', function() {
		defaultOsc.should.be.a.function;
	});
	it('returns 1 when invoked', function() {
		defaultOsc().should.eql(1);
	});
	it('returns 2 when invoked twice', function() {
		defaultOsc();
		defaultOsc().should.eql(2);
	});
	it('returns 3 when invoked 3 times', function() {
		doTimes(2, defaultOsc);
		defaultOsc().should.eql(3);
	});
	it('returns 4 when invoked 4 times', function() {
		doTimes(3, defaultOsc);
		defaultOsc().should.eql(4);
	});
	it('returns 5 when invoked 5 times', function() {
		doTimes(4, defaultOsc);
		defaultOsc().should.eql(5);
	});
	it('returns 4 when invoked 6 times', function() {
		doTimes(5, defaultOsc);
		defaultOsc().should.eql(4);
	});
	it('returns 3 when invoked 7 times', function() {
		doTimes(6, defaultOsc);
		defaultOsc().should.eql(3);
	});
	it('returns 2 when invoked 8 times', function() {
		doTimes(7, defaultOsc);
		defaultOsc().should.eql(2);
	});
	it('returns 1 when invoked 9 times', function() {
		doTimes(8, defaultOsc);
		defaultOsc().should.eql(1);
	});
	it('returns 2 when invoked 10 times', function() {
		doTimes(9, defaultOsc);
		defaultOsc().should.eql(2);
	});
});


describe('when invoking with reverse true', function() {
	var backwardsOsc;
	beforeEach(function() {

		backwardsOsc = osk({
			min: 1,
			max: 3,
			inc: 1,
			reverse: true
		});

	});

	it('the osc runs backwards returning the max when invoked once', function() {
		backwardsOsc().should.eql(3);
	});
	it('the osc runs backwards when run 2 times', function() {
		doTimes(1, backwardsOsc);
		backwardsOsc().should.eql(2);
	});
	it('the osc runs backwards when run 3 times', function() {
		doTimes(2, backwardsOsc);
		backwardsOsc().should.eql(1);
	});
	it('the osc runs backwards when run 4 times', function() {
		doTimes(3, backwardsOsc);
		backwardsOsc().should.eql(2);
	});
	it('the osc runs backwards when run 5 times', function() {
		doTimes(4, backwardsOsc);
		backwardsOsc().should.eql(3);
	});
	it('the osc runs backwards when run 6 times', function() {
		doTimes(5, backwardsOsc);
		backwardsOsc().should.eql(2);
	});
	it('the osc runs backwards when run 7 times', function() {
		doTimes(6, backwardsOsc);
		backwardsOsc().should.eql(1);
	});

});


describe('when invoking with a start value', function () {
	var startOsc;
	beforeEach(function(){
		startOsc = osk({
			start: 0,
			min: 0
		});
	});

	it('returns the start value when invoked', function () {
		startOsc().should.eql(0);
	});
	it('the osc runs offset when run 2 times', function() {
		doTimes(1, startOsc);
		startOsc().should.eql(1);
	});
	it('the osc runs offset when run 3 times', function() {
		doTimes(2, startOsc);
		startOsc().should.eql(2);
	});
	it('the osc runs offset when run 4 times', function() {
		doTimes(3, startOsc);
		startOsc().should.eql(3);
	});
	it('the osc runs offset when run 5 times', function() {
		doTimes(4, startOsc);
		startOsc().should.eql(4);
	});
	it('the osc runs offset when run 6 times', function() {
		doTimes(5, startOsc);
		startOsc().should.eql(5);
	});
	it('the osc runs offset when run 7 times', function() {
		doTimes(6, startOsc);
		startOsc().should.eql(4);
	});
	it('the osc runs offset when run 8 times', function() {
		doTimes(7, startOsc);
		startOsc().should.eql(3);
	});
	it('the osc runs offset when run 9 times', function() {
		doTimes(8, startOsc);
		startOsc().should.eql(2);
	});

});