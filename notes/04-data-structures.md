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
