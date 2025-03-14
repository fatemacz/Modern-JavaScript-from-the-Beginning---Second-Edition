// ==================================================
// ||= assigns the right side value
//          only if the left is
//                  a falsy value.
// ==================================================

// ========================
// if condition value assignment
// ========================
let a = false;
if (!a) {
    a = 10;
}
console.log(a);

// ========================
// short form - || return the "first truthy value" or the "last value" if all are falsy
// ========================
a = false;
a = a || 10;
console.log(a);

// ========================
// logical assignment form
// ========================
a = false;
a ||= 10;
console.log(a);

a = 0;
a ||= 10;
console.log(a);

a = '';
a ||= 10;
console.log(a);

a = NaN;
a ||= 10;
console.log(a);

a = null;
a ||= 10;
console.log(a);

a = undefined;
a ||= 10;
console.log(a);

console.log('');

// ==================================================
// &&= assigns the right side value
//          only if the left is
//                  a truthy value.
// ==================================================

// ========================
// if condition value assignment
// ========================
let b = 10;
if (b) {
    b = 20;
}
console.log(b);

// ========================
// short form - && return "first falsy value" or the "last value" if all are truthy
// ========================
b = 10;
b = b && 20;
console.log(b);

// ========================
// logical assignment form
// ========================
b = 10;
b &&= 20;
console.log(b);

b = true;
b &&= 20;
console.log(b);

b = 1;
b &&= 20;
console.log(b);

console.log('');

// ==================================================
// ??= assigns the right side value
//          only if the left is
//                  null or undefined.
// ==================================================

// ========================
// if condition value assignment
// ========================
let c = null;
if (c === null || c === undefined) {
    c = 20;
}
console.log(c);
// ========================
// short form - ?? returns the "right side operand" when the left is "null or undefined"
// ========================
c = null;
c = c ?? 20;
console.log(c);

// ========================
// logical assignment form
// ========================
c = null;
c ??= 20;
console.log(c);

c = undefined;
c ??= 20;
console.log(c);
