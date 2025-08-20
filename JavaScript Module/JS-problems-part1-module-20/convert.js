// 12 inch 1 feet
// ইঞ্চি থেকে ফিট:
function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

console.log(inchToFeet(24)); // 2 feet

// ignore this one
function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch.";
  return result;
}

const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);
const shuvoHeight2 = inchToFeet2(75);
// console.log(shuvoHeight2)

// ফিট থেকে ইঞ্চি:
function feetToInch(feet) {
  return feet * 12;
}

console.log(feetToInch(5)); // 60 inches

function mileToKilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}

function kiloMeterToMiles(kilo) {
  const mile = kilo * 0.621371;
  return mile;
}
