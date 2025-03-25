const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: 'John', age: 20 });
    }, 1000);
});

// promise.then((data) => console.log(data));

// ==================================================
// Async Await
// ==================================================

// ========================
// Async Await with Promise
// ========================
async function getPromise() {
    const response = await promise;
    console.log(response);
}

getPromise();

// ========================
// Async Await with Fetch
// ========================

// function getUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((res) => res.json())
//         .then((data) => console.log(data));
// }

async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);
}

getUsers();

// ========================
// Async Await with arrow function
// ========================
const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    // throw new Error('Hello');

    console.log(data);
};

getPosts();
