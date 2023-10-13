// callback hell and pyramid of doom 

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2")
// setTimeout(()=>{
//     heading1.textContent = "heading 1";
//     heading1.style.color = "blue";
// },1000)


// not valid way 
// setTimeout(()=>{
//     heading2.textContent = "heading 2";
//     heading2.style.color = "yellow";
// },2000)

// valid way 
// setTimeout(()=>{
//     heading1.textContent = "heading 1";
//     heading1.style.color = "blue";
//     setTimeout(()=>{
//         heading2.textContent = "heading 2";
//         heading2.style.color = "green";
//     },1000)
    
// },1000)
