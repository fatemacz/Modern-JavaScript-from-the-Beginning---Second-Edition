const x = 100;
console.log('const x:', x, 'in global');

// ==================================================
// An If statement is a block
// ==================================================
if (true) {
    const y = 200; // Block scoped
    console.log('Call const x:', x, 'in block');
    console.log('const y:', y, 'in block');
    console.log('x + y:', x + y);
}

// console.log(y); // ReferenceError: y is not defined
console.log('');

// ==================================================
// A loop is a block
// ==================================================
for (let i = 0; i <= 5; i++) {
    console.log('let i:', i, 'in loop (block)');
}

// console.log('Call let i:', i, 'in global'); // ReferenceError: i is not defined
console.log('');

// ==================================================
// Using var
// ==================================================
for (var j = 0; j <= 5; j++) {
    console.log('var j:', j, 'in loop (block)');
}

console.log('Call var j:', j, 'in global');
console.log('');

// ========================
// var IS NOT block scoped. Accessible outside the block
// ========================
// Note: Always use const or let
// var is a legacy feature of JavaScript

if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
    console.log('const a:', a, 'in block');
    console.log('let b:', b, 'in block');
    console.log('var c:', c, 'in block');
}

// console.log('Call const a:', a, 'in global'); // ReferenceError: a is not defined
// console.log('Call let b:', b, 'in global'); // ReferenceError: b is not defined
console.log('Call var c:', c, 'in global');
console.log('');

// ========================
// var IS function scoped. Cannot access outside the function
// ========================
function run() {
    var d = 100;
    console.log('var d:', d, 'in function');
}

run();

// console.log('Call var d:', d, 'in global'); // ReferenceError: d is not defined
console.log('');

// ==================================================
// const, let, var and the window object
// ==================================================
const foo = 100;
console.log('const foo is not on the window object:', window.foo);

let val = 200;
console.log('let val is not on the window object:', window.val);

var bar = 300; // Put on the window object
console.log('var bar is on the window object:', window.bar);

console.log('window object:', window);
