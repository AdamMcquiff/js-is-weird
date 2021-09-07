// Challenge 2A:
// What is the result of the following operation:
// js: ["str1", "str2"] + [0,1,2]

// Answer: str1,str20,1,2 
// Why? 
// But using the '+' operator, it converts the two arrays into strings, and then concatenates them.

// Challenge 2B:
// How can you concatenate these arrays?

// Solution: the `concat()` method.
// Sometimes, JavaScript can be so intuitive. 
// At other times, you've simply got to know the syntax. It doesn't always make sense.
// Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
console.log(["str1", "str2"].concat([0,1,2]));