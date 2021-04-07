/*
DOME - Documnet Object Model

Documnet - HTML Document
Object - elements like h1, head, body
Model - Compete Document in structured way
*/

var newElement = document.createElement('h2');
newElement.textContent = 'Hello, I am H2 Tag';

document.querySelector('body').appendChild(newElement);
