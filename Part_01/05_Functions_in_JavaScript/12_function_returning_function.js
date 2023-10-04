// func returning func 

function returnSomething(){
    // return "a"; string
    // return [a,b,c];
    return {firstName: "dashvanth"};
}
const returnedValue = returnSomething();
console.log(returnedValue);

// return can return function also 
// ex:
function myFunc(){
    function hello(){
        console.log("hello world");
    }
    return hello;
}
const ans = myFunc(); //even ans is a function now. 
console.log(ans);
ans();

// another way 
function myFunction(){
    return function(){
        return "returning function"
    }
}
const returnFunc = myFunction();
console.log(returnFunc());