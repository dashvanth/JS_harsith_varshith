// every method

const numbers = [2, 4, 5, 6, 8];

// function isEven(number){
//     return number%2===0;
// }

const ans = numbers.every((number) => number % 2 === 0);
// callback func ==>  true / false (boolean)

// every method ===> true / false (boolean)

// every () -> checks every condition . if 1 false, everything will be false

console.log(ans);

// realife example
const userCart = [
  { productId: 1, productName: "smartWatch", price: 55000 },
  { productId: 2, productName: "macbook", price: 440000 },
  { productId: 1, productName: "mobile", price: 40000 },
];

const finalAns = userCart.every((averagePrice) => {
  return averagePrice.price > 30000;
});
console.log(finalAns);