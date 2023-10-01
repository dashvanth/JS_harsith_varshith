// Dot vs Bracket notation difference 
// dot -> can't write properties with white space 
// bracket -> can write with white space and can be used to add ele's as an array inside object 

 const person = {
    name : "dashvanth",
    age : 22,
    "person qualification" : ["PCMC", "B.tech"]
 };

 console.log(person.name);
 console.log(person["person qualification"]);

 const key = "email";

 person[key] = "dashvanthraj@gmail.com";
 console.log(person);