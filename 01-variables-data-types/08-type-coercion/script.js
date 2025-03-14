let x;

// Coerced to a string
// ========================
x = 5 + '5';
console.log(x, typeof x);

x = 5 + Number('5');
console.log(x, typeof x);

// Coerced to a number
// ========================
x = 5 * '5';
console.log(x, typeof x);

// null is coerced to 0 as it is a `falsy` value
// ========================
x = 5 + null;
console.log(x, typeof x);

x = Number(null);
console.log(x, typeof x);

x = Number(true);
console.log(x, typeof x);

x = Number(false);
console.log(x, typeof x);

// true is coerced to a 1
// ========================
x = 5 + true;
console.log(x, typeof x);

// false is coerced to 0 (falsy)
// ========================
x = 5 + false;
console.log(x, typeof x);

// Undefined is coerced to 0 (falsy)
// ========================
x = 5 + undefined;
console.log(x, typeof x);
