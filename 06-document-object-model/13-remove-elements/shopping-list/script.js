// ==================================================
// remove() Method
// ==================================================
function removeClearButton() {
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();
}

// ==================================================
// removeChild() Method
// ==================================================
function removeFirstItem() {
    const ul = document.querySelector('ul'); // parent
    const li = document.querySelector('li:first-child'); // child

    ul.removeChild(li); // remove child from parent
}

// ========================
// Other examples
// ========================
function removeNthItem(n) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${n})`);

    ul.removeChild(li);
}

function removeChildAtIndex(itemIndex) {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemIndex];

    ul.removeChild(li);
}

function removeChildNumber(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber - 1];

    ul.removeChild(li);
}

function removeItemAtIndex(itemIndex) {
    document.querySelectorAll('li')[itemIndex].remove();
}

const removeItemNumber = (itemNumber) =>
    document.querySelectorAll('li')[itemNumber - 1].remove();

// removeClearButton();
// removeFirstItem();

// removeNthItem(2);

// removeChildAtIndex(2);
// removeChildNumber(2);

// removeItemAtIndex(2);
// removeItemNumber(2);
