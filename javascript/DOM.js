const container = document.querySelector('#container');

const paragraph = document.createElement('p');
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm Red!";

container.appendChild(paragraph);

const header3 = document.createElement('h3');
header3.style.color = "blue";
header3.textContent = "I'm a blue h3!";

container.appendChild(header3);

const pinkDiv = document.createElement('div');
pinkDiv.style.background = "pink";

const header1 = document.createElement('h1');
header1.textContent = "I'm in a div";

const meTooPara = document.createElement('p');
meTooPara.textContent = "ME TOO!";

pinkDiv.appendChild(header1);
pinkDiv.appendChild(meTooPara);
container.appendChild(pinkDiv);