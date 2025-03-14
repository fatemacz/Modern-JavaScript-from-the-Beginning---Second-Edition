// ==================================================
// Create object using the object constructor
// ==================================================
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

console.log('todo:', { ...todo });
console.log('');

// Get array of object keys
// ========================
console.log('Object.keys(todo):', Object.keys(todo));

// Get length of an object
// ========================
console.log('Object.keys(todo).length:', Object.keys(todo).length);

// Get array of object values
// ========================
console.log('Object.values(todo):', Object.values(todo));

// Get array of object key/value pairs
// ========================
console.log('Object.entries(todo):', Object.entries(todo));

// Check if object has a property
// ========================
console.log("todo.hasOwnProperty('age'):", todo.hasOwnProperty('age'));

console.log('');

// ==================================================
// Object Nesting
// ==================================================
const person = {
    address: {
        coords: {
            lat: 42.9384,
            lng: -71.3232,
        },
    },
};

console.log('person:', { ...person });

console.log('person.address.coords.lat:', person.address.coords.lat);
console.log('');

// ==================================================
// Spread operator
// ==================================================
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
console.log('obj1:', obj1);
console.log('obj2:', obj2);

// const obj3 = { obj1, obj2 };
// console.log('{ obj1, obj2 }:', obj3);

const obj4 = { ...obj1, ...obj2 };
console.log('{ ...obj1, ...obj2 }:', obj4);

// ==================================================
// Object.assign()
// ==================================================
// Same as using spread operator ...
const obj5 = Object.assign({}, obj1, obj2);
console.log('Object.assign({}, obj1, obj2):', obj5);
console.log('');

// ==================================================
// Array of objects
// ==================================================
const todos = [
    { id: 1, name: 'Buy Milk' },
    { id: 2, name: 'Pickup kids from school' },
    { id: 3, name: 'Take out trash' },
];
console.log('todos:', todos);

console.log('todos[0].name:', todos[0].name);
