// undefined
// null 
// BigInt
// Symbol

// undefined -> declared but not initialised or not has value  
let aadharNo;
let contactNo;
console.log(aadharNo);
console.log(contactNo);


// null -> which does not have any value 
let marks = null;
console.log(typeof marks);
// null typeof -> object => it is a bug in javascript 

// BigInt -> which is used for complex no's or large no's  
let imeiID = BigInt(32);
console.log(typeof imeiID);
let imeiID2 = 1n;

console.log(imeiID + imeiID2);
// bigint is only performs operations with another bigint 




