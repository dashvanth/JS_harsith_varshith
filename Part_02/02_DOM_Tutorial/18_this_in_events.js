// this keyword in addEventListener 

const btn = document.querySelector(".btn-headline");

function clickMe(){
    console.log("clicked");
    console.log("value of this");
    console.log(this);
}
btn.addEventListener("click", clickMe)

btn.addEventListener("click", ()=>{ 
    console.log("you clicked me");
    console.log(this);
})
// this in normal func -> btn Element
// this in arrow func -> window obj 
