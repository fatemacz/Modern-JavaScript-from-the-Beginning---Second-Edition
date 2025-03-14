/*
Call Stack
    - Stacks of functions to be executed.
    - Manages execution context.
    - Stacks are LIFO (Last In First Out).
    
    When a function is called, it is added to the top of the stack.
    When the function returns, it is removed from the stack.
*/

// Open 'sources' tab and put a breakpoint at the first() function

// ========================
// First Example
// ========================
function first() {
    console.log('first...');
}

function second() {
    console.log('second...');
}

function third() {
    console.log('third...');
}

first();
second();
third();

console.log('');

// ========================
// Second Example
// ========================
function firstFunc() {
    secondFunc();
    console.log('firstFunc...');
}

function secondFunc() {
    thirdFunc();
    console.log('secondFunc...');
}

function thirdFunc() {
    console.log('thirdFunc...');
}

firstFunc();
