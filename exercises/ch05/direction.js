// TODO: get scripts.js from http://eloquentjavascript.net/code/scripts.js
const scripts = require('./scripts')

const text = 'ᠬᠦᠮᠦᠨ Я ничего не знаю.لحضور المؤتمر الدولي العاشر ليونيكود. Ja';

const largestProperty = (obj) => {
    let max = -Infinity, largest = '';
    for (let key of Object.keys(obj)) {
        if (obj[key] > max) {
            max = obj[key];
            largest = key;
        }
    }
    return largest;
}

const withinRange = (value, lower, upper) => {
    return value >= lower && value <= upper;
}

function dominantWritingDirection(text) {
    let directions = { 'ltr': 0, 'rtl': 0, 'ttb': 0};
    Array.from(text).map(c => c.codePointAt(0)).forEach(code=> {
        scripts.forEach(script => {
            script.ranges.some(([lower, upper]) => {
                if (withinRange(code, lower, upper)) {
                    directions[script.direction] += 1;
                    return
                }
            });
        });
    });
    console.dir(directions);
    return largestProperty(directions);
}

console.log(dominantWritingDirection(text));
