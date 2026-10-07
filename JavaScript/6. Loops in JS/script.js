// FOR LOOP

// SYNTAX
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let i=18; i>0 ; i--) {
//     console.log("Pratham", i);
// } 

// WHILE LOOP

// SYNTAX
// while (condition) {
//     (Statements)
// }

// let count = 0;
// while(count <= 5) {
//     console.log(count);
//     count++;
// }

// DO WHILE LOOP

// SYNTAX
// do {
//     (statements)
// } while (condition);

// let count = 0;
// do {
//     if (count == 0) {
//         console.log("This is the first iteration");
//     }
//     else {
//         console.log('Other iterations');
//     }
//     console.log(count);
//     count++;

// } while (count < 5);

// BREAK & CONTINUE STATEMENT(s)
let count = 0
while(count < 10) {
    count++;
    if(count==2){
        continue; // Skips a particular iteration.
    }
    else if (count==8){
        break; // Completely exits loop.
    }
    console.log(count);
}
