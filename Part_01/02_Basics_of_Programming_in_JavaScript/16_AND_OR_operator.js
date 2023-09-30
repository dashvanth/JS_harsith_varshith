let tvShow = "friends";
let rating = 8;

// if(tvShow[0] === "f"){
//     console.log("the tv show name starts with 'f'");
// }

// // if(rating > 8.5){
// //     console.log("the tv show rating is above 8.5 and a good watch");
// // }

// using and operator -> all conditions should be true / satisfied
if(tvShow[0] === "f" && rating > 8.5){
    console.log("the tv show starts with 'f' and it has a above 8.5 rating and good watch");
}else{
    console.log("not starts with f and rating below 8.5");
}

// using OR operator -> if any 1 condition is true if block executes
if(tvShow[0] === "f" || rating > 8.5){
    console.log("the tv show starts with 'f' and it has a above 8.5 rating and good watch");
}else{
    console.log("not starts with f and rating below 8.5");
}