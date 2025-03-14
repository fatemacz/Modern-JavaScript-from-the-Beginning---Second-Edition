let x;

const num = new Number(13.4217);
console.log(num);

// toString() - returns a string representation of the number
// ========================
x = num.toString();
console.log('toString:', x);

// To get the length
// ========================
x = num.toString().length;
console.log('toString().length:', x);

// toFixed() - returns a string representation of the number with a specified number of decimals
// ========================
x = num.toFixed(2);
console.log('toFixed(2):', x);

// toPrecision() - returns a number with the specified length
// ========================
x = num.toPrecision(3);
console.log('toPrecision(3):', x);

// toExponential() -  convert a number to exponential notation and return its value as a string
// ========================
x = num.toExponential(2);
console.log('toExponential(2):', x);

// toLocaleString() - returns a string representation of the number, using the current locale
// ========================
x = num.toLocaleString('en-US');
console.log("toLocaleString('en-US'):", x);

// valueOf - Get value
// ========================
x = num.valueOf();
console.log('num.valueOf():', x);

// ==================================================
// The Number object itself has some properties and methods
// ==================================================

// Largest and smallest possible number
// ========================
x = Number.MAX_VALUE;
console.log('Number.MAX_VALUE:', x);

x = Number.MIN_VALUE;
console.log('Number.MIN_VALUE:', x);
