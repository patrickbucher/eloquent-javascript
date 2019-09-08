const everyLoop = (array, predicate) => {
	for (let element of array) {
		if (!predicate(element)) {
			return false;
		}
	}
	return true;
};

const everySome = (array, predicate) => {
	let opposite = pred => x => !pred(x);
	return !array.some(opposite(predicate));
};

console.log(everyLoop([1, 2, 3, 4], x => x < 5));
console.log(everyLoop([1, 2, 3, 4], x => x % 2 === 0));
console.log(everyLoop(['a', 'b', 'c'], x => typeof x === 'string'));
console.log(everyLoop(['a', 3, 'c'], x => typeof x === 'string'));

console.log(everySome([1, 2, 3, 4], x => x < 5));
console.log(everySome([1, 2, 3, 4], x => x % 2 === 0));
console.log(everySome(['a', 'b', 'c'], x => typeof x === 'string'));
console.log(everySome(['a', 3, 'c'], x => typeof x === 'string'));
