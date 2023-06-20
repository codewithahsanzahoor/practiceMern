//? 1st way of importing: for this to work in package.json type:module
// import { sum } from "./server.js";
// console.log(sum(1, 2));

//? 2nd way of importing: default common module
const lib = require("./server");
console.log(lib.sum(1, 2));
