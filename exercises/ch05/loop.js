const loop = (value, test, update, body) => {
	while (test(value)) {
		body(value);
		value = update(value);
	}
};

loop(1, v => v % 3 !== 0 || v % 5 !== 0, v => v + 1, console.log);
