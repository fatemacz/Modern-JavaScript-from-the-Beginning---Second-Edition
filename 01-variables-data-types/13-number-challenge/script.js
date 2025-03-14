x_random = Math.random();
y_random = Math.random();

// const x = Math.floor(x_random * 100 + 1);
// const y = Math.floor(y_random * 50 + 1);

const x = Math.ceil(x_random * 100);
const y = Math.ceil(y_random * 50);

console.log(x_random, x);
console.log(y_random, y);

// Get the sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

// Get the difference
const diff = x - y;
const diffOutput = `${x} - ${y} = ${diff}`;
console.log(diffOutput);

// Get the product
const prod = x * y;
const prodOutput = `${x} * ${y} = ${prod}`;
console.log(prodOutput);

// Get the quotient
const quot = x / y;
const quotOutput = `${x} / ${y} = ${quot}`;
console.log(quotOutput);

// Get the remainder
const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;
console.log(rmOutput);
