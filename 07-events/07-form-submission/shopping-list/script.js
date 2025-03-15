const form = document.getElementById('item-form');

// ==================================================
// Using the .value property
// ==================================================
function onSubmit(e) {
    console.log('Form Submitted: onSubmit');

    e.preventDefault();

    // ========================
    // Get value with .value
    // ========================
    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    if (item === '' || priority === '0') {
        alert('Please fill in all fields');
        return;
    }

    console.log(item, priority);
}

// ==================================================
// Using the FormData Object (name attribute)
// ==================================================
// https://developer.mozilla.org/en-US/docs/Web/API/FormData

function onSubmit2(e) {
    console.log('Form Submitted: onSubmit2');

    e.preventDefault();

    const formData = new FormData(form);
    console.log(formData);

    // ========================
    // Get individual items
    // ========================
    const item = formData.get('item'); // name attribute
    const priority = formData.get('priority'); // name attribute

    console.log(item, priority);

    // ========================
    // Get all entried as an Iterator
    // ========================
    const entries = formData.entries();
    console.log(entries);

    // ========================
    // Loop through entries
    // ========================
    for (let entry of entries) {
        console.log(entry);
        console.log(`${entry[0]}: ${entry[1]}`);
    }
}

// form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);
