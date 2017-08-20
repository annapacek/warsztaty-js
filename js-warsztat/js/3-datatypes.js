'use strict';

/* Typ liczbowy */

var liczba = 10;
var liczbaZmiennoprzecinkowa = 3.14;

console.log(liczba);
console.log(liczbaZmiennoprzecinkowa);

/* Typ łańcuchowy */

var imie = 'anna';
var liczbaJakoString = '3.14'; //zmienna typu łańcuchowego - string, zmienna tekstowa jako ciag znakow

console.log(liczba);
console.log(liczbaZmiennoprzecinkowa);

/* Typ logiczny */

var jestCieplo = true;
var jestZimno = false;

if(jestCieplo) {
    console.log('Jest ciepło');
} else {
    console.log('Jest zimno');
}   //jezeli zmienna jest cieplo jest prawdziwa to wyswietl 'jest cieplo
//jesli zmienna nie jest prawdziwa to wyswietl jest zimno

/* Typ specjalny - wyswietlane na szaro w konsoli*/

var zmiennaBezWartosci; //zmienna bez przypisanej wartosci
var nullowaZmienna = null;

console.log(zmiennaBezWartosci); //pudelko jest puste, wywali blad
console.log(nullowaZmienna); //w pudelku jest cos, ale nieokreslone,jesli jest zero, to jest okreslona wartosc

/* Sprawdzanie typów zmiennej */

console.log(typeof liczbaZmiennoprzecinkowa);
console.log(typeof jestCieplo);
console.log(typeof liczbaJakoString);
console.log(typeof nullowaZmienna);

