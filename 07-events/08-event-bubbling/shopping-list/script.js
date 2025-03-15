// ==================================================
// Event Bubbling
// ==================================================

/* 
    - When we add an event listener onto an element, that event moves up the DOM tree and bubble up through its parent elements.
    - If it finds a parent element that has a listener for that event, it'll fire that as well.

    - So even if we click on the button, it'll bubble all the way up to the document.
    - And it'll fire the event on all of the parent elements as well.

    - This is useful when you want to trigger an event on a parent element when a child element is clicked.
    - To stop the event from bubbling up, you can use the stopPropagation method on the event object.
*/

const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

button.addEventListener('click', (e) => {
    alert('Button was clicked');

    // ==================================================
    // to stop the event from bubbling up
    // ==================================================
    e.stopPropagation();
    // e.stopImmediatePropagation();
    // ==================================================
});

//  ||
//  XX   // e.stopPropagation();
// \\//
//  \/

div.addEventListener('click', () => {
    alert('Div was clicked');
});

//  ||
//  ||
// \\//
//  \/

form.addEventListener('click', () => {
    alert('Form was clicked');
});

//  ||
//  ||
// \\//
//  \/

document.body.addEventListener('click', () => {
    alert('Body was clicked');
});
