// createElement 

// document.createElement();-> used to create element(mostly)
// append,prepend,remove ->methods  

const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("reading for 30 mins");
newTodoItem.textContent = "reading for 30 mins"; 
// newTodoItem.append(newTodoItemText);
console.log(newTodoItem);

// adding list to todo list 
const todoList = document.querySelector(".todo-list");
todoList.append(newTodoItem); //adds at last
todoList.prepend(newTodoItem); //adds at first

// newTodoItem.remove();

// removing particular Element
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove()


// after , before adding eles 
// const todoList = document.querySelector(".todo-list");
const todo1 = document.createElement("li");
todo1.textContent = "wake up ";

todoList.before(todo1)
todoList.after(todo1)

