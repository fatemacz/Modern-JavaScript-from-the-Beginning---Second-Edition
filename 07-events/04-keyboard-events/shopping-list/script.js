const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => console.log('keypress');

const onKeyUp = (e) => console.log('keyup');

const onKeyDown = (e) => {
    console.log(e.code);

    // https://www.toptal.com/developers/keycode/table

    // ========================
    // keyCode
    // ========================
    if (e.keyCode === 13) {
        alert('You pressed enter');
    }

    // ========================
    // key
    // ========================
    if (e.key === ' ') {
        alert('You pressed space');
    }

    // ========================
    // code
    // ========================
    if (e.code === 'Digit1') {
        console.log('You pressed 1');
    }

    // ========================
    // repeat
    // ========================
    if (e.repeat) {
        console.log('You are holding down ' + e.key);
    }

    // ========================
    // shiftKey, ctrlKey & altKey
    // ========================
    console.log('Shift: ' + e.shiftKey);
    console.log('Control: ' + e.ctrlKey);
    console.log('Alt: ' + e.altKey);

    if (e.shiftKey && e.key === 'K') {
        console.log('You hit shift + K');
    }
};

// ========================
// Event Listeners
// ========================
itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
