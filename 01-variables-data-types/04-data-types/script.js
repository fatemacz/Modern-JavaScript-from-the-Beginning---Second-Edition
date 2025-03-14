// Primitive Types
//==============================================================================
// String
const firstName = 'Aye';
console.log(firstName, typeof firstName);

// Number
const age = 30;
const temp = 98.9;
const penalty = -10;
console.log(age, typeof age);
console.log(temp, typeof temp);
console.log(penalty, typeof penalty);

// Boolean
const hasKids = true;
const isMarried = false;
console.log(hasKids, typeof hasKids);
console.log(isMarried, typeof isMarried);

// Null (empty value)
const aptNumber = null;
console.log(aptNumber, typeof aptNumber); // Object
// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

// Undefined
let score;
// const score = undefined; // Not recommended. Explicitly set to undefined
console.log(score, typeof score);

// Symbol (ES6) - Built-in unique identifier
const id = Symbol('id');
console.log(id, typeof id);

// BigInt (ES6) - used for large numbers (greater than 2^53 - 1)
// const n = 9007199254740992; // 2^53 too large to be represented accurately as integers.
const n = 9007199254740992n;
console.log(n, typeof n);
//==============================================================================

// Reference Types
//==============================================================================
const numbers = [1, 2, 3, 4];
console.log(numbers, typeof numbers);

const person = {
    name: 'Brad',
};
console.log(person, typeof person);

function sayHello() {
    console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3
