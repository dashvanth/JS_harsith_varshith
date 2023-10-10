// event Object -> when event happened it takes info which is an obj

let allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach(function(button){
    button.addEventListener("click", (e)=>{
        console.log(e);
        console.log(e.target);
        console.log(e.currentTarget);
    });
})