// ==================================================
// create a div element (memory)
// ==================================================
const div = document.createElement('div');

// ========================
// set attributes
// ========================
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

// ==================================================
// create a text node and append it to div in (memory)
// ==================================================
// div.innerText = 'Hello World';
const text = document.createTextNode('Hello World');
div.appendChild(text);

// ==================================================
// append div to document
// ==================================================
// document.body.appendChild(div);
document.querySelector('ul').appendChild(div);
