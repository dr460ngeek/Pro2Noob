// Function is a block of code.

// 1. NAMED FUNCTIONS

// function sum(a,b){
//     const result = a + b;
//     console.log('Result:', result);
// }
// sum(70, 1);

// function multiply (c,d) {
//     return c*d;
// }
// console.log("4 3's are", multiply(4,3));
// const result2 = multiply(2,3);
// console.log(result2);


// greet();
// function greet(username){
//     console.log('Hi, CJP ke bhadwo!', username+'!');
// }
// greet('Pratham');

// 2. ANONYMOUS FUNC / FUNCTION EXPRESSION
// SINCE ANONYMOUS FUNCTIONS DOES NOT SUPPORT GLOBAL HOISTING FUNCTIONALITY, IT NEEDS TO BE DECLARED FIRST INORDER TO CALL IT.
// let add = function (i, j){
//     const result = i+k;
//     return result;
// }

// 3. NESTED FUNCTIONS
// A function within a function.

// function addSquare(x, y) {
//     function multiplier(num, exp){
//         let res = 1;
//         for (let i = 1; i <= exp; i++){
//             res*=num;
//         }
//         return res;
//     }
//     return multiplier(x, y);
// }
// console.log(addSquare(4, 3));

function addSquares(n, m){
    const a = square(n);
    const b = square(m);

    function square(num){
        return num*num
    }
    return a+b;
}
console.log((addSquares(1,2)));