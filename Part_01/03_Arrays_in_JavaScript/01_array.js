// intro to arrays -> homogenious collection of elements of same datatype or Ordered collection of items 
// reference type 

// how to create arrays 
let fruits = ["apple", "banana", "grapes", "papaya"]
console.log(fruits);
console.log(typeof fruits);
// array indexing 
// fruits[0] = apple 
// fruits[fruits.length-1] = papaya
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);


let marks = [90, 89, 96, 59];
console.log(marks);
console.log(marks.length-1);

// can store any type of values 
let mixed = [1, 2, 2.9, "string", null, undefined];
console.log(mixed);
let subjectMarks = ["dbms", 97, "networking", 89, "java", 90]
console.log(subjectMarks);

// refernce type 
// changing values 

let languages = ["c", "c++", "java", "english"];
console.log(languages);
languages[4] = "javascript";
console.log(languages);

// Array.isArray() -> used to check whether it is an array or not 
console.log(Array.isArray(languages));