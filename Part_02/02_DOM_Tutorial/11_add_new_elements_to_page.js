// adding new elements to page in js 

const todoList = document.querySelector(".todo-list");
console.log(todoList);

// todoList.innerHTML =" todo 1";
// todoList.innerHTML = todoList.innerHTML + "<li> new todo";
// or
//  todoList.innerHTML += "<li>new todo";

// when you should use innerHTML,
// the above is the wrong way to use because js render the code again and again in the above code 
// > don't use to add elements
// when you should use 
// only when you want to change full innerHTMl 