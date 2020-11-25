"use strict";
var buttonClick = document.querySelector('button');
buttonClick.addEventListener('click', clickFunctionCall.bind(null, "clickdata"));
function clickFunctionCall(clickArg) {
    console.log("here is click" + clickArg);
}
//# sourceMappingURL=clickfile.js.map