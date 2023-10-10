// adding events on multple elements 

let allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons);

// for(let button of allButtons){
//         button.addEventListener("click", function(){
//             console.log("you clicked me");
//             console.log(this.textContent);
//         } );
// }

// for each 
allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log("you clicked me");
        console.log(this.textContent);
    });
})