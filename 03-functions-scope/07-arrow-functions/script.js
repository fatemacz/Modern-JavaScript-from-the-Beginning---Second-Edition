// ==================================================
//  Normal function declaration
// ==================================================
// function add(a, b) {
//   return a + b;
// }

// ==================================================
// Arrow function syntax (ES6 Updates)
// ==================================================
const add = (a, b) => {
    return a + b;
};

console.log(add(1, 2));
console.log('');

// ========================
// Implicit Return
// ========================
const subtract = (a, b) => a - b;

console.log(subtract(10, 5));
console.log('');

// ========================
// Can leave off () with a single param
// ========================
// const square = a => a ** 2;
const double = (a) => a * 2; // bcos of autofomatter

// console.log(square(10));
console.log(double(10));
console.log('');

// ========================
// Returning an object literal. Must wrap in ()
// ========================
const createObj = () => ({
    name: 'Brad',
});
console.log(createObj());
console.log('');

// ========================
// Normal function in a callback
// ========================
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
    console.log(n);
});
console.log('');

// ========================
// Arrow function in a callback
// ========================
numbers.forEach((n) => console.log(n)); // Arrow function. Same as above.
console.log('');

// ==================================================
// Examples
// ==================================================
const logMe = () => console.log('Printing...');
logMe();
