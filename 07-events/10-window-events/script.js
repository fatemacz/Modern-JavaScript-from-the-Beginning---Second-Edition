// ==================================================
// Window Events
// ==================================================

// ========================
// script.js in head tag with defer attribute
// ========================
// document.querySelector('h1').textContent = 'Hello World'; // TypeError: Cannot set properties of null (setting 'textContent')

/* 
    script.js is in head tag and defer attribute is not used 
    then this line will not work because script will run before the DOM is loaded.

    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- Script in head -->
        <!-- Use `defer` when you put script in head -->
        <script src="./script.js" defer></script>
        <title>Window Events</title>
    </head> 
*/

// ========================
// On Page Load
// ========================
// window.onload = function () {
//     document.querySelector('h1').textContent = 'Page Loaded';
// };

// load waits for the entire page to load, including all resources such as images.

window.addEventListener('load', () => console.log('Page Loaded'));

// ========================
// On DOM Load
// ========================
// DOMContentLoaded runs as soon as the DOM is parsed and loaded

window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));

console.log('Run me');

// ========================
// Resize Event
// ========================
window.addEventListener('resize', () => {
    document.querySelector(
        'h1'
    ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

// ========================
// Scroll Event
// ========================
window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

    if (window.scrollY > 70) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
});

// ========================
// Focus & Blur Events
// ========================
window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'blue';
    });
});

window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'black';
    });
});

console.log('I am fully loaded!');
