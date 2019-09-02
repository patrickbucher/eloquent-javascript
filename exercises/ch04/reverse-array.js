let numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers));
reverseArrayInPlace(numbers);
console.log(numbers);

function reverseArray(arr) {
	let reversed = [];
	for (let x of arr) {
		reversed.unshift(x);
	}
	return reversed;
}

function reverseArrayInPlace(arr) {
	for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
		let tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}
}
