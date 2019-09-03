function deepEqual(a, b) {
	for (let prop in a) {
		if (!prop in b) {
			return false;
		}
		if (typeof a[prop] === 'object') {
			if (!deepEqual(a[prop], b[prop])) {
				return false;
			}
		} else {
			if (a[prop] !== b[prop]) {
				return false;
			}
		}
	}
	return true;
}

let a = {
	name: 'Dilbert',
	age: 44,
	hobbies: [
		'Programming',
		'Inventing',
		'Sleeping'
	],
	relatives: [
		{
			role: 'mother',
			name: 'Brenda',
			age: 82
		},
		{
			role: 'Dog',
			name: 'Dogbert',
			age: 12
		}
	]
}

let b = {
	name: 'Dilbert',
	age: 44,
	hobbies: [
		'Programming',
		'Inventing',
		'Sleeping'
	],
	relatives: [
		{
			role: 'mother',
			name: 'Brenda',
			age: 81 // difference here!
		},
		{
			role: 'Dog',
			name: 'Dogbert',
			age: 12
		}
	]
}

console.log('a equal a?', deepEqual(a, a));
console.log('b equal b?', deepEqual(b, b));
console.log('a equal b?', deepEqual(a, b));
