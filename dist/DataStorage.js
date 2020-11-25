"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function Logging(value) {
    console.log("Logging exmaple");
    return function (constdd) {
        console.log(value);
        console.log(constdd);
    };
}
function TempleteExample(templete, id) {
    console.log("TempleteExample exmaple");
    return function (dd) {
        var iddata = document.getElementById(id);
        if (iddata) {
            iddata.innerHTML = templete;
        }
    };
}
function Log2(target, name, des) {
    console.log("accessor");
    console.log(target);
    console.log(name);
    console.log(des);
}
var DataStorage = /** @class */ (function () {
    function DataStorage(items) {
        this.items = items;
    }
    DataStorage.prototype.addItems = function (item) {
        this.items.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.items.slice(this.items.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArrays(this.items);
    };
    DataStorage = __decorate([
        Logging('value logging'),
        TempleteExample('<h1>data hi ddd ddd</h1>', 'app'),
        __param(0, Log2)
    ], DataStorage);
    return DataStorage;
}());
var items = [];
items.push("add1");
items.push("add2");
var datastorage = new DataStorage(items);
console.log(datastorage.getItems());
//# sourceMappingURL=DataStorage.js.map