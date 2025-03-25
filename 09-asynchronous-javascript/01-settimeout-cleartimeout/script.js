// ==================================================
// setTimeout - takes in a callback and a time to wait until that callback is executed
// ==================================================
setTimeout(function () {
    console.log(`Hello from callback after ${3000}ms`);
}, 2000); // even you set timeOut to 0, it will still wait for the call stack to clear

console.log('Hello from global scope');

// ==================================================
// Named function
// ==================================================
function changeText() {
    document.querySelector('h1').textContent = 'Hello from callback';
}

setTimeout(changeText, 3000);

// ==================================================
// clearTimeout() will clear a timer
// ==================================================
function changeText2() {
    document.querySelector('h1').textContent =
        'Hello from callback with clearTimeout()';
}

const timerId = setTimeout(changeText2, 5000);

document.querySelector('#cancel').addEventListener('click', () => {
    console.log(timerId);
    clearTimeout(timerId);
    console.log('Timer Cancelled');
});
