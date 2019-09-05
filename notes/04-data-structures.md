# Data Structures

The zero-based index of an array is best understood as an _offset_, i.e. the
amount of items to skip:

	let fib = [1, 1, 2, 3, 5, 8, 13];
	let first_fib = fib[0]; // don't skip a number, use the first one
	let sixth_fib = fib[5]; // skip five numbers

Almost all JavaScript values, except `null` and `undefined`, have properties. A
property can be retrieved using dot notation with the properties literal name:

	let obj = {a: 3, b: 7, c: 9};
	let a = obj.a; // 3
	let b = obj.b; // 7
	let c = obj.c; // 9

Using bracket notation, the expression within the brackets is evaluated to
fetch the property:

	let obj = {val_1: 7, val_2: 5, val_3: 9};
	let prop = 'val_';
	let a = obj[prop + 1];     // obj['val_1'] = 7
	let b = obj[prop + '2'];   // obj['val_2'] = 5
	let c = obj[prop + (5-2)]; // obj['val_3'] = 9

The array methods `push` and `pop` add and remove items at the end of an array:

	let arr = [1, 2, 3];

	arr.push[4];    // [1, 2, 3, 4];
	arr.push[5, 6]; // [1, 2, 3, 4, 5, 6];

	let six = arr.pop();  // [1, 2, 3, 4, 5];
	let five = arr.pop(); // [1, 2, 3, 4];

The array methods `unshift` and `shift` add and remove items at the beginning
of an array:

	let arr = [10, 20, 30];

	arr.unshift(5); // [5, 10, 20, 30]
	arr.unshift(1); // [1, 5, 10, 20, 30]

	let one = arr.shift();  // [5, 10, 20, 30]
	let five = arr.shift(); // [10, 20, 30]

To implement a queue, the methods `unshift` and `pop` can be combined:

	let arr = ['foo', 'bar'];
	arr.unshift('qux'); // ['qux', 'foo', 'bar']
	let bar = arr.pop(); // ['qux', 'foo']

Object can be created using braces expressions. Properties with names that
aren't valid binding names need to be quoted:

	let obj = {
		name: 'Patrick',
		'born in': 1987
	};

Reading a property that does not exist returns `undefined`:

	let obj = {a: 3, b: 6, c: 9};
	let d = obj.d; // undefined

Writing to a property that does not exist creates a new property:

	let obj = {a: 3, b: 6, c: 9};
	obj.d = 12;
	let d = obj.d; // 12

A property can be removed using the `delete` keyword:

	delete obj.d;
	let d = obj.d; // undefined

The `in` operator finds out, whether or not a given string is a property name
of a given object:

	let o = {a: 1, b: 2, c: 3};
	let hasA = 'a' in o; // true
	let hasC = 'c' in o; // true
	let hasD = 'd' in o; // false

The `Object.keys` function returns an array containing all property names of
the given object:

	let o = {a: 1, b: 2, c: 3};
	let l = Object.keys(o); // ["a", "b", "c"]

The `Object.assign` function copies all properties from the second object to
the first, and returns the first:

	let into = {a: 1, b: 2, c: 3};
	let from = {c: 9, d: 5};
	Object.assign(into, from); // { a: 1, b: 2, c: 9, d: 5 }

An array is an object:

	let arr = [];
	typeof arr; // "object"

The array's `include` method checks whether or not a given value is contained
in the array:

	let arr = [1, 2, 3];
	arr.includes(1); // true
	arr.includes(4); // false

The `in` operator iterates over the properties of an array, i.e. its indices:

	let arr = [1, 2, 3];
	for (let i in arr) {
		console.log(i);
	}
	// prints: 0 1 2

The `of` operator iterates over the values of an array:

	let arr = [1, 2, 3];
	for (let v of arr) {
		console.log(v);
	}
	// prints: 1 2 3

The array methods `indexOf` and `lastIndexOf` search for a value in the array
from the start or back, respectively:

	let letters = ['a', 'b', 'c', 'b', 'a'];
	let firstA = letters.indexOf('a');    // 0
	let lastA = letters.lastIndexOf('a'); // 4

The optional second argument indicates at what index to start looking for the
value:

	let letters = ['a', 'b', 'c', 'b', 'a'];
	let firstB = letters.indexOf('b', 2);    // 3, from index 2 upwards
	let lastA = letters.lastIndexOf('a', 3); // 0, from index 3 downwards

Applied to a string, the character at the given position is returned:

	let word = "test";
	let firstT = word.indexOf('t');    // 0
	let lastT = word.lastIndexOf('t'); // 3

The `slice` method returns a new array from the start index (inclusive) up to
the optional end index (exclusive):

	let arr = [1, 2, 3, 4, 5];
	arr.slice(0, 3); // [1, 2, 3]
	arr.slice(2);    // [3, 4, 5]

The `concat` method appends the given array to the array the method is called
on, and returns the resulting array, without modifying the original array:

	let alpha = [1, 2, 3];
	let omega = [7, 8, 9];
	alpha.concat(omega); // [1, 2, 3, 7, 8, 9]
