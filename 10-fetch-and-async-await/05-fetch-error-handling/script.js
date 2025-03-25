// ==================================================
// Success
// ==================================================
fetch('http://httpstat.us/200')
    .then((response) => {
        return response;
    })
    .then(() => {
        console.log('http://httpstat.us/200: success');
    });

// ==================================================
// .catch() issue
// ==================================================

// ========================
// .catch() does NOT run for an error status like 404 or 500
// ========================
fetch('http://httpstat.us/404')
    .then((response) => {
        return response;
    })
    .then(() => {
        console.log('http://httpstat.us/404: success'); // This will run
    })
    .catch((error) => {
        console.log(error); // This will NOT run
    });

// ========================
// .catch() ONLY runs on a NETWORK ERROR
// ========================
fetch('http://hello123.net') // This endpoint cannot be reached. net::ERR_NAME_NOT_RESOLVED
    .then((response) => {
        return response;
    })
    .then(() => {
        console.log('success'); // This will NOT run
    })
    .catch((error) => {
        console.log(error); // This will run
    });

// ========================
// Throwing Error with response.ok check
// ========================
fetch('http://httpstat.us/404')
    .then((response) => {
        // console.log(response.ok); // false
        // console.log(response.statusText); // Not Found

        if (!response.ok) {
            throw new Error('Request Failed'); // throwing an error to catch
        }
        return response;
    })
    .then(() => {
        console.log('success');
    })
    .catch((error) => {
        console.log(error);
    });

// ========================
// Check for specific code with response.status ***
// ========================
fetch('http://httpstat.us/200') // change this to test different status codes
    .then((response) => {
        if (response.status === 404) {
            throw new Error('Not Found');
        } else if (response.status === 500) {
            throw new Error('Server Error');
        } else if (response.status !== 200) {
            throw new Error('Request Failed');
        }
        return response;
    })
    .then(() => {
        console.log('success');
    })
    .catch((error) => {
        console.log(error);
    });
