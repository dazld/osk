osk
===

Exports a function that returns a function which oscillates between minimum and maximum values, with a specified step

```javascript

var osk = require('osk');

var myOsc = osk({
	min: 0,
	max: 3,
	inc: 1,
	reverse: false // default
});

myOsc(); // 0


var myOsc = osk({
	min: 0,
	max: 3,
	inc: 1,
	reverse: true // runs backwards
});

myOsc(); // 3

var myOsc = osk({
	min: 0,
	max: 3,
	inc: 1,
	reverse: true, // runs backwards
	start: 2

});

myOsc(); // 2, but running backwards now


```
