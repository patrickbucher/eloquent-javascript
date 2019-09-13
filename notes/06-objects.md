# Objects

## The `this` keyword

The `this` keyword points to the object the function was called on:

	let dilbert = {};
	dilbert.name = 'Dilbert';
	dilbert.sayHi = function(toWhom) {
		return `Hello ${toWhom}, my name is ${this.name}.`;
	};
	console.log(dilbert.sayHi('Wally'));
	// Output: "Hello Wally, my name is Dilbert."

A function not associated to an object has no `this` value:

	function sayHi(toWhom) {
		return `Hello ${toWhom}, my name is ${this.name}.`;
	};
	console.log(sayHi('Wally'));
	// Output: "Hello Wally, my name is undefined."

A value for `this` can be set nonetheless when using the function's `call`
method:

	function sayHi(toWhom) {
		return `Hello ${toWhom}, my name is ${this.name}.`;
	};
	console.log(sayHi.call({name: 'Dilbert'}, 'Wally'));
	// Output: "Hello Wally, my name is Dilbert."

## Prototypes

`Object.getPrototypeOf` returns the prototype of an object, which can be
compared to other, well-known prototypes:

	let employee = {superiour: 'Pointy Haired Boss'};
	let wages = [100000, 120000, 110000];
	let sayHi = (toWhom) => `Hi, ${toWhom}!`;

	console.log(Object.getPrototypeOf(employee) === Object.prototype); // true
	console.log(Object.getPrototypeOf(wages) === Array.prototype);     // true
	console.log(Object.getPrototypeOf(sayHi) === Function.prototype);  // true

An object can be created using a specific prototype using `Object.create`:


	let employee = { manager: 'Pointy Haired Boss'};
	let dilbert = Object.create(employee);
	dilbert.name = 'Dilbert';
	dilbert.introduce = function() {
		return `Hi, I'm ${this.name}, and I work under ${this.manager}.`;
	};
	console.log(dilbert.introduce());
	// Output: "Hi, I'm Dilbert, and I work under Pointy Haired Boss." 

A function called with the `new` keyword is considered a _constructor_. A
constructor's name is capitalized by convention. The resulting object gets the
prototype of the constructor assigned:

	function Employee(name) {
		this.name = name;
	}

	Employee.prototype.sayHi = function() {
		return `Hi, I'm ${this.name}.`;
	};

	let dilbert = new Employee('Dilbert');
	console.log(dilbert.sayHi()); // Output: "Hi, I'm Dilbert."

The `hasOwnProperty` method distinguishes between an object's own properties
and properties inhereted from their prototype:

	let dilbert = {
		name: 'Dilbert',
		sayHi: function() {
			return `Hi, I'm ${this.name}`;
		}
	};
	console.log(dilbert.hasOwnProperty('sayHi'));    // true
	console.log(dilbert.hasOwnProperty('toString')); // false

## Classes

The `class` notation is more familiar to users of other object-oriented
programming languages:

	class Employee {
		constructor (name) {
			this.name = name;
		}
		sayHi() {
			return `Hi, I'm ${this.name}.`;
		};
	}


	let dilbert = new Employee('Dilbert');
	console.log(dilbert.sayHi()); // Output: "Hi, I'm Dilbert."

TODO: Polymorphism (p. 105)

TODO: Getters, Setters, Static (p. 109)

TODO: Inheritance and instanceof (p. 111/112)

## Map

The `Map` type allows to store key-value pairs:

	let payroll = new Map();
	payroll.set('Dilbert', 120000);
	payroll.set('Wally', 100000);
	payroll.set('Alice', 110000);
	payroll.set('Boss', 250000);

	for (let employee of payroll.keys()) {
		let wage = payroll.get(employee);
		console.log(`${employee} earns ${wage}.`);
	}

	let sum = 0;
	for (let wage of payroll.values()) {
		sum += wage;
	}
	console.log(`Company pays ${sum} in wages.`); 

Output:

	Dilbert earns 120000.
	Wally earns 100000.
	Alice earns 110000.
	Boss earns 250000.
	Company pays 580000 in wages.

The `entries` method is convenient for iterations where both key and value are
needed:

	let animalsLegs = new Map();
	animalsLegs.set('Flamingo', 2);
	animalsLegs.set('Octopus', 8);
	animalsLegs.set('Horse', 4);

	for (let [animal, legs] of animalsLegs.entries()) {
		console.log(`a ${animal} has ${legs} legs.`);
	}

Output:

	a Flamingo has 2 legs.
	a Octopus has 8 legs.
	a Horse has 4 legs.

A `Map` has various other methods:

- `has(key)`: returns a boolean indicating whether the map contains a key
- `delete(key)`: removes an entry by its `key`
- `clear()`: removes all entries

## Symbols

Symbols are a way to uniquely refer to an object's property, even though their
underlying name is not unique:

	const toString = Symbol('toString');
	Array.prototype[toString] = function() {
		return `Array with ${this.length} elements`;
	};
	console.log([1, 2].toString());  // 1,2
	console.log([1, 2][toString]()); // Array with 2 elements

## Iterators

Objects to be used in a `for`/`of` loop must be _iterable_, i.e. to have a
function retrievable by the `Symbol.iterator` symbol that returns an
_iterator_.

An iterator must provide a `next()` method, which:

1. Returns an object `{value: '[value]', done: '[boolean]'}`, with `value`
   being the element currently pointed to in the collection, and `done`
   indicating whether the iteration has reached the end, and
2. modifies the inner state of the iterator in order to point to the next
   element in the collection.

	class Sequence {
		constructor(from, to) {
			this.from = from;
			this.to = to;
		}
	}

	class SequenceIterator {
		constructor(sequence) {
			this.sequence = sequence;
			this.position = sequence.from;
		}
		next() {
			if (this.position <= this.sequence.to) {
				let value = this.position;
				this.position++;
				return { value, done: false };
			}
			return { value: undefined, done: true };
		}
	}

	Sequence.prototype[Symbol.iterator] = function() {
		return new SequenceIterator(this);
	};

	const seq = new Sequence(1, 5);
	for (const i of seq) {
		console.log(i);
	}

Output:

	1
	2
	3
	4
	5
