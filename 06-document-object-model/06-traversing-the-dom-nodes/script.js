let output;

/*
    parent
    - childNodes
    - firstChild
    - lastChild    

    child
    - parentNode
    - nextSibling
    - previousSibling
*/

// ==================================================
// Get child nodes
// ==================================================

const parent = document.querySelector('.parent');

output = parent.childNodes;
console.log(output);

/*
    whitespace or new line are considered as text nodes
*/

output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].innerHTML;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'Hello';

console.log(output);
console.log('');

// ==================================================
// Get parent node
// ==================================================

const child = document.querySelector('.child');

output = child.parentNode;
console.log(output);

output = child.parentElement;
console.log(output);

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

console.log('');

// ==================================================
// Get sibling nodes
// ==================================================
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.nextSibling;
console.log(output);

output = secondItem.previousSibling;
console.log(output);
