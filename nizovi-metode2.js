// filter metoda

// var niz = [1,2,3,4,5,6];
// var parni = niz.filter(function(vrednost){
//     return vrednost % 2 === 0;
// });

// ES6 metoda
var niz = [1,2,3,4,5,6];
var parni = niz.filter(vrednost => vrednost % 2 === 0);
console.log(parni);



console.log(parni);

// modernija sintaksa - ES8 - arrow funkciju

var sport = ["lopta", "rezultati", "kosarka", "bonus", "trener", "kos", "kosarkas"];
var rezultat = sport.filter(vrednost => vrednost.length > 6);
console.log("Filter metoda", rezultat);

// find metoda

var rezultat2 = sport.find(vrednost => vrednost.length > 6);
console.log("Find metoda", rezultat2);
