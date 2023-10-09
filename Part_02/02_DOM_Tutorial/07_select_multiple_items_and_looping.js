// selecting multiple items using class name 
// selecting multiple elements using querselectorAll

// const navItems = document.getElementsByClassName("nav-item");
// console.log(navItems);
// console.log(navItems[0]); //first nav item
// console.log(typeof navItems[0]);
// console.log(Array.isArray( navItems[0]));


// looping through eles 
// we can't use forEach method
const buttons = document.querySelectorAll('.btn');
console.log(buttons);

const navItems = document.getElementsByClassName("nav-item");

for(let i=0;i<navItems.length;i++){
    const navItem = navItems[i];
    // navItem.style.backgroundColor = "white"; 
}

// for of loop 
for(let navItem of navItems){
    // navItem.style.color = "black"
    // navItem.style.backgroundColor = "white"
}

// HTMLCollection -> no forEach 
// NodeList -> all loops, even forEach 