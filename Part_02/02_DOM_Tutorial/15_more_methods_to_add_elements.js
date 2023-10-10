// more methods to add elements on page
// appendchild()
// insertbefore(), removeChild(), replaceChild();

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo"
// ul.appendChild(li);

const referenceNode = document.querySelector(".first-todo");

ul.replaceChild(li, referenceNode);



// static list vs live list 

// querySelectorAll -> static list (doesn't reflect changes on console but shows in browser)
// getElementBy---> live listItems(shows changes in console)
const listItems = document.querySelectorAll(".todo-list li");
const sixthList = document.createElement("li");
sixthList.textContent  = "item 6";
console.log(listItems);
// const ul = document.querySelector(".todo-list");
ul.append(sixthList)