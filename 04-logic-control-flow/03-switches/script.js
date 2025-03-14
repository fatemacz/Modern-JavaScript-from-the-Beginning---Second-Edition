const d = new Date(2022, 1, 10, 17, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

// You don't need to add break for default case
// for other cases, you need to add break to prevent fall-through (executing the next case)

// ========================
// Immediate value evaluation
// ========================
switch (month) {
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('It is February');
        break;
    case 3:
        console.log('It is March');
        break;
    default:
        console.log('It is not Jan, Feb or March');
}

console.log('');

// ========================
// Range evaluation
// ========================
switch (true) {
    case hour < 12:
        console.log('Good Morning');
        break;
    case hour < 18:
        console.log('Good Afternoon');
        break;
    default:
        console.log('Good Night');
}
