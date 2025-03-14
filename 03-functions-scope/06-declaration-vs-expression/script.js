// ==================================================
// Function Declaration
// ==================================================
console.log(addDollarSign(100)); // This will work because of "hoisting"

function addDollarSign(value) {
    return '$' + value;
}

// When using declarations, you can invoke the function before the declaration. With expressions, you can not
console.log(addDollarSign(200));
console.log('');

// ==================================================
// Function Expression
// ==================================================
// console.log(addPlusSign(150)); // ReferenceError: Cannot access 'addPlusSign' before initialization

const addPlusSign = function (value) {
    return '+' + value;
};

console.log(addPlusSign(250));
