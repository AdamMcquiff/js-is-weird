// Challenge 2A:
// What is the result of the following operation:

// ["str1", "str2"] + [0,1,2]

// Answer: str1,str20,1,2 
// Why? 

// In this situation, the '+' operator converts both arrays to strings
// and then concatenates the two strings together.

// Challenge 2B:
// How can you concatenate these arrays?

// Solution: the `concat()` method.
console.log(["str1", "str2"].concat([0,1,2]));

// Sometimes, JavaScript can be intuitive. 
// At other times, you simply need to know the syntax. It doesn't always make sense.
// Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat