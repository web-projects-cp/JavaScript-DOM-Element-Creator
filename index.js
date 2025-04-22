// Add the following elements to yhe container using ONLY Javascript and the DOM methods shown previously.
// 1. a <p> with red text that says, "Hey I'm red!"
// 2. an <h3> with blue text that says, "I'm a blue h3!"
// 3. a <div> with a black border and pink background color with the following elements inside of it:
//  a) another <h1> that says "I'm in a div"
//  b) a <p> that says, "ME TOO!"
//  c) Hint for this one: after creating the <div> with createElement, append the <h1> ans <p> to it before adding it to the container.

let container = document.createElement("div");
document.body.appendChild(container);

let p = document.createElement('p');
let h3 = document.createElement('h3');
let div = document.createElement('div');
let h1 = document.createElement('h1');
let p2 = document.createElement('p');

h1.textContent = `I'm in a div`;
p2.textContent = `ME TOO!`;
p.textContent = `Hey, I'm red!`;
h3.textContent = `I'm blue h3!`;

div.setAttribute('style','background-color:pink; border:1px solid black;');
p.setAttribute('style','color:red;');
h3.setAttribute('style','color:blue;');

div.appendChild(h1);
div.appendChild(p2);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);

