function isEven(number) {
	if (number < 0) {
		return isEven(number * -1);
	} else if (number == 0) {
		return true;
	} else if (number == 1) {
		return false;
	} else {
		return isEven(number - 2);
	}
}

for (i = 1; i < 10; i++) {
	console.log(`is ${i} even? ${isEven(i)}`);
}

for (i = -9; i < 0; i++) {
	console.log(`is ${i} even? ${isEven(i)}`);
}
