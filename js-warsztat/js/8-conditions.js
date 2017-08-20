'use strict';

var liczba = 10;

/* warunek if - jesli */

if(liczba<12) {
    console.log('Prawda');
}

/* warunke if else*/

if(liczba<8) {
    console.log('Prawda');
} else {
    console.log('Fałsz');
}

/* warunek else if */

if(liczba<8) {
    console.log('Prawda');
} else if(liczba>8) {
    console.log('Fałsz');
} else {
    console.log('Jest równa');
}

/* warunek switch */
switch(liczba) {
    case 2:
        console.log('dwa');
        break;
    case 8:
        console.log('osiem');
        break;
    default:
        console.log('ani osiem ani dwa');
}





















