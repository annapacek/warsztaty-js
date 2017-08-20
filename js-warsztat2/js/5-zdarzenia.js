'use strict';

var mainHeader = document.getElementById('main-header');
//Zdarzenie dom
function zmienKolorTla() {
    this.style.backgroundColor = 'red'; // jesli wstawimy this to mamy bardziej uniwersalna funkcje
}

mainHeader.onclick = zmienKolorTla;

/* mozemy tez zrobic tak

mainHeader.onclick = function() {
this.style.backgroundColor = 'yellow';
};
*/

//Nasłuchowanie zdarzenia

var secPar = document.getElementById('parSecond');

secPar.addEventListener('click', zmienKolorTla);

/*mozna tez zapisac jako funkcje anonimowa 
secPar.addEventListener('click', function() {
    this.style.backgroundColor = 'green';
}); */

/*wylaczanie zdarzenia na skutek wywolania wczesniej innego zdarzenia - z nasluchem przy zdefiniowanej funkcji mozna to zrobic */

mainHeader.onclick = function() {
    secPar.removeEventListener('click', zmienKolorTla);
}

/* Propagacja zdarzeń - wykonywanie zdarzen od dolu do gory */

var firstPar = document.getElementById('parFirst');

//pobieramy ostatniego childa

var lastLink = firstPar.lastElementChild;

firstPar.addEventListener('click', function() {
    alert('Klik w cały kontener');
});

lastLink.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation(); //nie wykonuj zdarzen w gore, na rodzicach, juz sie nie pojawi klik w kontener
    alert('Klik w link');
});

/* NA poczatku pojawi sie alert z linku a potem z kliku w caly kontener */






















