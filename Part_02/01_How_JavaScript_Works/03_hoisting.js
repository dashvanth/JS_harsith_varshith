// hoisting -> exectuing the code before declaration. it happes in function due to global execution context.(it saves the variables and functions before declaration)


console.log(this);
console.log(window);
console.log(myFunc);
console.log(fullName);

// function declaration //-> it executes because it is function and stored first in global execution context
// function myFunc(){
//     console.log('this is my function');
// }

// function expression //-> undefined (not executes becuase it stores as a var)
var myFunc = function(){
    console.log("this is my Func");
}
console.log(myFunc);

// var firstName = "dashvanth";
// var lastName = "raj";
// var fullName = firstName + " " + lastName;
// console.log(fullName);
