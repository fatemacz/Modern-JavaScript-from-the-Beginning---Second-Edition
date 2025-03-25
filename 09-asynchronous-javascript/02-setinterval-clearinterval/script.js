// const intervalID = setInterval(myCallback, 1000, 'Hello');

// function myCallback(a) {
//   console.log(a, Date.now());
// }

// function changeColor() {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }

// ==================================================
// setInterval() & clearInterval()
// ==================================================

// https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval

let intervalID;

function startChange() {
    if (!intervalID) {
        intervalID = setInterval(changeRandomColor, 1000);
        console.log(`Interval ID: ${intervalID} started.`);
    } else {
        console.log(`Interval ID: ${intervalID} exists.`);

        intervalID = setInterval(changeRandomColor, 1000);
        console.log(`New Interval ID: ${intervalID} started.`);
    }
}

function changeRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
    clearInterval(intervalID);
    console.log(`Interval ID: ${intervalID} stopped.`);
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);
