// object destructuring 

const tvshow = {
    showName : "friends",
    favCharacter : "ross"
};

// const showNamevar = tvshow.showName;
// const favCharactervar = tvshow.favCharacter;

// console.log(showName, favCharacter);

// Object destructuring 
const {showName, favCharacter} = tvshow; 

// changing variable name 
const {showName:showNamevar, favCharacter:favCharactervar} = tvshow; 

console.log(showNamevar, favCharactervar);

// if you want to add another key value pair & store it in another Object 

// rest operator in objects 
const favtvshow = {
    showName : "friends",
    favCharacter : "ross",
    favSeason : 10,
    favDialougue : "I was on a break"
};
const {showName:showNamevar2, favCharacter:favCharactervar2, ...resProps} = favtvshow; 

console.log(showNamevar2, favCharactervar2, resProps);