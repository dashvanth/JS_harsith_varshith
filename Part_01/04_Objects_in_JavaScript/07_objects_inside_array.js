// objects inside array 
// very helpful real world applications 

const devices = [
    {},
    {}, 
    {}
]

// creating obj inside array 
const users = [ 
    {userId:1, firstName:"dashvanth", gender:"male"},
    {userId:2, firstName:"priya", gender:"female"},
    {userId:3, firstName:"arun", gender:"male"}
]

// accessing 

// console.log(users[0]);

// in for of loop
for(let user of users){
    // console.log(user);
    // console.log(user.firstName);
}

// in for in loop 
for(let userr in users){
    console.log(users[userr]);
}