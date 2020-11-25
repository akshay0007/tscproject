"use strict";
var _a;
function addaa(eng) {
    switch (eng.type) {
        case 'cs':
            break;
        case 'stu':
            break;
    }
    // if('name' in eng){
    //     console.log(eng.name)
    // }
    // if(eng instanceof StudentDD){
    //     console.log(eng.name)
    // }
    // console.log(eng.name)
}
//  console.log(engineer.id+"="+engineer.name);
//type casting ways html
var textdd = document.getElementById('texvalu');
textdd.value = 'heello';
var errorBag = {
    name: "value is null",
    user: "must start"
};
//optional chaining
var chainingdd = {
    name: "name",
    id: "id",
    address: {
        firstLine1: "line1",
        firstLine2: "line2",
    }
};
//one ways
console.log(chainingdd.address && chainingdd.address.firstLine1);
//another ways
console.log((_a = chainingdd === null || chainingdd === void 0 ? void 0 : chainingdd.address) === null || _a === void 0 ? void 0 : _a.firstLine1);
//nullish coalescing
var ddd = null;
//1 st app
var dddd = ddd || 'defau';
//
var dddddd = undefined;
var dd = ddd !== null && ddd !== void 0 ? ddd : 'defau';
//# sourceMappingURL=typeunion.js.map