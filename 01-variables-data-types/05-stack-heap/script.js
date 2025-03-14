// Primitive types are stored directly in the "stack"
// ==============================================================================
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

// variables and data are stored in the "stack"
const myName = 'myNameInStack';
const age = 30;

// Reference types are stored in the "heap".
// ==============================================================================
// Arrays, Objects, Functions

// variables are stored in the "stack" and access the data stored in the "heap" by reference.
const person = {
    name: 'myNameInHeap',
    age: 40,
};

let newName = myName;
newName = 'newNameInStack';

let newPerson = person; // same data in the "heap"
newPerson.name = 'newNameInHeap'; // changes the data in the "heap"

console.log(myName, newName); // myNameInStack, newNameInStack
console.log(person, newPerson); // { name: 'newNameInHeap', age: 40 }, { name: 'newNameInHeap', age: 40 }
