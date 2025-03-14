// ========================
// View prototype chain
// ========================
// console.log(socials.__proto__);

// ==================================================
/*  
    array.forEach(callbackFunction);

    array.forEach(function (item) {statements});
    array.forEach((item) => statement);
    array.forEach((item) => (statement1, statement2));

    array.forEach(function (item, index, arr) { statements });
    array.forEach((item, index, arr) => { statements });    
*/
// ==================================================

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// ========================
// Long form
// ========================
socials.forEach(function (item) {
    console.log(item);
});

console.log('');

// ========================
// Short form
// ========================
socials.forEach((item) => console.log(item));

console.log('');

// ========================
// We can also pass in the index and original array
// ========================
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

console.log('');

// ========================
// Using a named function
// ========================
function logSocials(social) {
    console.log(social);
}

socials.forEach(logSocials);

console.log('');

// ========================
// Array of objects
// ========================
const socialObjs = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Linkedin', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item.url));
