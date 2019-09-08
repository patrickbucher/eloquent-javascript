# Higher-Order Functions

Functions that take other functions as arguments or return other functions are
called _higher-order functions_.

Array's `filter` method accepts a predicate and returns a new array containing
all the array's elements the predicate matches:

	[1, 2, 3, 4, 5].filter(x => x % 2 === 0); // [2, 4]

The `map` method accepts a transforming function, which is applied to every
element in the original array, and returns a new array consisting of the
transformed values:

	[1, 2, 3].map(x => x * 2); // [2, 4, 6]

The `reduce` method reduces the elements of an array to a single value
according to the combination function:

	let numbers = [1, 2, 3];
	const sum = (a, b) => a + b;
	let result = numbers.reduce(sum);
	console.log(result); // 6

An optional start value can be defined as the second argument:

	let result = numbers.reduce(sum, 0);

The methods `some` and `every` check if a predicate matches at least one, or,
respectively, all array items:

	[1, 2, 3].some(x => x < 2); // true, 1 < 2
	[1, 2, 3].every(x => x < 2); // false, 2 >= 2, 3 > 2

The `findIndex` method returns the index of the first element matching a
predicate:

	[1, 2, 3, 4].findIndex(x => x % 2 === 0); // 1: the number 2

The string method `charCodeAt` should be avoided in favour of the unicode-aware
`codePointAt` method. The `for`/`of` loop is the recommended way to iterate
over unicode code points in a string.
