// Challenge 3A:
// What is the value of x in following operation:

// let x = [] == ![];
// x ||= 7;

// Answer: true

// Why?

// Unlike the strict equality operator (===), the abstract equality operator (==) which we are using here 
// converts both sides of the comparison to numbers before comparing them. 
// With the abstract equality operator, empty arrays are always converted to '0'.
// Generally, arrays are 'truthy'. In other words, arrays (with the expection of a standalone empty array, which is converted to 0) 
// are always treated as "true". For example:
console.log(Boolean(['a']))

// But, with the use of '!' operator, the right-side array is
// converted to false, and subsequently to '0'.

// Here is how it works step-by-step:
// +[] == +![];
// 0 == +false;
// 0 == 0;
// true;

// Read more: https://github.com/denysdovhan/wtfjs#-is-equal- 

// Challenge 3B: 
// By only adjusting the second line of code from the following block, 
// and without explicity assigning `x` a value, 
// how can you make this code output 7?

let x = [] == ![];
// x ||= 7; // original line
x &&= 7; // intended solution (there's technically several)

console.log(x);

// We're using the new ES2021 Logical Assignment syntax.
// The above statements are short hand:
// `x ||= 7` is the same as `x = x !! 7`
// `x = x && 7` is the same as `x &&= 7`
// Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment

// JavaScript is always growing, and is one of the fastest-evolving mainstream programming languages.
// You can follow the language as it grows here: https://www.javascripttutorial.net/es-next/

