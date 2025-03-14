const age = 21;

// ==================================================
// Single statements
// ==================================================

// ========================
// Using an if statement
// ========================
if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You can not vote');
}

console.log('');

// ========================
// Using a ternary operator
// ========================
/*
                     if true       if false
                    ---------     ----------
        condition ?  action1   :   action2;
*/

age >= 18 ? console.log('You can vote!') : console.log('You can not vote');

console.log('');

// ==================================================
// Assigning a conditional value to a variable
// ==================================================
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote';

console.log(canVote, canVote2);

console.log('');

// ==================================================
// Multiple statements
// ==================================================
const auth = true;
let redirect;

// ========================
// Long version
// ========================
if (auth) {
    console.log('Welcome to the dashboard');
    redirect = '/dashboard';
} else {
    console.log('Access Denied');
    redirect = '/login';
}
console.log(redirect);

console.log('');

// ========================
// Shorter ternary version
// ========================
/*
                    if true             if false
                    ---------           ----------
    condition ? (action1, action2) : (action3, action4);
*/

redirect = auth
    ? (console.log('Welcome to the dashbaord'), '/dashboard')
    : (console.log('Access Denied'), '/login');
console.log(redirect);

console.log('');

// ==================================================
// Ternary with no else
// ==================================================
auth ? console.log('Welcome to the dashboard') : null; // to do nothing in the else part.

console.log('');

// ==================================================
// Shorthand for ternary with no else
// ==================================================
auth && console.log('Welcome to the dashoard');
