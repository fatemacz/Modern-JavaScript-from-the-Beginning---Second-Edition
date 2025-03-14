let x;

const fruits = ['apple', 'pear', 'orange'];
console.log('fruits:', fruits);
const berries = ['strawberry', 'blueberry', 'rasberry'];
console.log('berries:', berries);

console.log('');

// ==================================================
// Create a new variable and nest both arrays
// ==================================================
const allFruits = [fruits, berries];

console.log('allFruits = [fruits, berries]:', allFruits);
console.log('fruits:', fruits);
console.log('berries:', berries);

x = allFruits[1][2];

console.log('allFruits[1][2]:', x);

console.log('');

// ==================================================
// concat() - Concatenate arrays
// ==================================================
x = fruits.concat(berries);

console.log('fruits.concat(berries):', x);
console.log('fruits:', fruits);
console.log('berries:', berries);
console.log('');

// ==================================================
// spread operator (...) - Concatenate with
// ==================================================
const asianFoods = ['sushi', 'ramen', 'pho'];
console.log('asianFoods:', asianFoods);
const westernFoods = ['burger', 'pizza', 'pasta'];
console.log('westernFoods:', westernFoods);

x = [...asianFoods, ...westernFoods];

console.log('[...asianFoods, ...westernFoods]:', x);
console.log('asianFoods:', asianFoods);
console.log('westernFoods:', westernFoods);
console.log('');

// ==================================================
// Nesting arrays (berries inside of fruits)
// ==================================================
fruits.push(berries);

console.log('fruits.push(berries):', fruits);
console.log('fruits:', fruits);
console.log('berries:', berries);

// Now we can access 'blueberry' with the following
x = fruits[3][1];

console.log('fruits[3][1]:', x);
console.log('');

// ==================================================
// flat() - Flatten an array
// ==================================================
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
console.log('arr:', arr);

x = arr.flat();

console.log('arr.flat():', x);
console.log('');

// ==================================================
// Static methods of Array object
// ==================================================

// isArray() - Check is is an array
// ========================
x = Array.isArray(fruits);

console.log('Array.isArray(fruits):', x);

// from() - Create an array from an array like value
// ========================
x = Array.from('12345');

console.log("Array.from('12345'):", x);

// of() - Create an array from a set of values
// ========================
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(a, b, c, x);
