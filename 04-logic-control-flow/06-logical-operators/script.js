console.log(10 < 20 && 30 > 15 && 40 > 30); // If all are true then true. If one is false then false
console.log(10 > 20 || 30 > 15); // If one is true then true. If all are false then false

console.log('');

// ==================================================
// && - Will return "first falsy value" or the "last value" if all are truthy
// ==================================================
let a;

a = 10 && 20;
console.log(a);

a = 10 && 20 && 30;
console.log(a);

a = 10 && 0 && 30;
console.log(a);

a = 10 && NaN && '' && 30 && undefined;
console.log(a);

console.log('');

const posts = ['Post One', 'Post Two'];
a = posts.length > 0 && console.log(posts[0]); // console.log(posts[0]) is falsy because console.log() returns "undefined"
console.log(a);

console.log('');

// ==================================================
// || - Will return the "first truthy value" or the "last value" if all are falsy
// ==================================================
let b;

b = 10 || 20;
console.log(b);

b = 0 || 20;
console.log(b);

b = 0 || null || '' || undefined;
console.log(b);

console.log('');

// ==================================================
// ?? - Returns the "right side operand" when the left is "null or undefined"
// ==================================================

let c;

c = 'left side' ?? 'right side';
console.log(c);

c = 10 ?? 20;
console.log(c);

c = false ?? 100;
console.log(c);

c = 0 ?? 30;
console.log(c);

c = '' ?? 30;
console.log(c);

c = NaN ?? 100;
console.log(c);

c = null ?? 'right side';
console.log(c);

c = undefined ?? 'right side';
console.log(c);

c = null ?? 100;
console.log(c);

c = undefined ?? 1000;
console.log(c);
