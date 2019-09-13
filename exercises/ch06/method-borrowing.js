const obj = {};
obj['whatever'] = 'I do not care';
console.log(obj.hasOwnProperty('whatever')); // true

// Problem:
obj['hasOwnProperty'] = prop => false;
console.log(obj.hasOwnProperty('whatever')); // false

// Solution:
const hasOwnProperty = Object.prototype.hasOwnProperty;
console.log(hasOwnProperty.call(obj, 'whatever')); // true
