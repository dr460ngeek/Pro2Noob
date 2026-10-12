// Named Functions
// function greet(){
//     console.log('Hey Everyone!');
// }
// greet();

// Anonymous Function / Function Expression
// let greet2 = function (){
//     console.log('Good morning');
// }
// greet2();

// NEW
// * Arrow Functions *
// let greet3 = () => {
//     console.log('Good morning');
// }
// greet3();

// Example 2
// const greet = (count) => {
//     console.log('Hello all!', count);
// }
// greet(2);

// const square = (num) =>{
//     return num*num;
// }

// Instead above code, you can wrap it into a single line.
// const square = (num) => num*num; 
// console.log(square(2));

// * Callback Functions *
const calculate = (a, b, operation) => {
    return operation(a, b);
}

// Named Function - Method 1
// function sub(a, b){
//     return a-b;
// }
// const subtraction = calculate(2, 3, sub);
// console.log(subtraction);


// Anonymous Function - Method 2

// const summation = calculate(2, 3, function (n1, n2){
//     return n1+n2;
// });
console.log(summation);

// console.log(calculate(2,3, function(n1, n2){
//     return n1+n2;
// }));



// Arrow Function - Method 3
// const mult = (a, b) => a*b ;
// const multiplication = calculate(2, 3, mult);
// console.log(multiplication);



// const arr = [2, 5, 6, 8, 0, -3, -5, -2];

// Method 1 
// const printFirstNegativeNum = (num) => num <0

// Method 2
// const printFirstNegativeNum = (num) => {
//     return num < 0;
// }

// Method 3
// const printFirstNegativeNum = (num) => {
//     if(num<0){
//         return num;
//     }
// }

// Callbacks
// const result = arr.find(printFirstNegativeNum);
// const result = arr.findIndex(printFirstNegativeNum);
// console.log(result);

// arr.forEach((num, index)=>{
//     console.log(num, index)
// });