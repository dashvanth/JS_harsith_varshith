const mainButton = document.querySelector("button");
console.log(mainButton);

const body = document.body;
const h1 = document.querySelector("h1");
function randomColorGenerator(){
    const red = Math.floor(Math.random()*255)+1;
    const blue = Math.floor(Math.random()*255)+1;
    const green = Math.floor(Math.random()*255)+1;
    const randomColor = `rgb(${red}, ${blue}, ${green})`;
    return randomColor;
}
mainButton.addEventListener("click", ()=>{
    const randomColor = randomColorGenerator();
    const colorChanger = body.style.backgroundColor = randomColor;
    h1.innerHTML = `Background Color: ${colorChanger}`
})

