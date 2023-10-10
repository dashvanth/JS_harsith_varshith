// more events 

// keypress event
// mouseover event 

const body = document.body;

body.addEventListener("keypress", (e)=>{
    // console.log(e);
    console.log(e.key);
})

// mouse over 
const mainButton = document.querySelector(".btn-headline")
mainButton.addEventListener("mouseover", (e)=>{
    // console.log(e);
    console.log("mouse over ");
})
mainButton.addEventListener("mouseleave", (e)=>{
    // console.log(e);
    console.log("mouse leave ");
})