# Functions

There are three ways do define a function.

First, only using the `function` keyword:

	function add(a, b) {
		return a + b;
	}
	console.log(add(3, 4)); // 7

Second, using the `function` keyword combined with a binding:

	const subtract = function(a, b) {
		return a - b;
	};
	console.log(subtract(8, 3)); // 5

Third, using the arrow syntax:

	let multiply = (a, b) => {
		return a * b;
	}
	console.log(multiply(2, 6)); // 12

Using the first notation, a function appearing farther down in the program text
can be invoked:

	console.log(divide(8, 2)); // 4
	function divide(a, b) {
		return a / b;
	}

A function that uses a `return` statement without any value, or has no `return`
statement at all, returns `undefined`:

	function sayHi(toWhom) {
		console.log(`Hi, ${toWhom}`);
	}
	let result = sayHi('Tom');
	console.log(result); // undefined

A caller can supply too many or too few arguments. Parameters without an
argument value provided have the value `undefined` in the function body:

	function say(what, toWhom) {
		console.log(`${what}, ${toWhom}!`);
	}
	console.log(say('Hi', 'Tom'));         // "Hi, Tom!"
	console.log(say('Hi'));                // "Hi, undefined!"
	console.log(say('Hi', 'John', 'Doe')); // "Hi, John!"

Optional arguments can be initialized using a default value, in case the caller
does not provide one:

	function say(what, toWhom = 'John Doe') {
		console.log(`${what}, ${toWhom}!`);
	}
	console.log(say('Hi'));            // "Hi, John Doe!"
	console.log(say('Hi', 'Charles')); // "Hi, Charles!"
