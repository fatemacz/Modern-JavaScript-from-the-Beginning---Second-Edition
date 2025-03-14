let x;

/*
***Note:

In JavaScript, 
when you log an object to the console, the console displays the current state of the object at the time you expand the log in the console, 
not necessarily the state of the object at the time the console.log statement was executed.

If new properties is added or modified after the console.log statement but before you expand the log in the console, 
the console will show the updated state of the person object.

In this example, you can see that the person object has a new property "hasChildren" added after the console.log statement.
When you expand the log in the console, you will see the updated state of the person object with "hasChildren" property.

To capture the state of the object at the exact time of logging, you can log a copy of the object instead of the object itself. 
Instead of using 
    console.log('person:', person);

Here's how you can do it:
    console.log('person:', { ...person });

*/

// ==================================================
// Creating an object
// ==================================================
const person = {
    name: 'Aye Chan',
    age: 38,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['music', 'sports'],
};
console.log('person:', { ...person });
console.log('');

// ==================================================
// Accessing object properties
// ==================================================
console.log('person.name:', person.name); // Dot notation
console.log("person['age']:", person['age']); // Bracket notation
console.log('person.address.state:', person.address.state);
console.log('person.hobbies[1]:', person.hobbies[1]);
console.log('person.hasChildren', person.hasChildren);
console.log('');

// ==================================================
// Updating properties
// ==================================================
person.name = 'Jane Doe';
console.log("person.name = 'Jane Doe':", { ...person });

person['isAdmin'] = false;
console.log("person['isAdmin'] = false:", { ...person });
console.log('');

// ==================================================
// Deleting properties
// ==================================================
delete person.age;
console.log('delete person.age:', { ...person });
console.log('');

// ==================================================
// Create new properties
// ==================================================
person.hasChildren = true;
console.log('person.hasChildren = true:', { ...person });
console.log('');

// ==================================================
// Add functions
// ==================================================
person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// ==================================================
// Keys with multiple words
// ==================================================
const person2 = {
    'first name': 'Brad', // not recommended to use space in key
    last_name: 'Traversy', // use camel case
};
console.log('person2:', { ...person2 });

console.log("person2['first name']:", person2['first name']);
console.log('person2.last_name:', person2.last_name);
