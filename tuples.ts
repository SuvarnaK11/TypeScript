//Tuples => to arrange values of arrays in a specific sequence.

let arr1: [number, string];
arr1 = [123, "hello world"];
// arr1 = ["hello", 978]                NOT ALLOWED

type User = [string, number, boolean];
let myUser :User = ["radha", 11, true];
myUser["sonu"] = [12, false]      // VALUES CAN BE OVERRIDE

arr1.push(098)         //though push, pop, shift, unshift work on tuples

export{}