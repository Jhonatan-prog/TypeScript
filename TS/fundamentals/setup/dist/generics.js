"use strict";
const scores = [];
const names = [];
function identityOne(val) {
    return val;
}
identityOne('hello');
function identityTwo(u) {
    return u;
}
identityTwo({});
function getSomething(val) {
    let index = 3;
    return val[index];
}
const getArray = (val) => {
    return getSomething([]);
};
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
getProperty(x, "b");
