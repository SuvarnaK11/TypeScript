var User = /** @class */ (function () {
    function User(name, email, id) {
        this.state = "MH";
        this.name = name;
        this.email = email;
        this.id = id;
    }
    return User;
}());
var newUser = new User("radha", "r@r.com", 11);
newUser.city = "nashik";
// newUser.state = "KN"
