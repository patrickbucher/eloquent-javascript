let array = [1, 2, 3, 4, 5];
let list = arrayToList(array);
console.log(nth(list, 0));
console.log(nth(list, 1));
console.log(nth(list, 2));
console.log(nth(list, 3));
console.log(nth(list, 4));

function arrayToList(arr) {
	let list = null;
	while (arr.length > 0) {
		list = prepend(arr.pop(), list);
	}
	return list;
}

function prepend(elem, list) {
	let node = {value: elem, rest: list};
	return node;
}

function nth(list, n) {
	if (n == 0) {
		return list.value;
	}
	return nth(list.rest, n-1);
}
