// Asynchronous way
// setTimeout(function(){
//     console.log("This shall be executed 3 seconds later.");
// }, 3000)

// Synchronous way
// console.log("First");
// console.log("Second");
// console.log("Third");

function getCandies(callback1){
    setTimeout(() =>{
        const candies = '🍬';
        console.log("In our getCandies method:", candies);
        callback1(candies)
    }, 3000);
}

function handOverKeys(candies, callback2) {
    setTimeout(() =>{
        const keys = candies + '🔑';
        console.log("In our handOverCandies method:", keys);
        callback2(keys)
    }, 3000);
}
function onboarding(keys, callback3) {
    setTimeout(() =>{
        const onboarded = keys + '🏛️';
        console.log("In our onboarding method:", onboarded);
        callback3(onboarded)
    }, 3000);
}

getCandies((candies)=>{
    handOverKeys(candies, (keys)=>{
        onboarding(keys, (onboarded) => {
            console.log("Welcome to our restaurant", onboarded);
        });
    });
});