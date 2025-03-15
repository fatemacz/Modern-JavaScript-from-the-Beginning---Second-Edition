/*
    Using innerHTML causes the web browser to reparse and recreate all the DOM nodes inside the Ul element.
    So this is less efficient than creating new elements and appending them.
    So the second way is going to be more performant.
    
    Also, setting innerHTML will not automatically reattach event handlers to the new elements it creates, 
    so you would have to keep track of them manually.
*/

// ==================================================
// Quick & Dirty
// ==================================================
function createListItem(item) {
    const li = document.createElement('li');

    li.innerHTML = `${item}
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`;

    document.querySelector('.items').appendChild(li);
}

// ==================================================
// Clean & Performant
// ==================================================
function createNewItem(item) {
    const li = document.createElement('li');

    // const text = document.createTextNode(item);
    // li.appendChild(text);

    li.appendChild(document.createTextNode(item));

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);
    li.appendChild(button);

    document.querySelector('.items').appendChild(li);
}

createListItem('Eggs');
createNewItem('Cheese');
