// const itemForm = document.querySelector('#item-form');

// ========================
// Element Variables
// ========================
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

// console.log(itemForm);
// console.log(itemInput);
// console.log(itemList);

/*
    <li>
        Apples
        <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </li>
*/

// ========================
// UI Functions
// ========================
function createItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createItemButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);

    itemInput.value = '';
}

function createItemButton(classes) {
    const button = document.createElement('button');
    button.className = classes;

    const icon = createButtonIcon('fa-solid fa-xmark');

    button.appendChild(icon);

    return button;
}

function createButtonIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;

    return icon;
}

// ========================
// Event Functions
// ========================
function addItem(e) {
    e.preventDefault();

    // validate the input
    if (itemInput.value === '') {
        alert('Please enter an item');
        return; // stop the function from continuing
    }

    // create a new list item
    createItem(itemInput.value);

    console.log('Item Added!');
}

// ========================
// Event Listeners
// ========================
itemForm.addEventListener('submit', addItem);
