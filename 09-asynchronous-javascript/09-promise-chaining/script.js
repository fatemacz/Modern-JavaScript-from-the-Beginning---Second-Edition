const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false; // change to true to see the error

        if (!error) {
            resolve({ name: 'John', age: 30 });
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
});

promise
    .then((user) => {
        console.log(user);
        return user.name; // return a value to be used in the next then block
    })
    .then((name) => {
        console.log(name);
        return name.length; // return a value to be used in the next then block
    })
    .then((nameLength) => {
        console.log(nameLength);
    })
    .catch((error) => {
        console.log(error);
        return 'Error code: 404'; // return a value to be used in the next then block
    })
    .then((x) => console.log('This will run no matter what.', x));
