console.log(sum(range(1, 10)));

function range(from, to, step=1) {
	let numbers = [];
	for (let i = from; i <= to; i += step) {
		numbers.push(i);
	}
	return numbers;
}

function sum(numbers) {
	sum = 0;
	for (let x of numbers) {
		sum += x;
	}
	return sum;
}
