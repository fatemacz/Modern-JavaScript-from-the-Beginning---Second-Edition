// const itemForm = document.querySelector('#item-form');

// ========================
// Element Variables
// ========================
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

const formBtn = itemForm.querySelector('button');

let isEditMode = false;

// console.log(itemForm);
// console.log(itemInput);
// console.log(itemList);

// console.log(clearBtn);
// console.log(itemFilter);

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
function updateUI() {
    displayItemsFromStorage();

    // const items = itemList.querySelectorAll('li');

    const items = getItemsFromStorage();

    // console.log(items.length);

    if (items.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }

    formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
    formBtn.style.backgroundColor = '#333';

    isEditMode = false;
}

function createListItem(itemName) {
    const item = document.createElement('li');
    item.appendChild(document.createTextNode(itemName));

    const button = createItemButton('remove-item btn-link text-red');
    item.appendChild(button);

    return item;
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

function addItemTODOM(itemName) {
    // create a new list item
    const item = createListItem(itemName);

    itemList.appendChild(item);
}

function displayItemsFromStorage() {
    itemList.innerHTML = '';

    let itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach((item) => addItemTODOM(item));
}

// ========================
// Event Functions
// ========================
function filterItems(e) {
    const items = itemList.querySelectorAll('li');
    const searchString = e.target.value.toLowerCase();

    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();

        // console.log(itemName.indexOf(searchString)); // -1 for those that don't match
        // console.log(itemName.includes(searchString)); // true for those that match

        // if (itemName.indexOf(searchString) != -1) {
        if (itemName.includes(searchString)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function clearAllItems(e) {
    // console.log(e.target);

    // console.log(itemList.children);
    // console.log(itemList.firstChild);

    if (confirm('Are you sure you want to clear all items?')) {
        // itemList.innerHTML = '';

        // const items = itemList.querySelectorAll('li');
        // for (let item of items) {
        //     item.remove();
        // }

        // while (itemList.firstChild) {
        //     itemList.removeChild(itemList.firstChild);
        // }

        // Clear from localStorage - No need to clear from DOM anymore
        localStorage.removeItem('items');

        console.log('All Items Cleared!');
        updateUI();
    }
}

function onClickItem(e) {
    // console.log(e.target.parentElement.classList);
    // console.log(e.target, e.target.parentElement);

    if (e.target.parentElement.classList.contains('remove-item')) {
        const item = e.target.parentElement.parentElement;
        removeItem(item);
    } else {
        setItemToEdit(e.target);
    }
}

function setItemToEdit(item) {
    isEditMode = true;

    itemList
        .querySelectorAll('li')
        .forEach((i) => i.classList.remove('edit-mode'));

    item.classList.add('edit-mode');
    formBtn.innerHTML = '<i class="fa-solid fa-pen"></i>   Update Item';
    formBtn.style.backgroundColor = '#228B22';
    itemInput.value = item.textContent;
}

function onAddItemSubmit(e) {
    e.preventDefault();

    // validate the input
    if (itemInput.value === '') {
        alert('Please enter an item');
        return; // stop the function from continuing
    }

    const newItem = itemInput.value;

    // Check for edit mode
    if (isEditMode) {
        const itemToEdit = itemList.querySelector('.edit-mode');

        // removeItemFromStorage(itemToEdit.textContent);

        updateItemInStorage(itemToEdit.textContent, newItem); // to update the item in localStorage at the same index

        // itemToEdit.classList.remove('edit-mode');
        // itemToEdit.remove();
        // itemToEdit.textContent = newItem;
        isEditMode = false;
    } else {
        if (checkIfItemExists(newItem)) {
            alert('That item already exists!');
            return;
        }

        // addItemTODOM(itemInput.value); // UI update is done by checkUI getItemsFromStorage

        addItemToStorage(itemInput.value);
    }

    itemInput.value = '';

    updateUI();
}

function checkIfItemExists(item) {
    const itemsFromStorage = getItemsFromStorage();
    return itemsFromStorage.includes(item);
}

function removeItem(item) {
    if (confirm('Are you sure you want to remove this item?')) {
        const itemName = item.textContent;
        removeItemFromStorage(itemName);
        console.log('Item Removed!');

        updateUI();
    }
}

// ========================
// CRUD Functions
// ========================
function addItemToStorage(itemName) {
    let itemsFromStorage = getItemsFromStorage();

    itemsFromStorage.push(itemName);
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));

    console.log('Item Added!');
}

function getItemsFromStorage() {
    let itemsFromStorage;

    if (localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    return itemsFromStorage;
}

function updateItemInStorage(oldItem, newItem) {
    let itemsFromStorage = getItemsFromStorage();

    if (itemsFromStorage.includes(oldItem)) {
        // check if the old item exists in the array (localStorage) - just to be safe
        if (itemsFromStorage.includes(newItem)) {
            // check if the new item already exists in the array (localStorage) - to avoid duplicates
            alert('That item already exists!');
            return;
        } else {
            // itemsFromStorage = itemsFromStorage.map(item => item === oldItem ? newItem : item);
            itemsFromStorage[itemsFromStorage.indexOf(oldItem)] = newItem;
            localStorage.setItem('items', JSON.stringify(itemsFromStorage));
        }
    }
}

function removeItemFromStorage(itemName) {
    let itemsFromStorage = getItemsFromStorage();

    itemsFromStorage = itemsFromStorage.filter((item) => item !== itemName);
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

// ========================
// Initialize the app
// ========================
function init() {
    // ========================
    // Event Listeners
    // ========================
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', onClickItem);

    clearBtn.addEventListener('click', clearAllItems);
    itemFilter.addEventListener('input', filterItems);

    document.addEventListener('DOMContentLoaded', updateUI);

    // updateUI();
}

init();
// localStorage.setItem('name', 'John Doe');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');
// localStorage.clear(); // clear all items in localStorage
