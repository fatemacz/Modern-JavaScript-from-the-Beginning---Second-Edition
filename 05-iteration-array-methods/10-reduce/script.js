const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
    reduce() executes 
        a reducer function 
        on each element of the array
        resulting in a single output value.

        accumulator: the returned value of the previous iteration
        initialValue: the initial value of the accumulator

    array.reduce(function (accumulator, currentValue) { statements }, initialValue);

    array.reduce((accumulator, currentValue) => statement, initialValue);
    
*/

// ==================================================
// Add all numbers together
// ==================================================
const sum1 = numbers.reduce(function (accumulator, currentValue) {
    // accumulator = accumulator + 1;
    return accumulator + currentValue;
}, 0);

console.log(sum1);

// ========================
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum2);
console.log('');

// ==================================================
// Using a for loop
// ==================================================
const sum3 = () => {
    let acc = 0;
    for (const cur of numbers) {
        acc += cur;
    }
    return acc;
};

console.log(sum3());
console.log('');

// ==================================================
// Shopping cart example (objects)
// ==================================================
const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
];

const total = cart.reduce(function (acc, product) {
    return acc + product.price;
}, 0);

console.log(total);
