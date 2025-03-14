// ========================
// If Statement Syntax
// ========================
if (true) {
    console.log('This is true');
}

if (false) {
    console.log('This is NOT true');
}

console.log('');

// ========================
// Evaluation expressions
// ========================
const x = 10;
const y = 5;

if (x >= y) {
    console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
    console.log(`${x} is equal to ${y}`);
} else {
    console.log(`${x} is NOT equal to ${y}`);
}

console.log('');

// ========================
// Block scope
// ========================
if (x !== y) {
    const z = 20;
    console.log(`z is ${z}`);
}

// console.log(z); // Throw error

console.log('');

// ========================
// Shorthand If/Else
// ========================
if (x >= y)
    console.log(`${x} is greater than or equal to ${y}`),
        console.log('This is true');
else console.log('This is false');

console.log('');

(a = 1), (b = 2);
if (a < b) console.log('a is less than b.'), console.log('They are not equal!');
else console.log('a is greater than or equal to b');
