function willSuccess(marks) {
  // চেক করবো ইনপুট আসলেই Array কিনা
  if (Array.isArray(marks) == false) {
    return "Invalid";
  }
  let passCount = 0;
  let failCount = 0;

  // লুপ চালিয়ে pass/fail গুনবো
  for (let i = 0; i < marks.length; i++) {
    if (typeof marks[i] !== "number") {
      return "Invalid"; // non-number থাকলে invalid
    }

    if (marks[i] > 50) {
      passCount++;
    } else {
      failCount++;
    }
  }

  // শর্ত অনুযায়ী true/false রিটার্ন
  if (passCount > failCount) {
    return true;
  } else {
    return false;
  }
}

// Example Run
console.log(willSuccess([55, 75, 41, 33, 87, 91, 30])); //false
console.log(willSuccess([10, 20, 30, 40])); // false
console.log(willSuccess("Not an array")); // Invalid
