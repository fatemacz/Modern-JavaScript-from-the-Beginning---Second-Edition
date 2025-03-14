// ==================================================
// Inside Nested Functions
// ==================================================
function parentFunction() {
    const x = 100;
    console.log('x:', x, 'in parentFunction');

    function childFunction() {
        const y = 200;
        console.log('Call x:', x, 'in childFunction');
        console.log('y:', y, 'in childFunction');
        console.log('x + y:', x + y);
    }
    // console.log('Access y:', y, 'in parentFunction'); // ReferenceError: y is not defined

    childFunction();
}

parentFunction();
console.log('');

// ==================================================
// Inside Nested Blocks
// ==================================================
if (true) {
    const x = 100;
    console.log('x:', x, 'in outer block');

    if (x === 100) {
        const y = 200;
        console.log('Call x:', x, 'in inner block');
        console.log('y:', y, 'in inner block');
        console.log('x + y:', x + y);
    }
    // console.log('y:', y, 'in outer block'); // ReferenceError: y is not defined
}
