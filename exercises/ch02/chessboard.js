for (let i = 0; i < 8; i++) {
	let black = true;
	if (i % 2 == 0) {
		black = false;
	}
	let line = '';
	for (let j = 0; j < 8; j++) {
		if (black) {
			line += '#';
		} else {
			line += ' ';
		}
		black = !black;
	}
	console.log(line);
}
