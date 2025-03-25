// ==================================================
// Create a promise
// ==================================================

// ========================
// calling promise on variable
const promise = new Promise((resolve, reject) => {
    // Do some async task
    setTimeout(() => {
        console.log('Async task complete');
        resolve();
    }, 1000);
});

promise.then(() => {
    console.log('Promise consumed..');
    console.log('');
});

// ========================
// calling promise directly on Promise object
// ========================
new Promise((resolve, reject) => {
    // Do some async task
    setTimeout(() => {
        console.log('Async task 2 complete');
        resolve();
    }, 1000);
}).then(() => {
    console.log('Promise 2 consumed..');
    console.log('');
});

// ========================
// Promise with parameters
// ========================

new Promise((resolve, reject) => {
    // Do some async task
    setTimeout(() => {
        resolve({ name: 'John', age: 30 });
    }, 1000);
}).then((user) => {
    console.log(user);
    console.log('');
});

// ========================
// resolve and reject
// ========================
const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true; // change to true to see the error

        if (!error) {
            resolve({ name: 'John', age: 30 });
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
});

getUser
    .then((user) => console.log(user))
    .catch((error) => console.log(error))
    .finally(() => console.log('The promise has been resolved or rejected'));

console.log('Hello from global scope');
console.log('');
