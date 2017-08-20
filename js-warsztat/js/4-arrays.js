'use strict';

var tablica = [12, 'anna', false, null]; //tablica 4 elementowa
var tablicaWTablicy = [['anna', 'marek'], ['wojciech', 'ola']]

console.log(tablica[1]); //wyciagnie mi drugi element bo w tablicy iczymy od zera 
console.log(tablicaWTablicy[1][1]); //wyciagne z drugiego wiersza (pierwszy element), drugie imie (pierwszy element)

/* Dlugosc tablicy */

console.log(tablica.length); //pokazuje dlugosc tablicy

/* Dodawanie elementó na koniec tablicy - metoda push () */

tablica.push('ania');
tablicaWTablicy[1].push('ania');

console.log(tablica);
console.log(tablicaWTablicy);

/* Usuwanie elementu z konca tablicy */

tablica.pop(); //usunie ostatni element
console.log(tablica);

/* Dodawanie elementów na poczatek tablicy */

tablica.unshift('ania');
console.log(tablica);

/* Usuwanie elementów z poczatku tablicy */

tablica.shift();
console.log(tablica);

/* Łączenie elementów w ciąg znaków - tablica do stringa */

var imiona = ['marek', 'zygmunt', 'mieczyslaw'];

console.log(imiona.join()); //oddzielone przecinkiem
console.log(imiona.join('-')); //oddzielone myslnikiem

/* Odwracanie tablicy */

console.log(imiona.reverse());

/* sortowanie elementów tablicy */
console.log(imiona.sort());

/* Lubię programować w JavaScript */

var text = 'Lubię programować w JavaScript';

console.log(text.split(' ')); //dzieli zdanie wg spacji w tekscie























