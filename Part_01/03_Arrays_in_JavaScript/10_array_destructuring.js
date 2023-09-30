// Array Destructuring 

const array =  ["value1", "value2"];
// let myarr1 = array[0];
// let myarr2 = array[1];
// console.log("myarr1 is =", myarr1);
// console.log("myarr2 is =", myarr2);

// easy method 
// let [myarr1, myarr2] = array;
// console.log("myarr1 is =", myarr1);
// console.log("myarr2 is =", myarr2);

// const array2 = ["value1", "value2"]
// let [myarr1, myarr2 ,myarr3] = array2;
// console.log("myarr1 is =", myarr1);
// console.log("myarr2 is =", myarr2);
// console.log("myarr3 is =", myarr3);

// const array2 = ["value1", "value2", "value3"]
// let [myarr1, ,myarr3] = array2;
// console.log("myarr1 is =", myarr1);
// console.log("myarr2 is =", myarr2);
// console.log("myarr3 is =", myarr3);

// new array in existing array 
const array2 =  ["value1", "value2", "value3", "value4"];
let [myarr1, myarr2, ...myNewArray] = array2;
console.log("myarr1 is ", myarr1);
console.log("myarr2 is ", myarr2);
console.log("new array value is=", myNewArray);