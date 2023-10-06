// optional chaining ?. -> it gives undefined not error and checks whethet value exists or not

const user = {
    firstName : "dashvanth",
    // address: {city: "banglore"} even it doesn't exist using ?. doesn't gives error says undefined
}

console.log(user?.firstName);
console.log(user?.address.city); //optional chaining
