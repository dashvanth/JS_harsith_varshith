// this in arrow functions 
// arrow func not have this inside object normally. they show window obj

// arrow func -> takes this from surrounding means one level higher than normal
const user1 = {
    firstName : "dashvanth",
    age : 22,
    about : ()=>{
        console.log(this); //window obj
        console.log(this.firstName, this.age);
    }
}

// user1.about(); //undefined 
user1.about(user1); //undefined 