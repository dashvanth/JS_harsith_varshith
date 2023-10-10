// how event listener works (theory)

console.log("script starts!!!");
let allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach(function(button){
    button.addEventListener("click", (e)=>{
        let num = 0;
        for(let i=0;i<=100000000;i++){
            num += i;
        }
        console.log(e.currentTarget.textContent, num);
    });
})

let outerVar = 0;
for(let i=0;i<=100000000;i++){
    outerVar += i;
}

console.log("value of outer variable is", outerVar);
console.log("scrit ends!!");