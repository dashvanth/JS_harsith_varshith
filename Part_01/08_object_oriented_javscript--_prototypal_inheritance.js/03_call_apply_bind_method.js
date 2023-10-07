// call, apply and blind method 


// call method 


function hello(){
    console.log("hello world");
}
hello();
hello.call(); //both ways are same
// we have call, apply and bind method 


// we can write the function outside of the object also 
function about(hobby, favTvShow){
    console.log(this.firstName, this.age, hobby, favTvShow);
}
const user1 = {
    firstName : "dashvanth", 
    age : 22
    // about : function(hobby, favTvShow){
    //     console.log(this.firstName, this.age, hobby, favTvShow);
    // }
}
// problem : user2 doesn't have about and we want to use it in user2 
const user2 = {
    firstName : "ananya", 
    age : 18
}

// solution : we can use call method    
// user1.about.call(user2, "watching movies", "Arjit Singh"); //we can pass arguments
about.call(user2, "watching movies", "strangerThings");

// ===============
// apply method -> we can add input in array type
about.apply(user1, ["sleeping", "breakingBad"])

// bind method -> it just returns a function

const myFunc = about.bind(user1, "reading books", "friends");
myFunc(); //we can call them    