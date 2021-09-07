// Challenge 1:
// Using only the characters 'a' and 'b', print 'banana' to the console.
// You can use any JavaScript methods. 
// Hint: you may need `toLowerCase()`.

// Why does this work?
// Output: banana
console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());

// When attempting the following sum, JavaScript tried to coerce 'a' into a number.
// Since a is not a number, JavaScript returns 'NaN' (Not a Number).
console.log(+'a');

// We then use `toLowerCase()` to convert 'NaN' to 'nan'. When combined with the rest
// of the 'a' and 'b' characters, we get banana.
console.log((''+ +'a').toLowerCase());