// ==================================================
// Fetch Options
// ==================================================

/*
  COMMON FETCH OPTIONS
  method: HTTP method you want to use
  body: Data you want to send. Usually to be put in a database, etc
  headers: Any HTTP headers you want to send
*/

const endpoint = 'https://jsonplaceholder.typicode.com/posts';
let myPost;

// ========================
// POST REQUEST
// ========================
function createPost({ title, body }) {
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            token: 'abc123', // You can add any custom header here
            greeting: 'Hello', // You can add any custom header here
        },
        body: JSON.stringify({
            // Convert object to JSON string
            title,
            body,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            myPost = data;
        });
}

createPost({
    title: 'My Post',
    body: 'This is my Post.',
});

// ========================
// GET REQUEST
// ========================
function getPosts() {
    fetch(endpoint, {
        method: 'GET',
    }).then((data) => {
        const postElement = document.querySelector('.posts');
        data.json().then((posts) => {
            posts.forEach((post) => {
                const postElement = document.createElement('div');
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
                document.body.appendChild(postElement);
            });
        });
    });
}

// ========================
// GET REQUEST with ID
// ========================
function getMyPost() {
    // console.log(myPost);
    const myPostElement = document.querySelector('.my-post');
    myPostElement.innerHTML = `
            <h3>${myPost.title} [id: ${myPost.id}]</h3>
            <p>${myPost.body}</p>
        `;
}

const fetchMyPostBth = document.querySelector('#fetch-post');
fetchMyPostBth.addEventListener('click', getMyPost);
document.addEventListener('DOMContentLoaded', getPosts());
