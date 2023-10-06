// iterables ->where we can use for of loop. 
// String, array are iterables


// string 
const firstName = "dashvanth";
for(let char of firstName){
    console.log(char);
}

// array 
const mobileDevices = ["realme", "redmi", "iphone", "samsung"];
for(let device of mobileDevices){
    console.log(device);
}

// not iterable 
// object 
const users = {
    user1: "dashvanth",
    user2: "ananya", 
    user3: "suguna"
};

// for(let user of users){
//     console.log(users[user]);
// }
// not iterable


// array like object -> which has .length property and can be accessed by index no. 
// ex: string 

const fullName = "dashvanth raj hc";
console.log(fullName.length);
console.log(fullName[3]);

