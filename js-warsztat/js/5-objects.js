'use strict';

var osoba = {
    name: 'Anna',
    height: '172',
    isProgrammer: true,
    about: function() {
        console.log('cześć, mam na imię '+ this.name);
    }
}

console.log(osoba.name);
console.log(osoba.height);
console.log(osoba.isProgrammer); //wyciagamy sobe wartosci kluczy x3 dla obiektu osoba

osoba.about();

osoba.weight = 72;

console.log(osoba);

osoba.getWeight = function() {
    console.log('waga osoby o imieniu ' + this.name + ' to ' + this.weight + ' kg');
}

osoba.getWeight();

/* Tworzenie klasy na dwa sposoby*/

/*function Person(name) {
    this.name = name;
}*/

class Person {
    constructor(name, height) {
        this.name = name;
        this.height = height;
        this.about = function() {
            console.log('Moje imię to ' + this.name + ' i mam ' + this.height + 'cm wzrostu');
        }
    }
}

var lukasz = new Person('Łukasz', 172);

var anna = new Person('anna', 174);
console.log(lukasz);

console.log(anna);

anna.about();
lukasz.about();

/* animal nazwa i liczba konczyn, dwa zwierzeta*/

class Animal {
    constructor(name, foot) {
        this.name = name;
        this.foot = foot;
        this.about = function() {
            if(this.foot > 0) {
                console.log(this.name + ' to zwierzę, które ma ' + this.foot + ' nogi');
            } else {
               console.log(this.name + ' to zwierzę, które ma ' + this.foot + ' nóg'); 
            }  
        }
    }
}

var swinia = new Animal('Świnia', 4);
var malpa = new Animal('Małpa', 2);
var waz = new Animal('Wąż', 0);

swinia.about();
malpa.about();
waz.about();







