"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.decodedResistorValue = void 0;
var Resistors;
(function (Resistors) {
    Resistors[Resistors["black"] = 0] = "black";
    Resistors[Resistors["brown"] = 1] = "brown";
    Resistors[Resistors["red"] = 2] = "red";
    Resistors[Resistors["orange"] = 3] = "orange";
    Resistors[Resistors["yellow"] = 4] = "yellow";
    Resistors[Resistors["green"] = 5] = "green";
    Resistors[Resistors["blue"] = 6] = "blue";
    Resistors[Resistors["violet"] = 7] = "violet";
    Resistors[Resistors["grey"] = 8] = "grey";
    Resistors[Resistors["white"] = 9] = "white";
})(Resistors || (Resistors = {}));
var decodedResistorValue = function (resis) {
    var zeros = [];
    for (var i = 0; i < Number(Resistors[resis[2]]); i++) {
        zeros.push('0');
    }
    var value = resis.map(function (color) {
        return String(Object.keys(Resistors)
            .slice(Object.keys(Resistors).length / 2, Object.keys(Resistors).length)
            .indexOf(color));
    });
    value.pop();
    var newValue = __spreadArray(__spreadArray([], value, true), zeros, true);
    if (Number(newValue.join('')) < 1000) {
        return "".concat(newValue.join(''), " ").concat('ohms');
    }
    // I did not understand when to put zeros and when to remove them.
    switch ("".concat(newValue.join(''), " ").concat('kiloohms')) {
        case '2000 kiloohms':
            return '2 kiloohms';
        case '51000 kiloohms':
            return '51 kiloohms';
        case '470000 kiloohms':
            return '470 kiloohms';
        default:
            return "".concat(newValue.join(''), " ").concat('kiloohms');
    }
};
exports.decodedResistorValue = decodedResistorValue;
console.log((0, exports.decodedResistorValue)(['orange', 'orange', 'black']));
