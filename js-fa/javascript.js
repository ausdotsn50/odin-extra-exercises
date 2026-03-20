// Breakdown
// add7 function, takes an argument 'number', its return value is number + 7
const add7 = (num) => num + 7;

const multiply = (num1, num2) => num1 * num2;

const capitalize = (string) => (string.charAt(0).toUpperCase() + string.slice(1).toLowerCase());

const lastLetter = (string) => string.charAt(string.length - 1);

console.log(add7(10));
console.log(multiply(2, 3));
console.log(capitalize("ABCD"));
console.log(lastLetter("abcd"));