'use strict';

/* Odwoływanie po ID */

var firstParagraph = document.getElementById('parFirst');
console.log(firstParagraph);

firstParagraph.style.color = 'red';

/* Odwoływanie po klasie */

var superLinki = document.getElementsByClassName('superlink');
console.log(superLinki);

superLinki[0].style.color = 'yellow'; //musimy wybrac element kolekcji, samo superLinki.style.color nie wystarczy

/*superLinki.forEach(function(elem) {
    elem.style.color = 'green';
});*/

/*chcemysformatowac wszystkie elementy - uzywamy petli */

for(var i = 0; i<superLinki.length; i++) {
    superLinki[i].style.color = 'yellow';
}

/* odwołanie po znaczniku */
var linkiPoTagu = ducument.getElementsByTagName('a');
console.log(linkiPoTagu);

/*Odwołaniepo selektorze css - konwencja wywolania jak w cssie*/
var odwolaniePoSelektorze = document.querySelector('#parSecond');
console.log(odwolaniePoSelektorze);

var odwolaniePoSelektorzeKlasy = document.querySelector('.link');
console.log(odwolaniePoSelektorzeKlasy); //tylko pierwszy element

var kolekcjaLinkowPoSelektorze document.querySelectorAll('.link');
console.log(kolekcjaLinkowPoSelektorze);

var odwolaniePoSelektorze = document.querySelectorAll('#parSecond');
console.log(odwolaniePoSelektorze); //w tym wypadkudostaniemy jednoelementowa kolekcja, anie obiekt























