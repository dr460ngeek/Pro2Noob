// JS arrays are Dynamically typed, they can hold any data types: strings, numbers, objects and boolean (true/false.)
// arrName = ['Suresh','Mukesh','Rakesh',true, 123, function dummyFunc() {console.log("Dummy function")}, {name: 'Pratham', age:21  }];
// indexing by default starts with '0'

// console.log(arrName);
// console.log(arrName[1]);    

// Prints the length of the array
// console.log(arrName.length);

// Prints the type of variable stored at the index 6
// console.log(typeof(arrName[6]));

// Reassignment
// let newArr = arrName;   
// console.log(newArr);
// newArr[1] = 'Pratham';  
// console.log(newArr);
// console.log(arrName); // This should still show "Pratham" at 2nd element.

// Prints the index no. of where "Suresh" is stored in the array.
// console.log(newArr.indexOf("Suresh"));

// Prints whether the value is present in the array or not. If yes, true. If not present, false.
// console.log(newArr.includes("Rakesh"));  

// Add something in the end.
// newArr.push("Laptop");

// Add something at the start.
// newArr.unshift("Laptop");

// Delete the last element.
// newArr.pop("");

// Delete the starting element.
// newArr.shift();
// console.log(arrName);

let marks = [60, 40, 50, 80, 90, 44, 69, 56, 92];
console.log(marks);

// marks.sort();
// console.log(marks);

// Prints whatever is present in index 2 (start) to before 6 (end is excluded).
// let subMarks = marks.slice(2, 4);
console.log( marks.slice(2, 4));