const Group = require('./group');

class GroupIterator {
	constructor(group) {
		this.group = group;
		this.index = 0;
	}
	next() {
		if (this.index < this.group.values.length) {
			const value = this.group.values[this.index];
			this.index++;
			return { value, done: false };
		}
		return { value: undefined, done: true };
	}
}

Group.prototype[Symbol.iterator] = function() {
	return new GroupIterator(this);
};

const employees = Group.from(['Alice', 'Wally', 'Dilbert']);
for (let employee of employees) {
	console.log(employee);
}
