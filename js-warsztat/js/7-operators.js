'use strict';

/* operatory arytmetyczne*/

var dodawanie = 2 + 2;
console.log(dodawanie);

var dzielenie = 4 / 2; //dzielenie przez zero zwraca wartosc liczbowa infinity
console.log(dzielenie);

var modulo = 3%2; //zwraca wartos reszty z dzielenia - wykorzystuje sie do parzystosci
console.log(modulo);

dodawanie++; //dodawanie=+1; inklementacja do wartosci 4 dodajemy 1

console.log(dodawanie); //mamy 5

dodawanie--; //-1 jest 4
dodawanie--; //-1 jest 3
console.log(dodawanie);

/* Operatory przypisania */

var liczba = 5;

liczba +=5; //dodaj i przypisz liczba=liczba+5
console.log(liczba); //powinno wyjsc 10

liczba *= 3; //mnozy liczbe przez 3
console.log(liczba);

liczba %= 7;
console.log(liczba);

/* Operatory porównania */

console.log(2 == 2); //znak równości, wynikiem porównania jest wartosc logiczna true/false

console.log(2 === '2'); //znak identycznosci

console.log(2 !== '2'); //porownujemy czy wartosci sa rozne, zwraca true bo sa - jest inny typ danych
 
console.log(2 > 3); //czy 2 jest wieksze od 3

console.log(2 >= 2);

/* Operatory logiczne */

console.log(( 1==1 && 2<3 )); //zwraca wartosc prawda jezeli wszystkie wydarzenia sa prawdziwe, jesli tylko jeden jest zly, albo wszystkie sa zle to jest nieprawda - koniunkcja

console.log( (1==1 || 2<3) ); //lub/suma , zwraca falsz jezeli wszystkie sa falszywe - alternatywa

console.log(!(1==1)); //zaprzeczenie, nieprawda ze 1=1 zwraca false

/* operator warunkowy */

var wiek = 100;
var mlodyStary = (wiek < 50) ? 'mlody':'stary'; //jezeli prawda zwraca mlody, jezeli falsz stary

console.log(mlodyStary);























