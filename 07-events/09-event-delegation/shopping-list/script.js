// ==================================================
// Event Delegation
// ==================================================
/*
        - This is useful when you have a lot of elements that you want to add the same event listener to.
        - For example, if we have a shopping list with multiple items, and we want to delete them when we click on them.

        - Add an event listener to a parent element, 
        - and then use logic inside of the event listener to target the element that we actually want to listen for.
        - This way, we only need to add a single event listener to the parent element,
        - instead of adding an event listener to each individual item.
*/

// ==================================================
// Add an event listener on all items
// ==================================================
// const listItems = document.querySelectorAll('li');

// listItems.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         e.target.remove();
//     });
// });

// ==================================================
// Add a single event listener on the parent (Event Delegation)
// ==================================================
const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
    // console.log(e.target.tagName);
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

list.addEventListener('mouseover', (e) => {
    // console.log(e.target.tagName);
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'red';
    }
});
