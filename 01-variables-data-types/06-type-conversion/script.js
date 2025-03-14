let amount = '99.99';
console.log(amount, typeof amount);

// Convert string to number
// =================================
// amount = parseInt(amount);
// amount = +amount;
amount = Number(amount);
console.log(amount, typeof amount);

// Convert number to string
// =================================
// amount = amount.toString(); // temporary wrapper is created for the primitive type "amount" in this case
amount = String(amount);
console.log(amount, typeof amount);

// Convert string to decimal
// =================================
// amount = parseInt(amount); // 99
amount = parseFloat(amount);
console.log(amount, typeof amount);

// Convert number to boolean
// =================================
amount = Boolean(amount);
console.log(amount, typeof amount);

// Ways to get NaN (Global Window Object Property - non-writable, non-configurable, non-enumerable)
// =================================
console.log(parseInt('foo'));
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);
