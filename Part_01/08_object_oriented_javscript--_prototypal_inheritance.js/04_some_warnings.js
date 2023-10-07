const user1 = {
    firstName : "dashvanth",
    age : 22,
    about : function(hobby,favMovie){
        console.log(this.firstName, this.age, hobby, favMovie);
    }
}


// don't do this mistake 
// valid 

const myFunc = user1.about.bind(user1, "sleeping", "interStellar");
// or 
// myFunc(); 

// invalid 
const myFunc2 = user1.about;
myFunc2(); //because you're not calling method. only callig function of that key 
