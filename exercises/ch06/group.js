class Group {
	constructor() {
		this.values = [];
	}
	add(value) {
		if (!this.has(value)) {
			this.values.push(value);
		}
	}
	delete(value) {
		const pos = this.values.indexOf(value);
		if (value !== -1) {
			const head = this.values.slice(0, pos);
			const tail = this.values.slice(pos + 1);
			this.values = head.concat(tail);
		}
	}
	has(value) {
		for (const v of this.values) {
			if (v === value) {
				return true;
			}
		}
		return false;
	}
	static from(iter) {
		const group = new Group();
		if (iter !== null && typeof iter[Symbol.iterator] === 'function') {
			for (let v of iter) {
				group.add(v);
			}
		}
		return group;
	}
}

const employees = new Group();

employees.add('Dilbert');
employees.add('Wally');
employees.add('Alice');

console.log(employees.has('Dilbert'));
console.log(employees.has('Pointy Haired Boss'));

console.log(employees.has('Wally'));
employees.delete('Wally');
console.log(employees.has('Wally'));

const words = Group.from(['drink', 'eat', 'sleep', 'car', 'cat'])
console.log(words.has('drink') && !words.has('beer'));
const nonsense = Group.from(123)
