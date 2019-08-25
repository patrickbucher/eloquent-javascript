function countChar(str, chr) {
	let chars = 0;
	for (i = 0; i < str.length; i++) {
		if (str[i] == chr) {
			chars++;
		}
	}
	return chars;
}

function countBs(str) {
	return countChar(str, 'B');
}

let strings = ['Boo', 'boom', 'Bubu', 'BOOB'];
for (i in strings) {
	str = strings[i];
	console.log(`${str} has ${countBs(str)} Bs`);
	console.log(`${str} has ${countChar(str, 'O')} Os`);
}
