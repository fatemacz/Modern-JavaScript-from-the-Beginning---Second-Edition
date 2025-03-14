const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
};
console.log('post:', { ...post });
console.log('');

// ==================================================
// Convert to JSON string
// ==================================================
const str = JSON.stringify(post);
console.log('JSON.stringify(post)');

console.log('str:', str, `(DataType: ${typeof str})`);
console.log('str.id:', str.id); // undefined
console.log('');

// ==================================================
// Parse JSON
// ==================================================
const obj = JSON.parse(str);
console.log('JSON.parse(str)');

console.log('obj:', obj, `(DataType: ${typeof obj})`);
console.log('obj.id:', obj.id);
console.log('');

// ==================================================
// JSON & arrays
// ==================================================
// Note:
// - JSON uses double quotes for key and value pairs
// - JSON does not support single quotes for key and value pairs
// - JSON does not support trailing commas
// - JSON does not support comments

const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body',
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body',
    },
];
console.log('posts:', posts);
console.log('');

const strPosts = JSON.stringify(posts);
console.log('JSON.stringify(posts)');
console.log('strPosts:', strPosts, `(DataType: ${typeof strPosts})`);
