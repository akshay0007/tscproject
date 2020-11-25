"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var result;
var arr = ["bac", "cde"];
var hoby = __spreadArrays(['rr'], arr);
hoby.push.apply(hoby, arr);
// console.log(hoby);
var person1 = {
    name: "aks"
};
var newvakye = __assign({}, person1);
newvakye.name = "ddddd";
console.log(newvakye);
console.log(person1);
var h1 = hoby[0], h2 = hoby[1], remaining = hoby.slice(2);
console.log(h1);
console.log(h1);
console.log(remaining);
//# sourceMappingURL=main.js.map