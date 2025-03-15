const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
    console.log('Input Event');
    // console.log(e.key); // undefined for input event. Use keypress, keydown or keyup events
    heading.textContent = e.target.value;
}

function onFocus() {
    console.log('Input is focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'red';
}

function onBlur() {
    console.log('Input is not focused');
    itemInput.style.outlineStyle = 'none';
}

function onChecked(e) {
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not Checked';

    console.log(isChecked);
}

// ========================
// input, change, focus and blur events
// ========================
// itemInput.addEventListener('keydown', onInput);
// itemInput.addEventListener('keyup', onInput);
// itemInput.addEventListener('keypress', onInput);
itemInput.addEventListener('input', onInput);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);

// priorityInput.addEventListener('change', onInput);
priorityInput.addEventListener('input', onInput);

// checkbox.addEventListener('change', onChecked);
checkbox.addEventListener('input', onChecked);
