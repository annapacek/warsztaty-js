'use strict';

/*Deklaracja zmiennej bez wartosci */

var zmienna; //zmienna bez wartosci

var liczba = 2; //zmienna z okreslona wartoscia

var imie = 'Anna';

zmienna = 10; //juz zadeklarowalam zmienna, teraz moge zadeklarowac wartosc

console.log(zmienna); //w logu wyswietli sie wrtosc zminnej 10

zmienna = 6; //juz zadeklarowalam zmienna, teraz moge zadeklarowac wartosc

console.log(zmienna);

zmiennaBezDeklaracji = 'Anna';

console.log(zmiennaBezDeklaracji); //nie bedzie dzialac jesli uzylismy na gorze use strict, jak usuniemy to dziala

//mozemy przypisac wartosc zmiennej do zmiennej

zmienna = imie;
console.log(zmienna);