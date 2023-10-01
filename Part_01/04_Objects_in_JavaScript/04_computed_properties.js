// Computed Properties 

const obj1 =  "objKey1";
const obj2 =  "objKey2";

const value1 = "myValue1";
const value2 = "myValue2";


[] //inside object gives the value of a variable. its called computed properties
// const obj = {
//     [obj1] : value1, 
//     [obj2] : value2
// };
// console.log(obj);

// another way 

const obj = {};

obj[obj1] = value1;
obj[obj2] = value2;
console.log(obj);