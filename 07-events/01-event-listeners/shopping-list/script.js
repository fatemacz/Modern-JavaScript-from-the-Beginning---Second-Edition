function clearOnClick() {
    console.log('Items Cleared!');
}

// ==================================================
function onClear() {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    // itemList.innerHTML = '';

    // items.forEach((item) => item.remove());

    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

function logAction() {
    console.log('Actions Recorded!');
}

// ==================================================
// JavaScript Event Listener
// ==================================================
// You cannot have multiple event listeners on the same element

const jsAlertClearBtn = document.querySelector('#js-clear-alert');
jsAlertClearBtn.onclick = function () {
    console.log('First Event Listener: Items Cleared!');
};
jsAlertClearBtn.onclick = function () {
    alert(
        `Second Event Listener: Items Cleared! 
        This has overridden the previous event listener!`
    );
};

// ========================
const jsLogClearBtn = document.querySelector('#js-clear-log');
jsLogClearBtn.onclick = function () {
    alert('JavaScript Event Listener: Items Cleared!');
};

// ==================================================
// addEventListener()
// ==================================================
// You can have multiple event listeners on the same element.

const alertBtn = document.querySelector('#listener-clear-alert');
alertBtn.addEventListener('click', () => alert('Items Cleared!'));
alertBtn.addEventListener('click', () => console.log('Items Cleared!'));

// ========================
// Use named function
// ========================
const namedFuncBtn = document.querySelector('#listener-named-func');
namedFuncBtn.addEventListener('click', onClear);
namedFuncBtn.addEventListener('click', logAction);

// ==================================================
// removeEventListener()
// ==================================================
/*
    Don't have to use it every time you add an event listener.
    If you're trying to remove an element from the DOM, then it's a good idea to remove the event listener first.

    So what I am doing here is to call removeEventListener() 10 seconds after the browser page loads.    
    You use a function called setTimeout() to do that.
*/

function alertClick() {
    alert('Clicked!');
}

// function logClick() {
//     console.log('Clicked!');
// }

const removeListenerBtn = document.querySelector('#remove-listener-clear-log');
removeListenerBtn.addEventListener('click', alertClick);
// removeListenerBtn.addEventListener('click', logClick);

setTimeout(
    () => removeListenerBtn.removeEventListener('click', alertClick),
    10000
);

// ==================================================
// Fire off event from JS after (5000) miliseconds
// ==================================================
setTimeout(() => removeListenerBtn.click(), 5000);
