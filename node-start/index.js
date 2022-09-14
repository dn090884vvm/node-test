const date = new Date();

console.log(date.getFullYear());

console.log("welcome to hell");

const { admin, user } = require("./user");

console.log(admin);
console.log(user);

const month = require("./data")();

console.log(`current month is ${month}`);
