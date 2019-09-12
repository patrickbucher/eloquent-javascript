class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	plus(vec) {
		return new Vec(this.x + vec.x, this.y + vec.y);
	}
	minus(vec) {
		return new Vec(this.x - vec.x, this.y - vec.y);
	}
	get length() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}
	toString() {
		return `(x=${this.x}, y=${this.y})`;
	}
}

const v1 = new Vec(3, 4);
const v2 = new Vec(5, 2);
console.log(v1.plus(v2));
console.log(v1.minus(v2));
console.log(v1.length);
console.log(v2.length);
