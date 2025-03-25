function toggle(e) {
    e.target.classList.toggle('danger');
}

document.querySelector('button').addEventListener('click', toggle);

// ==================================================
// Synchronous vs Asynchronous
// ==================================================
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
];

function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

function getPosts() {
    setTimeout(() => {
        posts.forEach(function (post) {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);
        });
    }, 1000);
}

console.log('posts:', ...posts);
createPost({ title: 'Post Three', body: 'This is post' });

getPosts();
console.log('posts:', posts);

// ==================================================
// Callbacks
// ==================================================
const posts2 = [
    { title: 'Post Eleven', body: 'This is post eleven' },
    { title: 'Post Twelve', body: 'This is post twelve' },
];

function createPostWithCallback(post, cb) {
    setTimeout(() => {
        posts2.push(post); // Add post
        cb(); // Call only after post is added
    }, 2000);
}

function getPosts2() {
    setTimeout(() => {
        posts2.forEach(function (post) {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);
        });
    }, 1000);
}

createPostWithCallback(
    { title: 'Post Thirteen', body: 'This is post' },
    getPosts2
);

// console.log('posts2:', ...posts2);
// getPosts2();
// console.log('posts2:', posts2);
