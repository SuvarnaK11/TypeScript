function add(num) {
    return "hello"; //must give an error
}
add(5);
function sum(num) {
    //return "hello"           //now throwing error
    return num + 2;
}
sum(5);
var login = function (password) { }; //study the difference
var logOut = function (password) { };
var signIn = function (password) {
    return "sucessful";
};
var heros = ["thor", "black widow", "spiderman"];
var myhero = heros.map(function (hero) {
    return "my hero is ".concat(hero);
    // return 123  //uncomment and see the magic
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
