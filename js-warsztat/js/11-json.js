'use strict';

var jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian", 
            nazwisko: "Dziopa", 
            wzrost: 180, 
            oczy: "niebieskie", 
            zainteresowania: [ 
                { nazwa: "podroze" }, 
                { nazwa: "gotowanie" }
            ] 
        },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "gotowanie" },
                { nazwa: "języki" }
            ]
        },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "programowanie" },
                { nazwa: "podroze" },
                { nazwa: "języki" }
            ]
            
        }
    ]
}

console.log(jsonOsoby);

console.log(jsonOsoby.osoby);
console.log(jsonOsoby.osoby[0]);
console.log(jsonOsoby.osoby[0].wzrost);

//wzrost osoby o imieniu..... to.....


for(var i = 0; i<jsonOsoby.osoby.length; i++) {
    console.log('Wzrost osoby o imieniu ' + jsonOsoby.osoby[i].imie + ' to ' + jsonOsoby.osoby[i].wzrost);
}
    
















