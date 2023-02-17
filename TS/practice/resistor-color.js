"use strict";
exports.__esModule = true;
exports.COLORS = exports.colorCode = void 0;
var colorCode = function (input) {
    if (typeof input === 'object') {
        return input;
    }
    var returned_array = (0, exports.COLORS)();
    var resistors = {};
    returned_array.map(function (color, index) {
        resistors[color] = index;
        return resistors;
    });
    return resistors[input];
};
exports.colorCode = colorCode;
function callFuntion(wrapped) {
    return function () {
        return wrapped();
    };
}
exports.COLORS = callFuntion(function () {
    return [
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'violet',
        'grey',
        'white',
    ];
});

console.log(colorCode([
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
]))
