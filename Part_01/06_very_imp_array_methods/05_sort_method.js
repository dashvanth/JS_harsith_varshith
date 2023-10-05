// sort method ->sort elements in ASC/DSC . gives output as string
// ASCII TABLE 


const randomNumbers = [2,3,5,4,6,1,8,9];
console.log(randomNumbers);

const sorted = randomNumbers.sort();
console.log(sorted);
console.log(randomNumbers);

const numbers =[5,9,1200,3000,400];
numbers.sort();
console.log(numbers);
// ["5", "9", "1200", "3000", "400"] sort->sorts as strings.
// [53, 57, 49, 51, 52] //if there are 1200->it takes first value which is 1 => 49 ex: 1200 -> 49
// output: [1200, 3000,400,5,9]

// example
const userNames = ["dashvanth", "ananya", "priya", "suguna", "ABC", "abc"];
userNames.sort(); // 'A'=65, 'a' = 97
console.log(userNames);

// ____________________________________real method
// ascending order -> a-b 
// descending order -> b-a 
// expected output 
// sort method real use 
const someNumbers = [5,9,1200,410,3000];
someNumbers.sort((a,b)=>{ /*callback function in sort*/
    return a-b;
})

// else 
// someNumbers.sort((a,b)=>a-b)
console.log(someNumbers);
// console.log(someNumbers); now sorted 


// how it's working? 
// 1200, 410
// a =1200, b= 410
// a-b = 790 positive number (if output is greater than zero.)
// 410, 1200 

// a-b = -negative =>keep a 
// if negative => keep a else keep b 
// ex: 5,9 = -4; so keep first 5
// ___________________________________


// real life example 
// filpkart/amazon -> lowToHigh or highToLow option

const products = [
    {productId:1, productName: "phone", price: 10000},
    {productId:2, productName: "backCover", price: 500},
    {productId:3, productName: "earphones", price: 1000},
    {productId:4, productName: "laptop", price: 20000},
    {productId:5, productName: "lamp", price: 500},
]

// sorting 
// cloning because it is mutable 
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price;
})

console.log(lowToHigh);

// high to low 
const highToLow = products.slice(0).sort((a,b)=>{
    return b.price - a.price;
})

console.log(highToLow);
// console.log(products);
// __________________________________________
// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57



//==========================================================
//==========================================================
//==========================================================
// ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125