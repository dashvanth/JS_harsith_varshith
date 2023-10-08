// closures in js ->when func return inside func that func takes the local memory and returns . it is called as closuress

// function  can return functions 

function outerFunction(){
    // return 1;
    // return "one";
    // return [1,2,3];
    function innerFunction(){
        console.log("hello world");
    }
    return innerFunction;
}

// const ans = outerFunction();
// // console.log(ans);
// ans();



function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}
// whenever you return a function inside a function that will take local property files
const ans1 = printFullName("dashvanth", "raj");
console.log(ans1);
ans1();