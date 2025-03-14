// ========================
// 'window' is globally scoped object.
// ========================
// // window.alert('Hello');

// window is top most object level in the browser, not necessary to use "window." to access its properties
// alert('Hello');
// console.log(innerWidth);

// ========================
// Global scope variable
// ========================
const x = 100;
let y = 200;

console.log('x:', x, 'in global');
console.log('y:', y, 'in global');

function run() {
    // Access global vars in functions
    console.log('Call x:', x, 'in function');
    console.log('Call y:', y, 'in function');
    // console.log(innerHeight);
    console.log('window.innerHeight:', window.innerHeight);
}

run();
console.log('');

// ========================
// Access global vars in blocks
// ========================
if (true) {
    console.log('Call x:', x, 'in block');
}
console.log('');

function add() {
    const x = 150; // Overwriting global x (variable shadowing)
    y = 120; // Update the global variable
    const z = 50; // Function scoped variable

    console.log('x:', x, 'variable shadowing in function');
    console.log('y:', y, 'updated in function');
    console.log('z:', z, 'in function');

    console.log('x + z:', x + z);
}

console.log('x:', x, 'in global');
console.log('y:', y, 'in global');
console.log('');

// ========================
// Can not access a function scoped variable in global scope or inside another function
// ========================
add();
console.log('');

console.log('x:', x, 'in global');
console.log('y:', y, 'in global');
console.log('Call z:', z, 'in global'); // ReferenceError: y is not defined
