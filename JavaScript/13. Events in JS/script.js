// Events

// 1. Event Handlers
// (onclick, onload, onmouseover, onmouseover, onkeypress, onkeydown, onkeyup).

// function onMouse(){
//     console.log("The box has been clicked");
// }

// const keyPressEvent = () => {
//     console.log("The key has been hitted");
// }

// const onKeyUp = () =>{
//     console.log("OnKey Up");
// }

// const onKeyDown = () => {
//     console.log("OnKey Down");
// }

// ==========================================

// function firstFuncCall() {
//     console.log('Func 1');
// }

// function secondFuncCall() {
//     console.log('Func 2');
// }


// 2. Event Listeners

const box1 = document.getElementById('box-1');
box1.addEventListener('click', (event) => {
    console.log("Box");
});

const cont = document.getElementById('cont');
cont.addEventListener('click', (event) => {
    console.log("Container");
}, true);


// box1.addEventListener('click', () => {
//     console.log("Click has been triggered. 2");
// });