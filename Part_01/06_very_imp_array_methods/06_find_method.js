// find method -> finds an element and stores only first occurence 

const myArray = ["hello", "cat", "dog", "lion"];

// function isLength(string){
//     return string.length === 3;
// }

const ans = myArray.find((string)=>{
    return string.length === 3;
});//only gives first occurence, ex: 'cat','dog'. only cat will take.[basically only stores one value]
console.log(ans);


// real life example 
const users = [
    {userId:1, userName: "dashvanth"},
    {userId:2, userName: "suguna"},
    {userId:3, userName: "priya"},
    {userId:4, userName: "ananya"},
]

const myUser = users.find((user)=>{
    return user.userId === 3;
})

console.log(myUser);