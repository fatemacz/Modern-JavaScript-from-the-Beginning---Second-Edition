// ==================================================
// Global window object
// ==================================================
console.log(window);

// ========================
// The document object is part of the window object
// ========================
console.log(window.document);
console.dir(window.document);
console.log('');

// ========================
// We can access DOM elements directly with properties
// ========================
console.log(document.body);
console.log(document.body.innerText);
console.log(document.body.innerHTML);
console.log('');

console.log(document.links);
console.log(document.links[0]);
console.log('');

// ========================
// We can set properties of elements
// ========================
document.body.innerHTML = `
    <div id="main">
        <h1>Greeting</h1>
        <a href="https://greeting.com">Hi, There!</a>
    </div>

    <script src="script.js"></script>
`;

// ========================
// The document object has a ton of methods. One is `document.write()`, which will write something to the document
// ========================
document.write('Hello from Aye');
// https://developer.mozilla.org/en-US/docs/Web/API/Document/write
// https://developer.chrome.com/blog/removing-document-write/

// ========================
// We also have methods to select elements more directly
// ========================
document.getElementById('main').innerHTML = '<h2>Hello!</h2>';

document.querySelector('#main h2').innerText = 'Mingalarbar!';
