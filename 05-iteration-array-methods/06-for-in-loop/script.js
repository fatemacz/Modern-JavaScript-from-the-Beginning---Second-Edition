// ==================================================
// Loop through objects
// ==================================================
const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
};

for (const key in colorObj) {
    console.log(`${key}: ${colorObj[key]}`);
}

console.log('');

// ==================================================
// Loop through arrays
// ==================================================
const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const idx in colorArr) {
    console.log(`${idx}: ${colorArr[idx]}`);
}
