// ==================================================
// Setting object properties with the same name as a variable
// ==================================================
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
};

console.log('person:', { ...person });
console.log('person.age:', person.age);
console.log('');

// ==================================================
// Destructuring object properties
// ==================================================
const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'John',
    },
};
console.log('todo:', { ...todo });

// ========================
// Destructiong into "variables with the same name" as the object properties.
// ========================
const { id, title, user } = todo;

console.log('id:', id);
console.log('title:', title);
console.log('user:', user);
console.log('');

// ========================
// Destructiong into "variables with different names" as the object properties.
// ========================
const {
    id: todoId, // destructuring into different variable name todoId
    title: taskTitle, // destructuring into different variable name taskTitle
    // destructuring multiple levels.
    user: { name: forUser }, // destructuring into different variable name forUser.
} = todo;

console.log('todoId:', todoId);
console.log('taskTitle:', taskTitle);
console.log('forUser:', forUser);
console.log('');

// ==================================================
// Destructuring arrays & using the rest/spread operator
// ==================================================
const numbers = [23, 67, 33, 49, 52];
console.log('numbers:', numbers);

const [first, second, ...rest] = numbers;

console.log('first:', first);
console.log('second:', second);
console.log('rest:', rest);
