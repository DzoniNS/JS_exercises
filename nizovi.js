var automobili = ["Audi", "BMW", "Opel", "Porsche", "Volvo"];

// pristupanje clanu niza
document.getElementById("auto").innerHTML=automobili[0];

// duzina niza
var duzinaNiza = automobili.length;
console.log(duzinaNiza);

// pristup poslednjem clanu niza
document.getElementById("auto").innerHTML = automobili[automobili.length - 1];

// prolazak kroz niz tj. looping
for (var i =0; i < automobili.length; i++) {
    console.log (automobili [i]);
};