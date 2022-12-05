"use strict";
exports.__esModule = true;
function sum(num) {
    return num + 2;
    // return "radha"
}
sum(5);
sum(3);
function getCamel(val) {
    return val.toUpperCase();
}
function signUpuser(name, email, ID) { }
signUpuser("radha", "r@r.com", 11);
function multiply(num) {
    return num * 10;
}
// return "sum"
multiply(30);
var func = function (s) {
    return "radha";
};
var heros = ["thor", "black widow"];
heros.map(function (hero) {
    return "heros is ${hero}";
});
function errorMsg(errmsg) {
    console.log("502");
}
function showError(err) {
    throw new Error("502");
}
