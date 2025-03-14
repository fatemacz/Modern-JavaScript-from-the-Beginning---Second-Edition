let x;
let d = new Date();
console.log(d);

// ==================================================
// Date methods
// ==================================================

x = d.toString();
console.log('toString:', x);

x = d.getTime();
console.log('getTime:', x);

x = d.valueOf();
console.log('valueOf:', x);

x = d.getFullYear();
console.log('getFullYear:', x);

x = d.getMonth();
console.log('getMonth:', x);

x = d.getMonth() + 1;
console.log('getMonth + 1:', x);

x = d.getDate();
console.log('getDate:', x);

x = d.getDay();
console.log('getDay:', x);

x = d.getHours();
console.log('getHours:', x);

x = d.getMinutes();
console.log('getMinutes:', x);

x = d.getSeconds();
console.log('getSeconds:', x);

x = d.getMilliseconds();
console.log('getMilliseconds:', x);

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
console.log(x);

// ==================================================
// Intl.DateTimeFormat API (locale specific)
// ==================================================

x = Intl.DateTimeFormat('en-US').format(d);
console.log("Intl.DateTimeFormat('en-US').format:", x);

x = Intl.DateTimeFormat('en-NZ').format(d);
console.log("Intl.DateTimeFormat('en-NZ').format:", x);

x = Intl.DateTimeFormat('default').format(d);
console.log("Intl.DateTimeFormat('default').format:", x);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
console.log("Intl.DateTimeFormat('default', { month: 'long' }).format:", x);

x = d.toLocaleString('default', { month: 'short' });
console.log(".toLocaleString('default', { month: 'short' }):", x);

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Pacific/Auckland',
});
console.log(x);
