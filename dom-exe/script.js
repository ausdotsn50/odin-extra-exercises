const container = document.querySelector("#container");

const parag1 = document.createElement("p");
parag1.textContent = "Hey I'm red!";
parag1.style.color = "red";

const headThree = document.createElement("h3");
headThree.textContent = "I'm a blue h3!";
headThree.style.color = "blue";

// parent
const newDiv = document.createElement("div");
newDiv.style.backgroundColor = "pink";
newDiv.style.border = "2px solid black";

// children
const headerOne = document.createElement("h1");
headerOne.textContent = "I'm in a div";

const parag2 = document.createElement("p");
parag2.textContent = "ME TOO";

newDiv.appendChild(headerOne);
newDiv.appendChild(parag2);

container.appendChild(parag1);
container.appendChild(headThree);
container.appendChild(newDiv);