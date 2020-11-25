"use strict";
var ChemStudent = /** @class */ (function () {
    function ChemStudent(name, id, code) {
        this.name = name;
        this.id = id;
        this.code = code;
    }
    ChemStudent.prototype.greeting = function (phrase) {
        console.log(phrase + "=name=" + this.name + "=id=" + this.id + "=code=" + this.code);
    };
    return ChemStudent;
}());
var stuValue;
stuValue = {
    name: "name akshay",
    id: "id value",
    greeting: function (value) {
        console.log(value + this.name + " with id=" + this.id);
    }
};
var firstname = stuValue.name, id = stuValue.id;
// let values:string[]=[];
// values.push("name");
// values.push("id");
// values.push("roles");
// let [nameva,id,role]=values;
stuValue = new ChemStudent(firstname, id, 'role');
stuValue.greeting("hello how are u ==");
//////arrays
var names = [];
//genric
function asssign(obj1, obj2) {
    console.log(obj1);
    console.log(obj2);
}
var ass = asssign({ name: 'addd' }, { id: 'id' });
console.log(ass);
//# sourceMappingURL=Student.js.map