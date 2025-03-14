// Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
const myString = 'developer';

let myNewString;

// Solution 1:
solution1 = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(solution1);

// Solution 2:
solution2 = myString[0].toUpperCase() + myString.substring(1);
console.log(solution2);

// Solution 3:
solution3 = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log(solution3);

// Solution 4:
solution4 = myString.replace(myString[0], myString[0].toUpperCase());
console.log(solution4);
