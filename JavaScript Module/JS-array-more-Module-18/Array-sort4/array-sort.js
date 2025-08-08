
            //JavaScript-এর sort() মেথড 
//.....অ্যারের ভ্যালুগুলোকে সাজানোর জন্য ব্যবহার করা হয়।

//১. স্ট্রিং অ্যারে সাজানো:
let names = ["Sumaya", "Sweety", "Shanta", "Shimu", "Saima"]; 
names.sort();
console.log(names);

//JavaScript-এর sort() মেথড Orjinal Array কে Change করে dei...........//

let namE = ["Sumaya", "Sweety", "Shanta", "Shimu", "Saima"]; 
console.log(namE);

let newNames = namE.sort();
console.log(newNames);

/* ২.সংখ্যা সাজানো: 
Ascending Order : ছোট থেকে বড় */

let nums =[9, 5, 6, 1, 3, 4, 7, 2, 8];
nums.sort();
console.log(nums);

//...2nd Example: 2 digit/besi digit thaklee.......//

let numbers = [10, 5, 20, 3]; 
numbers.sort((a, b) => a - b); 
console.log(numbers);

//OR..........

let digits = [18, 20, 14, 1, 6, 3, 8, 2];
digits.sort(function(a,b){return(a-b)});
console.log(digits);


//Descending Order :বড় থেকে ছোট

let number = [10, 5, 20, 3]; 
number.sort((a, b) => b - a);
 console.log(number);

//OR.........//

let digit = [18, 20, 14, 1, 6, 3, 8, 2];
digit.sort(function(a,b){return(b-a)});
console.log(digit);


