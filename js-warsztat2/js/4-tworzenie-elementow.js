'use strict';

/*
stworzyc naglowek poziomu drugiego, dodac do niego tresc i umiescic go pod naglowkiem h1
*/
var mainHeader = document.getElementById('main-header');

var secondHeader = document.createElement('h2');
var secondHeaderText = document.createTextNode('Treść drugiego nagłówka');

var thirdHeader = document.createElement('h3');
var thirdHeaderText = document.createTextNode('Treść trzeciego nagłówka');

secondHeader.appendChild(secondHeaderText);
thirdHeader.appendChild(thirdHeaderText);
thirdHeader.setAttribute('class', 'third-header'); //dodawanie atrybutu klasy


mainHeader.parentNode.appendChild(secondHeader);
mainHeader.parentNode.insertBefore(thirdHeader, mainHeader);

console.log(secondHeader);

/* stworzyc tresc paragrafu miedzy dwoma naglowkami*/

var additionalParagraph = document.createElement('p');
var additionalParagraphText = document.createTextNode('Treść dodatkowego paragrafu');

additionalParagraph.appendChild(additionalParagraphText);

mainHeader.parentNode.insertBefore(additionalParagraph, mainHeader.nextSibling);

/* usuwanie elementów */

var parFirst = document.getElementById('parFirst');

parFirst.removeChild(parFirst.children[1]);

console.log(parFirst.children); //sprawdzamy po jakim indexie musimy sie odwolac zeby usunac kalse z linku ktory zostal

parFirst.children[3].removeAttribute('class');

/* Dodawanie treści do istniejących znaczników */

mainHeader.innerHTML = 'Nowa treść <span>paragrafu</span>'; // span traktowane w htmlu jako element

parFirst.innerHTML = 'Nowa zawartość diva'

//mainHeader.innerText = 'Nowa treść <span>paragrafu</span>'; traktowane jako tekst w calosci

/* Klasy i style */

var superlink = document.querySelector('.superlink');
//sprawdzam czy moj selektor ma jakas klase
console.log(superlink.classList);

//superlink.className = 'calkiem-nowa-klasa'; //nasze klasy zostna nadpisane ta nowa klasa
superlink.className += ' calkiem-nowa-klasa'; //tak dodajemy, spacja na poczatku bo moga byc juz istniejace klasy wiec ma sie nie sklejac z nimi

superlink.style.fontSize = '3em';



















































