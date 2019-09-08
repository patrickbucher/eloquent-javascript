const scripts = require('./scripts')

const text = 'ᠬᠦᠮᠦᠨ Я ничего не знаю.لحضور المؤتمر الدولي العاشر ليونيكود. Ja';

// TODO: refactor using a more functional style
function dominantWritingDirection(text) {
    let directions = { 'ltr': 0, 'rtl': 0, 'ttb': 0};
    for (let character of text) {
        let code = character.codePointAt(0);
        console.log(character, code);
        for (let script of scripts) {
            for (let [lower, upper] of script.ranges) {
                if (code >= lower && code <= upper) {
                    directions[script.direction] += 1;
                    break;
                }
            }
        }
    }
    let max = -1, dir = '';
    for (let prop in directions) {
        if (directions[prop] > max) {
            max = directions[prop];
            dir = prop;
        }
    }
    return dir;
}

console.log(dominantWritingDirection(text));
