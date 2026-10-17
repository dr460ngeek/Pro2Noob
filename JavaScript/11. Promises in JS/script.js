// Example: Synchronous Way:
// const ticket = new Promise(function (res, rej){
//     const isboarded = false;
//     if (isboarded) {
//         return res("You are okay to onboard");
//     } else {
//         return rej("You are not eligible to onboard");
//     }
// });

// ticket.then((data)=>{
//     console.log("whoo", data);
// }).catch((data)=>{
//     console.log("Oh noo!", data);
// }).finally(()=>{
//     console.log("This will executed all time");
// })

// Example: Asynchronous Way

function getCandies() {
    return new Promise((resolve, reject) => {
        // resolve("Success");
        setTimeout(() => {
            const candies = '🍬';
            // console.log("In our getCandies method:", candies);
            resolve(candies);
            reject("Candies out of stock!");
        }, 3000);
    })
}

function handOverKeys(candies) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const keys = candies + '🔑';
            // console.log("In our handOverCandies method:", keys);
            resolve(keys);
            reject("Keys not found!");
        }, 3000);
    });
}
function onboarding(keys) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const onboarded = keys + '🏛️';
            // console.log("In our onboarding method:", onboarded);
            resolve(onboarded);
            reject("Renovation in process, please contact our manager for more info.");
        }, 3000);
    });
}

// Async & Await
async function onboardClient(){
    try{
        const candy = await getCandies();
        console.log("Here are our candies: ", candy);
//                                 // <Parameters> need to be passed since it receives the string for chaining.
        const key = await handOverKeys(candy);
        console.log("Here is our key: ", key);
//                                 // <Parameters> need to be passed since it receives the string for chaining.
        const onboard = await onboarding(key);
        console.log("Welcome to our restaurant: ", onboard);
    }
    catch(err){
        console.log("Error occured :( "+ err);
    }
    console.log("Happy to assist!");
}

onboardClient();

// Then, catch, finally
// getCandies()
// .then ((candies)=>{
//     console.log("Here is the candy: "+ candies);
//     // below returns whatever handOverKeys(candies) returns to the .then() method, so that it can be passed to the next .then() in the promise chain.
//     return handOverKeys(candies);
// })
// .then ((keys)=>{
//     console.log("Here are your keys: "+ keys);
//     return onboarding(keys);
// })
// .then ((onboarded)=>{
//     console.log("Welcome to our restaurant: ", onboarded);
// })
// .catch((err)=>{
//     console.log("Error occured: :(", err);
// })
// .finally(()=>{
//     console.log("Happy to assist you.");
// });




// console.log(getCandies());