/*
    JavaScript is a single-threaded language (and synchronous), meaning it can only execute one task at a time.
    The JavaScript engine creates a special environment to handle the transformation and execution of code.
    This environment is called the execution context.
    It contains the currently running code and everything that aids in its execution.

    There is a global execution context as well as a function execution context for every function call.

    Execution context:
        - Memory: This is the variable environment that stores all of your variables and functions as key-value pairs in "memory".
        - Execution (Code): This is the thread of execution. Each line of code is executed line by line.
    
    Execution context has two phases:
    1. Memory creation phase:
        - create a global object ("window" object in the browser, "global" object in Node.js).
        - create the 'this' object and bind it to the global object.
        - setup memory heap for storing variables ("Script" if not var) and function references ("Global").
        - store functions and variables in global execution context and set to 'undefined'. (check "Script" part - <value unavailable>)

    2. Execution phase:
        - execute the code line by line.
        - create a new execution context for each function call.
*/

//  Go to 'Sources' tab and add a breakpoint at the first line and step through to see the execution phase in action

const x = 100;
const y = 50;

function getSum(n1, n2) {
    const sum = n1 + n2;
    return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);
