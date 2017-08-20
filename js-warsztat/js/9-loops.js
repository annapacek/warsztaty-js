'use strict';

for(var i = 0; i<5; i++) {
    console.log(i);
}

var tablica = [12, 'anna', false, null];

for(var j = 0; j<tablica.length; j++) {
    console.log(tablica[j]);
}

var zbiorLiczb = [1,3,8,16,36,91,101,400,5052];

var suma = 0;

for(var k = 0; k<zbiorLiczb.length; k++) {
    
    if(zbiorLiczb[k] % 2 == 0) {
        suma +=zbiorLiczb[k];
    }
    console.log(suma);
}

var losowa = Math.floor(Math.random()*10);
/*
while(losowa > 2) {
    console.log('Losowa liczba ' + losowa);
    losowa = Math.floor(Math.random()*10);
}*/

do {
     console.log('Losowa liczba ' + losowa);
    losowa = Math.floor(Math.random()*10);
} while(losowa > 2);


for(var l = 0; l<5; l++) {
    console.log(l);
    
    if(l == 3) break; //przerywa calkowicie petle
}

for(var m = 0; m<10; m++) {
    if(m% 2 == 0) continue;  //przerywa petle jesli warunek nie jest spelniony ale idzie dalej i szuka
    console.log(m) ;         //spelnionego warunku
}


var rozneZmienne1 = [4, 'anna', false, null, 2, 'czesc', 12];

var sumaZmiennych = 0;

for(var n = 0; n<rozneZmienne1.length; n++) {
    if(typeof rozneZmienne1[n]  != 'number') continue; 
        sumaZmiennych +=rozneZmienne1[n];
    console.log(sumaZmiennych);
    }


















