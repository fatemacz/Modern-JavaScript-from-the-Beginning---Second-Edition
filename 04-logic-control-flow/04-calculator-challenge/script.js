// ========================
// Solution 1
// ========================
// function calculator(num1, num2, operator) {
//     let result;

//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             result = 'Invalid Operator';
//     }

//     console.log(result);
//     return result;
// }

// calculator(5, 2, '+'); // returns 7
// calculator(5, 2, '-'); // returns 3
// calculator(5, 2, '*'); // returns 10
// calculator(5, 2, '/'); // returns 2.5
// calculator(5, 2, '&'); // returns 'Invalid Operator'

// ========================
// Solution 2
// ========================
function calculator(num1, num2, operator) {
    let result = 'Invalid Operator';

    if (operator == '+') result = num1 + num2;
    if (operator == '-') result = num1 - num2;
    if (operator == '*') result = num1 * num2;
    if (operator == '/') result = num1 / num2;

    console.log(result);
    return result; // it is optional to return the result
}

calculator(5, 2, '+'); // returns 7
calculator(5, 2, '-'); // returns 3
calculator(5, 2, '*'); // returns 10
calculator(5, 2, '/'); // returns 2.5
calculator(5, 2, '&'); // returns 'Invalid Operator'

console.log('');

// ========================
// Just some sample codes (not part of the challenge)
// ========================
const calculate = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
    default: () => 'Invalid Operator',
};

function calculator2(num1, num2, operator) {
    console.log(
        calculate[operator] // check if the operator (which is key) exists in the object
            ? calculate[operator](num1, num2)
            : calculate['default']()
    );
}

calculator2(5, 2, '+'); // returns 7
calculator2(5, 2, '-'); // returns 3
calculator2(5, 2, '*'); // returns 10
calculator2(5, 2, '/'); // returns 2.5
calculator2(5, 2, '&'); // returns 'Invalid Operator'
