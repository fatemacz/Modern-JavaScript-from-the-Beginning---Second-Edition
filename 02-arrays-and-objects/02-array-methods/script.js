let x;

const arr = [28, 38, 44, 29, 109];
console.log('arr:', arr);

// push() - Push a value on to the end of the array
arr.push(100);
console.log('arr.push(100):', arr);

// pop() - Take the last value off
arr.pop();
console.log('arr.pop():', arr);

// unshift() - Add a value to the beginning of the array
arr.unshift(99);
console.log('arr.unshift(99):', arr);

// shift() - Remove first value
arr.shift();
console.log('arr.shift():', arr);

// reverse() - Reverse an array
arr.reverse();
console.log('arr.reverse():', arr);

// includes() - Check to see if something is in the array
x = arr.includes(445);
console.log('arr.includes(445):', x);

// indexOf() - Return the index of the first match
x = arr.indexOf(38);
console.log('arr.indexOf(38):', x);

// Return array as a string
x = arr.toString();
console.log('arr.toString():', x);

x = arr.join();
console.log('arr.join():', x);

// slice() returns selected elements in an array, as a new array.
// Slice takes in the index of the first element and the index of the last element to be included in the new array.
x = arr.slice(3);
console.log('arr.slice(3):', x);
x = arr.slice(1, 4);
console.log('arr.slice(1, 4):', x);

// splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument.
// it also """mutates the original array""" where slice() does not.
x = arr.splice(1, 3);
console.log('arr.splice(1, 3):', x);
console.log('arr:', arr);

x = arr.splice(1);
console.log('arr.splice(1):', x);
console.log('arr:', arr);

// x will be equal to a new array with that plucked out value.
const arr2 = [15, 25, 35, 45, 55];
console.log('arr2:', arr2);
x = arr2.splice(2, 2);
console.log('arr2.splice(2, 2):', x);
console.log('arr2:', arr2);

// ==================================================
// Chaining methods - Some methods can be chained depending on the return value.
// ==================================================
const arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('arr3:', arr3);
x = arr3.slice(1, 4).reverse().toString().charAt(0);
console.log('arr.slice(1, 4).reverse().toString().charAt(0):', x);
