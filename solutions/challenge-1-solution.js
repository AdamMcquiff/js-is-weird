// Challenge 1:
// Using only the characters 'a' and 'b', print 'banana' to the console.
// You can use any JavaScript methods. 
// Hint: you will need `toLowerCase()`.

// Solution:

// This will output 'banana'
console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());

// Why does this work?

// Consider the following sum:
console.log(+'a');

// JavaScript tries to coerce 'a' into a number.
// Since 'a' is a string, not a number, JavaScript returns 'NaN' (Not a Number).

// That makes sense. 
// We then cleverly take advantage of `toLowerCase()` to convert 'NaN' to 'nan'. 
// When combined with the rest of the 'a' and 'b' characters, we get banana.