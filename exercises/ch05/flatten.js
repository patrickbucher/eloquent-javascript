const flatten = arr => {
	let result = arr.reduce((flattened, element) => {
		if (typeof element === 'number') {
			flattened.push(element);
		} else if (typeof element === 'object') {
			let tmp = flatten(element);
			for (let e of tmp) {
				flattened.push(e);
			}
		}
		return flattened;
	}, []);
	return result;
};

let flat = flatten([1, 2, [3, 4, [5, 6, 7, [8, [9, 10], 11], 12], 13], 14]);
for (let e of flat) {
	console.log(e);
}
