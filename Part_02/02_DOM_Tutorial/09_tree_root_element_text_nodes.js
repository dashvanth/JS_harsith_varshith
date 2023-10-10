// deeply understanding dom tree Node, root Node, element node, text node 

// rootNode relation 
const rootNode = document.getRootNode();
console.log(rootNode);
const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes); nodeList[3] head,text,body

// parent child relation
const headElementNode = htmlElementNode.childNodes[0];
const textElementNode = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];

console.log(headElementNode);
console.log(textElementNode);
console.log(bodyElementNode);


console.log(headElementNode.parentNode);

// sibling relation 
console.log(headElementNode.nextSibling);
console.log(bodyElementNode.previousSibling);

// headElementNode childno 
console.log(headElementNode.childNodes);

const heading = bodyElementNode.childNodes[1].childNodes[1]
console.log(heading.style.color = "green");

// div bg change 
const h1 = document.querySelector('h1');
const div = h1.parentNode.parentNode;
div.style.backgroundColor = "yellow";
console.log(div);


const head = document.querySelector("head");
const title = head.querySelector("title");
console.log(title);
