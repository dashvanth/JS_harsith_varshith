let cars = ["lamborghini", "benz", "wolveswagen", "mustang"];
// push->insert element in the end
// pop->delete Element from the end 
// unshift->insert element in the start
// shift->delete element from the start 

cars.push("maruthi-800");
console.log(cars);

// pop->return element that popped 
// cars.pop();
let poppedElement = cars.pop();
// console.log(cars);
console.log(poppedElement);

cars.unshift("EV-inovo");
console.log(cars);

cars.shift();
console.log(cars);

// push & pop is faster compared to unshift and shift 