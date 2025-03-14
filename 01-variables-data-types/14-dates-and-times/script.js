let d;

// Get today's date and time
// ========================
d = new Date();
console.log(d, typeof d);

// Set to a string
// ========================
d = d.toString();
console.log(d, typeof d);

// Get a specific date
// ========================
// Important: the month is "0-based", so 0 is January and 11 is December
d = new Date(2021, 0, 10, 12, 30, 0);
console.log(d);

// Pass in a string
// ========================
d = new Date('2021-07-10T12:30:00'); // YYYY-MM-DDTHH:MM:SS
console.log(d);
d = new Date('07/10/2021 12:30:00'); // MM/DD/YYYY HH:MM:SS
console.log(d);
d = new Date('2022-07-10'); // YYYY-MM-DD (could be off by a day if start with year)
console.log(d); // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
d = new Date('07-10-2022'); // MM-DD-YYYY
console.log(d);

// Get current timestamp - milliseconds since Jan 1st, 1970
// ========================
d = Date.now();
console.log(d);

// Get the timestamp of a specific date
// ========================
d = new Date();
console.log(d);

d = d.getTime();
console.log(d);

d = d.valueOf();
console.log(d);

// Create a date from a timestamp
// ========================
d = new Date(1741826104698);
console.log(d);

// Convert from milliseconds to seconds
// ========================
d = Math.floor(Date.now() / 1000);
console.log(d);
