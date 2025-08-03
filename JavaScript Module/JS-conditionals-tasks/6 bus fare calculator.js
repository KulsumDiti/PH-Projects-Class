/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 25;
let isStudent = true; // true or false
const regularFare = 800;
let fare;

if (age < 10) {
  fare = 0;
} else if (isStudent) {
  fare = regularFare * 0.5; // 50% discount
} else if (age >= 60) {
  fare = regularFare * 0.85; // 15% discount
} else {
  fare = regularFare;
}

console.log("Ticket fare is: " + fare + " tk");
