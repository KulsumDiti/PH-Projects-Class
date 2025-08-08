/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
//simple if-else Solution:
let num1 = 10;
let num2 = 7;
let result;

if (num1 > num2) {
  result = num1 * 2;
} else {
  result = num1 + num2;
}

console.log("Result:", result);

// ternary operator Solution:
let nuM1 = 10;
let nuM2 = 7;

let result2 = nuM1 > nuM2 ? nuM1 * 2 : nuM1 + nuM2;

console.log("Result:", result2);
