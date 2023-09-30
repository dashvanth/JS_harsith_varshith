// guessing game 

// winning number 06 
// 03 - number is too low
// 09 - number is too high 
// 06 - number is correct 

// prompt takes input in string 
let guessNo = 6;
let userInput = Number(prompt("guess the number"));

if(userInput === guessNo){
    console.log(`Your guess was correct. number is = ${guessNo}`);
}else{
    if(userInput > guessNo){
        console.log("The number is too high");
    }else{
        console.log("the number is too low");
    }
}