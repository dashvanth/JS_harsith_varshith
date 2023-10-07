// first solution to that problem 

const userMethods = {
    about :  function (){
        return `${this.firstName} is this ${this.age} years old`;
    },
    is18 : function(){
        return this.age>18;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address; 
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}


const user1 = createUser('dashvanth', 'raj', 'dashvanthrjahc@gamil.com', 22, 'banglore' , "i am full stack developer", "he is 22!");

const user2 = createUser('ananya', 'hc', 'dashvanthrjahc@gamil.com', 18, 'banglore' , "i am full stack developer", "he is 22!");

const user3  = createUser('priya', 'lokesh', 'dashvanthrjahc@gamil.com', 22, 'banglore' , "i am full stack developer", "he is 22!");

console.log(user1.about());
console.log(user2.about());


// PROBLEM 
// if we want to add new methods then we have to add methods in both object and function 