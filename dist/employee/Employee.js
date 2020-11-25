"use strict";
// abstract class Dept {
//     constructor(protected dname: string) { }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     abstract set deptName(value: string);
//     abstract get deptName(): string;
// }
var Employee = /** @class */ (function () {
    function Employee(name, id) {
        this.name = name;
        this.id = id;
    }
    Object.defineProperty(Employee.prototype, "detailsOfEmployee", {
        get: function () {
            return this.name + "" + this.id;
        },
        enumerable: false,
        configurable: true
    });
    Employee.getInstance = function () {
        if (Employee.instance) {
            return this.instance;
        }
        return this.instance = new Employee("", "");
    };
    return Employee;
}());
var ItEmployee = /** @class */ (function (_super) {
    __extends(ItEmployee, _super);
    function ItEmployee(name, id, role) {
        var _this = _super.call(this, name, id) || this;
        _this.role = role;
        return _this;
    }
    Object.defineProperty(ItEmployee.prototype, "detailsOfEmployee", {
        get: function () {
            return this.name + "" + this.id + this.role;
        },
        enumerable: false,
        configurable: true
    });
    return ItEmployee;
}(Employee));
var emp = Employee.getInstance();
//# sourceMappingURL=Employee.js.map