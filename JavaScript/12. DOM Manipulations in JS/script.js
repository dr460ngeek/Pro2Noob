// console.log(document.body);

// const bodyBackground = document.body;
// bodyBackground.style.backgroundColor = "green";

// 1st approach
// const box4 = document.getElementById('box-4');
// console.log(box4);

// 2nd approach
// const div = document.getElementsByTagName('div');
// console.log(div);

// 3rd approach
// const boxes = document.getElementsByClassName('box');
// console.log(boxes);

// Modifying HTML Elements
// const box1 = document.getElementById('box-1');
// can change the text and also insert a new element
// box1.innerHTML = "<b>Rohan Kinnal</b>"
// Just changes the text
// box1.innerText = "Rohan Kinnal"
// (or)
// document.getElementById('box-1').innerText = 'Fuck You';

// const box1 = document.getElementById('box-1');
// box1.style.backgroundColor="Yellow";

// Add a class
// const box2 = document.getElementById('box-2');
// box2.classList.add('circle');
// Remove an existing class
// const box3 = document.getElementById('box-3');
// box3.classList.remove('circle');

// Adding classes to multiple elements at once
// const boxes = document.getElementsByClassName('box');

// for (let i = 0;i<boxes.length;i++){
//     boxes[i].classList.add('circle');
// }

// Creating a new element
// 1st is to get the access
// 2nd is the contents
// 3rd is appending

// const newPara = document.createElement('p');
// newPara.innerText='This is our new Paragraph';

// const conta = document.getElementById('container');
// conta.appendChild(newPara);
// (or)
// document.getElementById('container').appendChild(newPara);
// newPara.classList.add('box');
// newPara.classList.add('circle');