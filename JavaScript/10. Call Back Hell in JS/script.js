// Asynchronous way
// setTimeout(function(){
//     console.log("This shall be executed 3 seconds later.");
// }, 3000)

// Synchronous way
// console.log("First");
// console.log("Second");
// console.log("Third");

function getCandies(){
    setTimeout(() =>{
        const candies = '🍬';
        console.log("Here is our candy:", candies);
        return candies;
    }, 5000);
}

console.log(getCandies());