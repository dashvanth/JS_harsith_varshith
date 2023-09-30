// Primitive vs Reference type 

// primitive -> creates different memory block for each(in stack mode)
let num1 = 6;
let num2 = num1;
console.log("the value of num1 is", num1);
console.log("the value of num2 is", num2);

num1++;
console.log("the value of num1 is", num1);
console.log("the value of num2 will not change becoz it primitive type");
console.log("the value of num2 is", num2);


// reference type -> creates different pointers but as same address(in heap mode) 
let number1 = [6, 7, 8];
let number2 = number1;

console.log("the value of number1 is", number1);
console.log("the value of number2 is", number2);

number1[3] = 9;

console.log("the value of number1 is", number1);
console.log("the both value of number 2 will change because it is reference type");
console.log("the value of number2 is", number2);
