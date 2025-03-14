// ==================================================
// Break
// ==================================================
for (let i = 0; i <= 20; i++) {
    breakAt = 5;

    if (i === breakAt) {
        console.log(`Breaking at ${breakAt}...`);
        break;
    }
    console.log(i);
}

console.log('');

// ==================================================
// Continue
// ==================================================
for (let i = 0; i <= 10; i++) {
    skip = 4;

    if (i === skip) {
        console.log(`Skipping ${skip}...`);
        continue;
    }
    console.log(i);
}
