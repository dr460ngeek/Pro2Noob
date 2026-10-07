// Else-if ladder 
// const score = 50;

// if (score >= 90) {
//     console.log("A+");
// }else if (score >= 80) {
//     console.log("A");
// }else if (score >= 70) {
//     console.log("B+");
// }else if (score >= 60) {
//     console.log("A");
// }else{
//     console.log("Need to improve (or) Fail.");
// }   

// Switch Condition

const score = 81;

switch(score){
    case 90:
        console.log("A+");
        break;
    case 80:
        console.log("A");
        break;
    case 70:
        console.log("B+");
    case 60:
    case 50:
        console.log("B");
        break;
    default:
        console.log("Need to improve (or) Fail.");
        break;
}