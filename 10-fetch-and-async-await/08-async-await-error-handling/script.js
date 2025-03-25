// ==================================================
// Error Handling with try...catch ***
// ==================================================
const getUsers = async () => {
    try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const response = await fetch('http://httpstat.us/404'); // change the URL to test the error handling

        if (!response.ok) {
            throw new Error('Request Failed (from try...catch)');
        }

        const data = await response.text();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

getUsers();

// ==================================================
// Error Handling with .catch()
// ==================================================
const getPosts = async () => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await fetch('http://httpstat.us/500');

    if (!response.ok) {
        throw new Error('Request Failed (from .catch())');
    }

    const data = await response.text();

    console.log(data);
};

getPosts().catch((error) => console.log(error));
