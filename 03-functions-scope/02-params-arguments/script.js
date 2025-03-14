// ========================
// Default Params
// ========================
function registerUser(user = 'Bot') {
    // Old way - before (ES6/ 2015) is using `=`
    // if (!user) {
    //   user = 'Bot';
    // }

    return user + ' is registered';
}

console.log('registerUser():', registerUser());
console.log('');

// ========================
// Rest Params
// ========================
function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }

    return total;
}

console.log('sum(1, 2, 3, 4, 5, 6, 100):', sum(1, 2, 3, 4, 5, 6, 100));
console.log('');

// ========================
// Objects as params
// ========================
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in with the email ${user.email}`;
}

const user = {
    id: 1,
    name: 'John',
    email: 'john@gmail.com',
};
console.log('loginUser(user):', loginUser(user));

const user2 = {
    id: 2,
    name: 'Sara',
    // if email is not provided, it will be "undefined"
};
console.log('loginUser(user2):', loginUser(user2));
console.log('');

// ========================
// Arrays as params
// ========================
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(`getRandom(${arr}):`, item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
