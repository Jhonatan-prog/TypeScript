"use strict";
exports.__esModule = true;
exports.isLeap = void 0;
function isLeap(year) {
    var yearIsLeap;
    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            yearIsLeap = true;
            return yearIsLeap;
        }
        else if (year % 400 === 0) {
            yearIsLeap = true;
            return yearIsLeap;
        }
        else {
            return false;
        }
    }
    return false;
}
exports.isLeap = isLeap;
console.log(isLeap(1800))