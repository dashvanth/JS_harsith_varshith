// scope chain and 
// lexical environment -> it searches where the related element/var is (in parent / global) 

const lastName = "raj";

const printName = function(){
    const firstName = "dashvanth";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();

}
printName();