// const in arrays 

/*declaring const as arrays and using methods to add or remove elements doesn't give error because the addres is same but 

reassigning values using [] gives error because it changes the address */

const devices = ["mobile", "laptop"];
// allowed 
devices.push("television");
console.log(devices);
// not allowed 
// devices = ["television"];