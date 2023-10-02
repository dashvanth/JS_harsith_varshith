// intro to functions in js 

// wrong way 
// console.log("good morning");
// console.log("good morning");
// console.log("good morning");

// functions 
// function declaration
function greeting(){
    console.log("good morning");
}

// function call
greeting();
greeting();

// const a = 10;
// const b = 20;
// function sum(){
//     console.log(a + b);
// }

// sum();

// using parameters 
function sumOfTwo(a,b){
    console.log(a + b);
}

sumOfTwo(1,3);
sumOfTwo(2,9);


// return keyword 
function sumOfTwo(a,b){
    return a + b;
}

const returnedValue = sumOfTwo(50,40);
console.log(returnedValue);


function evenOdd(number){
    if(number%2 === 0){
        console.log("number is even");
    }else{
        console.log("number is odd");
    }
}
evenOdd(1);
evenOdd(22);
evenOdd(29);


// making it more simpler
function oddEven(number){
    return number%2 === 0;
}

const oddEvenCheck = oddEven(2);
console.log(oddEvenCheck);

// printing first character of string 
function firstChar(anyStirng){
    return anyStirng[0];
}
console.log(firstChar("hello"));


// find the given target of an array 

function findTarget(array, target){
    for(let i=0;i<array.length-1;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

const myArray = [2,3,4,53];
const ans = findTarget(myArray, 3);
console.log(ans);