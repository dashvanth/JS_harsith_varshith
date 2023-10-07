// factory functions and discussing memory related problems 

// const user = {
//     firstName : "dashvanth", 
//     lastName : "raj", 
//     email : "dashvanthrajhc@gmail.com",
//     age : 22, 
//     address : "house number, colony, pincode, state",
//     about : function (something){
//         console.log(`${this.firstName} is this ${this.age} years old ${something    }`);
//     },
//     is18 : function(){
//         return this.age>18;
//     }
// }

// user.about();
// user.about.call(user, "hey there!");
// user.about.apply(user, ["hello world"]);
// const myFunc = user.about.bind(user, "hey there");
// myFunc();


// factory function
// function(that function creates a object)
// 2. add key value pair 
// 3. return the object

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address; 
    user.about =  function (){
        return `${this.firstName} is this ${this.age} years old`;
    };
    user.is18 = function(){
        return this.age>18;
    };
    return user;
}

const user1  = createUser('dashvanth', 'raj', 'dashvanthrjahc@gamil.com', 22, 'banglore' , "i am full stack develo[er", "he is 22!");
// console.log(user1);

const userIs18 = user1.is18();
console.log(userIs18);
const user1About = user1.about();
console.log(user1About);



// PROBLEMS 
// every time methods create ho rahi hai user1, user2, user3 