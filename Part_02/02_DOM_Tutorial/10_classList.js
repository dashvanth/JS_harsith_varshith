// classList ->gives how many classes are there

const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList);

// adding a class using js 
// sectionTodo.classList.add("section-bg-dark");

// to remove a class 
// sectionTodo.classList.remove("container");

// to check a class exist?
const ans = sectionTodo.classList.contains("container");
console.log(ans);

// toggle ->if doesn't exists it adds else if exists it removes

sectionTodo.classList.toggle("bg-dark"); //adds
sectionTodo.classList.toggle("bg-dark"); //removes

// header 
const header = document.querySelector(".header");
console.log(header.classList.add("bg-dark"));   
console.log(header.classList);

