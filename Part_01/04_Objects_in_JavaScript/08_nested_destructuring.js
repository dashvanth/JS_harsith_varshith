// nested destructuring 

const users = [ 
    {userId:1, firstName:"dashvanth", gender:"male"},
    {userId:2, firstName:"priya", gender:"female"},
    {userId:3, firstName:"arun", gender:"male"}
]

const [user1, user2, user3] = users;

console.log(user1);

// nested destructuring 
const [{userId}, , {firstName}] = users;
console.log(userId, firstName);

// changing var name 
const [{firstName:user1FirstName}, , {gender:user3Gender}] = users;

console.log(user1FirstName, user3Gender);
