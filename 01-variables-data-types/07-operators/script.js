// ==================================================
// 1. Arithmetic Operators
// ==================================================

let x;

x = 5 + 5; // Addition

x = 5 - 5; // Subtraction

x = 5 * 5; // Multiplication

x = 5 / 5; // Division

x = 7 % 5; // Modulus

x = 2 ** 3; // Exponent

console.log(x);

// String Concatenation
// ========================
x = 'Hello' + ' ' + 'World';
console.log(x);

// Increment
// ========================
x = 1;
// x = x + 1;
x++;
console.log(x);

// Decrement
// ========================
x = 10;
// x = x - 1;
x--;
console.log(x);

// ==================================================
// 2. Assignment Operators
// ==================================================

x = 12;

x += 5; // x = x + 5;   // 17
x -= 5; // x = x - 5;   // 12
x *= 5; // x = x * 5;   // 60
x /= 5; // x = x / 5;   // 12
x %= 5; // x = x % 5;   // 2
x **= 5; // x = x ** 5; // 32
console.log(x);

// ==================================================
// 3. Comparison Operators
// ==================================================

// Equal to (Just the value, not the type)
// ========================
x = 2 == '2';
console.log(x);

// Equal to (Type and value)
// ========================
x = 2 === '2';
console.log(x);

// Not equal to (Just the value, not the type)
// ========================
x = 2 != '2';
console.log(x);

// Not equal to (Type and value)
// ========================
x = 2 !== 2;
console.log(x);

// Greater than and less than
// ========================
x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;

console.log(x);

// ==================================================
// 4. Bitwise Operators (JavaScript Uses 32 bits Bitwise Operands)
// ==================================================

// Bitwise "AND" (Sets each bit to 1 if both bits are 1)
// ========================
x = 7 & 13; // 0111 & 1101 = 0101
console.log(x);

// Bitwise "OR" (Sets each bit to 1 if one of two bits is 1)
// ========================
x = 7 | 13; // 0111 | 1101 = 1111
console.log(x);

// Bitwise "XOR" (Sets each bit to 1 if only one of two bits is 1)
// ========================
x = 7 ^ 13; // 0111 ^ 1101 = 1010
console.log(x);

// Bitwise "NOT" (Inverts all the bits)
// ========================
x = ~5; // ~0000 0000 0000 0000 0000 0000 0000 0101 = 1111 1111 1111 1111 1111 1111 1111 1010
console.log(x);

// Zero Fill Left Shift (Shifts left by pushing zeros in from the right and let the leftmost bits fall off)
// ========================
x = 5 << 2; // 0000 0101 << 2 = 0001 0100
console.log(x);

// Right Shift (Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off)
// ========================
x = 13 >> 2; // 0000 1101 >> 2 = 0000 0011
console.log(x);

// Zero Fill Right Shift (Shifts right by pushing zeros in from the left, and let the rightmost bits fall off)
// ========================
x = 7 >>> 2; // 0000 0111 >>> 2 = 0000 0001
console.log(x);

// ==================================================
// More Examples
// ==================================================

// Right Shift and Zero Fill Right Shift with Negative Numbers
// ========================
console.log(-8 >> 2);
// 11111111 11111111 11111111 11111000 >> 2 = 11111111 11111111 11111111 11111110
// -2

console.log(-8 >>> 2);
// 11111111 11111111 11111111 11111000 >>> 2 = 00111111 11111111 11111111 11111110
// 1073741822
// ==================================================
