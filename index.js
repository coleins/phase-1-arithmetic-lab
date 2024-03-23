const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;

const random = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

let num3 = 24;
let num4 = 5;
let mod = num3 % num4 === 4 ? num3 % num4 : (num3 % num4) + num4;

console.log(mod);

let numbers = [10, 5, 19, 14, 20, 15];
let max = Math.max(...numbers);

console.log(max);
