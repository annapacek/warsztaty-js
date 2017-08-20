'use strict';

function zaloguj() {
    console.log('Jestem w ciele funkcji');
}

//zaloguj(); //wywolanie funkcji

/*function dodajDwieLiczby() {
    var num1 = 5;
    var num2 = 3;
    
    var wynik = num1 + num2;
    
    console.log(wynik);
}

dodajDwieLiczby();*/ //tego nie uzywamy bo troche nie uniwersalne, patrz nizej

function dodajDwieLiczby(num1, num2) {
    var wynik = num1 + num2;
    console.log(wynik);
}

dodajDwieLiczby(2, 3);
dodajDwieLiczby(-2, 3);
dodajDwieLiczby(0, 4);
dodajDwieLiczby(2, 6);
dodajDwieLiczby(8, 8);

function dodajTrzyLiczby(num1, num2, num3) {
    var wynik = num1 + num2 + num3;
    console.log(wynik);
}

dodajTrzyLiczby(2, 3, 3);

function mnozenie(liczba1, liczba2) {
    var wynik = liczba1 * liczba2;
    return wynik; //musi byc zeby funkcja zwrocila wartosc, i zeby mozna ja bylo uzyc do dalszych delaracji
}

var doDodawania = mnozenie(2,2);

console.log(doDodawania);

dodajDwieLiczby(doDodawania, 6);


var funkcjaNienazwana = function() {
    return 'wartość nienazwanej funkcji'; //przerywa dzialanie funkcji tak jak break
};

console.log(funkcjaNienazwana);

/* Zasięg zmiennych */

var foo = 'foo'; //zmienna zadeklarowana poza funkcja

function test() {
    var bar = 'bar'; //zmienna bar zadeklarowana tylko w ciele tej funkcji
    console.log(foo + bar);
}

//console.log(foo+bar);

//zmienne zadeklarowane w ponizszej funkcji beda tylko lokalnie w tym pliku, nie wplywaja na inne zadeklarowane zmienne w innych plikach

(function() {
 var zmienna = "test";
 console.log(zmienna);
 }) ();

//console.log(zmienna); ta zmienna nie jest zadeklarowana w funkcji wiec nie bedzie dzialac dalej





























