function variAble (callback){
    const value = "You are a gay!";
    callback(value);
}


variAble((hell)=>{
    console.log(hell);
});

// Question - 8

// function prepareFood(callback) {
//     setTimeout(function (){
//         console.log("Food Prepared!");
//         callback();
//     }, 2000);
// }

// function serveFood(callback){
//     setTimeout( function (){
//         console.log("Food served!");
//         callback();
//     }, 1000);
// }

// function finishedMeal(){
//     console.log("Meal finished!");
// }

// prepareFood(function (){
//     serveFood(finishedMeal);
// });

// Question 7

// function delayedMessage (message, callback) {
//     setTimeout(function (){
//         console.log("Message received: "+ message);
//         callback();
//     },2000);
// }
// function finished (){
//     console.log("Task completed!");
// }
// delayedMessage("Hello JavaScript!", finished);
// console.log("Waiting for message...");

// Question 6

// function calculate (a, b, successCallback, errorCallback) {
//     if (b === 0) {
//         errorCallback("Cannot divide by zero!")
//     } else {
//         successCallback(a/b);
//     }
// }
// function showResult(value) {
//     console.log("Result: "+ value);
// }
// function showError (message) {
//     console.log(message);
// }
// calculate(56, 2, showResult, showError);

// Question 5

// function checkResult (marks, callback) {
//     if (marks >= 40) {
//         callback("Passed!");
//     } else {
//         callback("Failed!")
//     }
// }

// function displayResult (str) {
//     console.log("Your result: "+ str);
// }

// checkResult(40, displayResult);

// Question 4

// function convertTemperature (celsius, callback) {
//     const fahrenheit = (celsius * 9/5) + 32;
//     callback(fahrenheit);
// }

// function displayTemperature (value) {
//     console.log('Temperature in Fahrenheit: ', value);
// }

// convertTemperature(25, displayTemperature);

// Question 3

// function processNum (a, callback) {
//     callback(a*2);
// }
// function showResult (value){
//     console.log("The doubled number is: ", value);
// }
// processNum(7, showResult);

// Question 2

// function calculateSum(a, b, callback) {
//     callback(a + b);
// }
// function displayResult(value) {
//     console.log("The sum is: " + value);
// }
// calculateSum(1, 2, displayResult);

// Question 1

// function greetStudent(name, callback) {
//     console.log("Hello, "+ name+"!");
//     callback();
// }

// function showCourse(){
//     console.log("Welcome to JavaScript!");
// }

// greetStudent("Pratham", showCourse);