"use strict";
exports.__esModule = true;
exports.decodedValue = void 0;
function decodedValue(colors) {
    // obj type
    var ColorValues = {
        black: '0',
        brown: '1',
        red: '2',
        orange: '3',
        yellow: '4',
        green: '5',
        blue: '6',
        violet: '7',
        grey: '8',
        white: '9'
    };
    return Number("".concat(ColorValues[colors[0]])
        .concat(ColorValues[colors[1]]));
}

console.log(decodedValue(['red', 'brown']))

exports.decodedValue = decodedValue;
