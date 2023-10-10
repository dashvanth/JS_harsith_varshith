// click event practice 

let allButtons = document.querySelectorAll(".my-buttons button");

// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         this.style.backgroundColor = "yellow";
//         this.style.color = "grey";
//     })
// }

allButtons.forEach(function(button){
    button.addEventListener("click", (e)=>{
        e.target.style.color = "grey";
        e.target.style.backgroundColor = "yellow";
        console.log(e.target);
    })
})