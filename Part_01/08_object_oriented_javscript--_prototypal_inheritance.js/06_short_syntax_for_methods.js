// short syntax for methods 

// const user1 = {
//     firstName : "dashvanth",
//     age : 22,
//     about : ()=>{
//         console.log(this); //window obj
//         console.log(this.firstName, this.age);
//     }
// }   

// short syntax 
const user1 = {
    firstName : "dashvanth",
    age : 22,
    about(){
        // console.log(this);   
        console.log(this.firstName, this.age);
    }
}

user1.about();