// IIFE Syntax (Has it's own scope and runs right away)
// to avoid global scope pollution

/*
    const user = 'John'; // SyntaxError: Identifier 'user' has already been declared (at script.js:1:1), otherscript.js in this case

    depending on the order of the script tags in the HTML file, the error may be different
    In this case, below is what index.html looks like:
        <script src="otherscript.js"></script>
        <script src="script.js"></script>
    
    If the order is reversed, the error will be for otherscript.js and scripts in this file will run successfully.
*/

// ==================================================
// IIFE or Immediately Invoked Function Expression
// ==================================================

// ========================
// Without Params
// ========================
(function () {
    console.log('Unamed IIFE');
})();

(function hi() {
    console.log('Named IIFE');
})();

console.log('');

// ========================
// With Params
// ========================

(function (params) {
    console.log('Unamed IIFE with params:', params);
})('params here!');

(function hi(params) {
    console.log('Named IIFE with params:', params);
})('params here!');

console.log('');

(function (name) {
    console.log('Hi,', name);
})('Aye');
console.log('');

(function hi(name) {
    console.log('Hi,', name);
})('Tin');
console.log('');

// ==================================================
// Unamed IIFE
// ==================================================
(function () {
    const user = 'John';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();
console.log('');

// ==================================================
// Named IIFE
// ==================================================

// ========================
// These can only be called recursively (within itself)
// ========================
(function hello() {
    console.log('Hello');
})();

// hello(); // ReferenceError: hello is not defined
console.log('');

// ========================
// It is not recommended to call a named IIFE recursively as it will crush the browser.
// ========================
// (function hello() {
//     console.log('Hello');
//     hello(); // Recursive call. Will run forever.
// })();
