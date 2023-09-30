// Clone or copy of array 
// concatenating Array 

// clone

let array1 = ["item1", "item2"];

// using slice method  
// let array2 = array1.slice(0);
// let array2 = array1.slice(0).concat(["item3", "item4"])

// using concat method 
// let array2 = [].concat(array1);
// let array2 = [].concat(array1, ["item3", "item4"]);

// spread operator (...) mostly used 
// let array2 = [...array1]
let array2 = [...array1, "item3", "item4"];
console.log(array1);
console.log(array2);