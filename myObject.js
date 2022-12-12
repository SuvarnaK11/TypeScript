"use strict";
exports.__esModule = true;
var anyObject = {
    name: "radha",
    email: "r@r.com"
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "radha", isPaid: true });
function MyCourse() {
    return {}; //magic- function should return an object
}
function newCourse() {
    return { name: "angular14", price: 399 };
}
//createUser({name:"sonu", isPaid:false, email:"s@s.com"})     //error
var newUser = { name: "sonu", isPaid: false, email: "s@s.com" };
createUser(newUser); //perfect
