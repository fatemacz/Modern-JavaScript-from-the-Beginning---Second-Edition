let x;

// Array Literal
// ========================
const numbers = [12, 45, 33, 29, 39, 102];
console.log('numbers:', numbers);
console.log('numbers.length:', numbers.length);

const mixed = [12, 'Hello', true, null];
console.log('mixed:', mixed);
console.log('mixed.length:', mixed.length);

// Array Constructor
// ========================
const fruits = new Array('apple', 'grape', 'orange');
console.log('fruits:', fruits);
console.log('fruits.length:', fruits.length);

// Get value by index
// ========================
x = numbers[0];
console.log('numbers[0]:', x);

x = numbers[0] + numbers[3];
console.log('numbers[0] + numbers[3]:', x);

x = `My favorite fruit is an ${fruits[2]}`;
console.log('x:', x);

// Set value by index
// ========================
fruits[2] = 'pear';
console.log('fruits:', fruits);

// length is not read-only
// fruits.length = 2;

// Add value to the array by index
// ========================
fruits[3] = 'strawberry';
console.log('fruits:', fruits);

// Using the length as the index will always add on the the end
// ========================
fruits[fruits.length] = 'kiwi';
fruits[fruits.length] = 'peach';

console.log('fruits:', fruits);
