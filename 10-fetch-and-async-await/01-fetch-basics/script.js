// ==================================================
// Fetch API (a modern replacement for XMLHttpRequest)
// ==================================================
// promise-based and built into the global window object

// ========================
// response object
// ========================
// fetch('./movies.json').then((response) => {
//     console.log(response);
// });

// ========================
// Fetching a JSON file
// ========================
fetch('./movies.json')
    .then((response) => response.json()) //json()
    .then((data) => console.log(data));

// ========================
// Fetching a text file
// ========================
fetch('./test.txt')
    .then((response) => response.text()) //text()
    .then((data) => console.log(data));

// ========================
// Fetching from an API
// ========================
fetch('https://api.github.com/users/fatemacz')
    .then((response) => response.json())
    .then((data) => (document.querySelector('h1').textContent = data.login));
