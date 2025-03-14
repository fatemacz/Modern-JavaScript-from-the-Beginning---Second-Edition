// ==================================================
// Falsy Values: (Remember these six falsy values)
// ==================================================
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// ==================================================
// Truthy Values:
// ==================================================
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x = function () {};

if (x) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

console.log(Boolean(x));

console.log('');

// ==================================================
// Truthy and falsy caveats
// ==================================================
const children = 0;

// ==================================================
// Checking for literal 0
// ==================================================
if (children) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of children');
}

// Solution
if (!isNaN(children) || children !== undefined) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of children');
}

console.log('');

// ==================================================
// Checking for empty arrays
// ==================================================
const posts = [
    // 'Post 1', 'Post 2'
];

// ========================
// Always true even when empty
// ========================
if (posts) {
    console.log('List Posts');
} else {
    console.log('No Posts To List');
}

// Solution
if (posts.length > 0) {
    console.log('List Posts');
} else {
    console.log('No Posts To List');
}

console.log('');

// ==================================================
// Checking for empty objects
// ==================================================
const user = {
    // name: 'Brad',
};

// ========================
// Always true, even when no properties
// ========================
if (user) {
    console.log('List User');
} else {
    console.log('No User');
}

// Solution
if (Object.keys(user).length > 0) {
    console.log('List User');
} else {
    console.log('No User');
}

console.log('');

// ==================================================
// Loose Equality (==)
// ==================================================
console.log(false == 0); // true
console.log('' == 0); // true
console.log(null == undefined); // true

console.log('');

// ==================================================
// Strict Equality (===)
// ==================================================
console.log(false === 0); // false
console.log('' === 0); // false
console.log(null === undefined); // false
