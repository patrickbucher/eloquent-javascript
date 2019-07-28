# Values, Types, and Operators

Template literals `${}` are only evaluated in strings within backticks:

	`two times three is ${2 * 3}` // "two times three is 6"
	"two times three is ${2 * 3}" // "two times three is ${2 * 3}"

The `typoeof` operator returns the type of an expression as a string:

	typeof "foo" 	 // "string"
	typeof 4.5  	 // "number"
	typeof NaN 		 // "number"
	typeof false	 // "boolean"
	typeof null      // "object"
	typeof undefined // "undefined"

`NaN` does not equal to itself:

	NaN == NaN // false

A division by zero yields `Infinity`:

	3 / 0  // Infinity
	-3 / 0 // -Infinity

Automatic type coercion can have surprising results:

	"5" + 1 // "51" (string concatenation, 1 converted to string)
	"5" - 1 // 4 (subtraction, "5" converted to number)

	"foo" * 3 // NaN (multiplication, "foo" converted to number NaN)
	8 * null  // 0 (multiplication, "null" converted to number 0)

	false == 0  // true
	true == 1   // true
	true == -1  // false 
	true == 1.1 // false

	null == undefined // true
	undefined == NaN  // false

The comparison operators `===` and `!==` do not coerce types:

	5 == "5"  // true
	5 === "5" // false

	0 == false  // true
	0 === false // false

The logical operators `&&` and `||` convert the operands to booleans for
comparison, but yield the original value:

	null || "foo" // "foo"
	"foo" && null // null
