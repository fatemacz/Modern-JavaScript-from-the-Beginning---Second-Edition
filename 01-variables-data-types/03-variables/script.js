// Ways to declare a variable
// `var`, `let`, `const`

let firstName = 'Aye Chan';
let lastName = 'Zaw';
console.log(firstName, lastName);

// `var` is hoisted
console.log(greeting); // greeting is undefined but it will still run
var greeting = 'Hello';
console.log(greeting);

// console.log(age); // Uncaught ReferenceError: Cannot access 'age' before initialization
let age = 30;
console.log(age);

// console.log(school); // Uncaught ReferenceError: Cannot access 'school' before initialization
const school = 'UoA';
console.log(school);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Reassigning Variables
// `var` and `let` can be reassigned
// We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
age = 31;
console.log(age);

// With let, we can declare a value without assigning a value
let score;
score = 1;
console.log(score);

if (true) {
    score = score + 1;
}

console.log(score);

// `const` is a constant value and must be assigned a value
// `const` cannot be re-assigned
// const y; // Uncaught SyntaxError: Missing initializer in const declaration
const x = 100;

// We can not re-assign a const variable
// x = 200; // Uncaught TypeError: Assignment to constant variable.

// We can still manipulate arrays and objects using const
const arr = [1, 2, 3, 4];
// arr = [1, 2, 3, 4, 5]; // Uncaught TypeError: Assignment to constant variable.
arr.push(5);
console.log(arr);

const person = {
    name: 'Brad',
};
// person = {
//     name: 'John',
// }; // Uncaught TypeError: Assignment to constant variable.
person.name = 'John';
person.email = 'brad@gmail.com';
console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10,
    e = 20,
    f = 30;

console.log(d);
console.log(a);
