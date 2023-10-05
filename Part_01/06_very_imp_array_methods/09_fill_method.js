// fill method -> used to fill the same element/value multiple times 
// add same value mutiple times 
const values = new Array(10).fill(6);
console.log(values);

// replacing elements 
const myArray = [2,4,6,8,10];
// fill(value, start, end)
myArray.fill(0,1,3);
console.log(myArray);
// changes original Array 
