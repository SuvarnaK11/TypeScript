"use strict";
exports.__esModule = true;
function sum(num) {
    return num + 2;
}
sum(5); //all good
sum("5"); //not good
function add(num) {
    return num + 2;
}
//add("5") //giving error i.e. not acceptable
function getUpper(val) {
    return val.toUpperCase();
}
getUpper(543); // error is expected
function getUpperCase(val) {
    return val.toUpperCase();
}
//getUpperCase(546)   //throwing an error
getUpperCase("radha");
function signUp(name, email, isPaid) {
}
//signUp(1,2,3)
signUp("radha", "r@r.com", true);
//Arrow functions
var loginUser = function (name, email, isPaid) { };
//loginUser("radha", "r@r.com") //error  ..if I WANT TO PASS ONLY TWO VALUES
var loggedinUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loggedinUser("radha", "r@r.com");
