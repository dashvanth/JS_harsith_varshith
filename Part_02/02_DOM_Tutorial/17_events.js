// intro to events 

// events -> 
// click 

// 3 ways to add events
// 1. adding as html attribute //old way 
// 2. adding onlick method and function //not great to use

// const btn = document.querySelector(".btn");
// btn.onclick = function(){
//     console.log("you clicked me!!");
// }

// 3. using addEventListener
const btn = document.querySelector(".btn-headline");
function clickMe(){
    console.log("you clicked me!!");
}
// btn.addEventListener("click", c lickMe)
// or 
btn.addEventListener("click", ()=>{
    console.log("you clicked me");
})
