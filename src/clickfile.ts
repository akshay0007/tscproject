const buttonClick = document.querySelector('button')!;

buttonClick.addEventListener('click', clickFunctionCall.bind(null,"clickdata"))

function clickFunctionCall(clickArg: string) {
    console.log("here is click" + clickArg);
}