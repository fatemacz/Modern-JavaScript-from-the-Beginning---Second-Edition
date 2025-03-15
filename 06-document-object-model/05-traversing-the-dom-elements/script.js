let output;

/*
    parent
    - children
    - firstElementChild
    - lastElementChild

    child
    - parentElement
    - nextElementSibling
    - previousElementSibling    
*/

// ==================================================
// Get child elements from a parent
// ==================================================
const parent = document.querySelector('.parent');

output = parent.children;

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;
// output = parent.children[1].tagName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'orange';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

console.log(output);
console.log('');

// ==================================================
// Get parent elements from a child
// ==================================================
const child = document.querySelector('.child'); // first child

output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

console.log(output);
console.log('');

// ==================================================
// Get sibling elements
// ==================================================
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'red';
secondItem.previousElementSibling.style.color = 'green';

console.log(output);
