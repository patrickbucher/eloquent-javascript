# Program Structure

An _expression_ is a fragment of code that produces a value:

	99 + " bottles of beer"
	1 + 1
	13 * 12

A _binding_ is a value bound to a name using the `let` keyword:

	let fields = 8 * 8;

The collection of all bindings and values at any given moment are called the
_environment_.

Multiple bindings can be defined as a comma-separated list:

	let a = 3, b = 7, c = 5;

The `var` and `const` keyword create bindings with different semantics:

	var b = 3;
	const pi = 3.14;

A binding can contain digits, but must not start with a digit:

	let 99bottles = 99; // illegal
	let bottles99 = 99; // legal

A binding can contain the underscore (`_`) and the dollar (`$`) character, too:

	let foo_bar = 33;
	let $what = 42;

An expression can be tested whether or not it is a number using the
`Number.isNaN` function:

	Number.isNaN(42); // false
	Number.isNaN(Number('55')); // false
	Number.isNaN(Number('fifty-five')); // true

A condition is `true`, if the expression _converted to a boolean_ is `true`.
All strings, except the empty string `""`/`''`, convert to `true`:

	if (true) { console.log(true); } // true
	if ('true') { console.log(true); } // true
	if ('yes') { console.log(true); } // true
	if ('whatever') { console.log(true); } // true
	if ('') { console.log(true); } // false

JavaScript identifiers use _Camel Case_, with the first letter in lower-case:

	let numberOfRepetitions = 55;
	let removeTrailingCommas = true;


However, _Constructors_ have a capitalized first letter:

	Number
	TypeError
	ArrayBuffer
