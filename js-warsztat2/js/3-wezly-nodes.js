'use strict';

var pierwszyPar = document.getElementById('parFirst');

/* Węzły rodzica */
console.log(pierwszyPar.parentNode);
console.log(pierwszyPar.parentElement);

/* Węzły dzieci */
console.log(pierwszyPar.childNodes); // zwraca wszystko, puste znaki też
console.log(pierwszyPar.children);

console.log(pierwszyPar.firstChild);
console.log(pierwszyPar.lastChild);

console.log(pierwszyPar.firstElementChild);
console.log(pierwszyPar.lastElementChild);

/* Węzły rodzeństwa */
console.log(pierwszyPar.previousSibling);
console.log(pierwszyPar.nextSibling);       //zwraca nam każdy typ - rodzenstwo wezlowe

console.log(pierwszyPar.previousElementSibling);
console.log(pierwszyPar.nextElementSibling);    //zwraca konkretny element - rodzenstwo znacznikowe

//challenge
 var parFirstNodes = pierwszyPar.childNodes;
console.log(parFirstNodes);


for (var i = 0; i<parFirstNodes.length; i++) {
     if (parFirstNodes[i].nodeType === 8) {
         console.log(parFirstNodes[i]);
         parFirstNodes[i].parentNode.removeChild(parFirstNodes[i]);
     }
 } 






