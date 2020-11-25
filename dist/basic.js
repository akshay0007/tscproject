"use strict";
function add(n1, n2, value) {
    return n1 + n2;
}
var value;
value = false;
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["USERS"] = 1] = "USERS";
})(Roles || (Roles = {}));
var person = {
    name: "abc",
    age: 3,
    hobbies: ['a', 'b'],
    role: Roles.ADMIN
};
console.log("hello dd" + person);
console.log("hello dd" + add(3, 4, value));
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase);
}
//# sourceMappingURL=basic.js.map