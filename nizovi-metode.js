var automobili = ["Audi", "BMW", "Opel"];

var text = "<ul>";
for(var i = 0; i < automobili.length; i++){
    // isto sto i 
    // text = text + "<li>" + automobili[i] + "</li>"
    text += "<li>" + automobili[i] + "</li>";
} 

text += "</ul>";

document.getElementById("auto"). innerHTML = text;


// Metode nizova

// dodavanje elementa u niz na kraj (brza metoda)
automobili.push("Volvo");
console.log(automobili);

// dodavanje elementa u niz na pocetak
automobili.unshift("Yugo");
console.log(automobili);

// brisanje elemenata niza - brise poslednji element
automobili.pop();
console.log(automobili);

// brisanje prvog clana niza
automobili.shift();
console.log(automobili);

// zamena nekog elementa niza
automobili[0] = "Mercedes";
console.log(automobili);

// dodavanje jednog ili vise elemenata niza
            // pozicija, koliko brisemo 0,0, 
automobili.splice(0,0, "Fiat", "Ferari");
console.log(automobili);

// splice mozemo da koristimo i za brisanje jednog ili vise elemenata
                // krece od pocetka 0, prva dva brise "2"
automobili.splice(0,2);
console.log(automobili);

// spajanje vise nizova tj. konkatenacija
var niz1 = [1,2,3];
var niz2 = [4,5,6];
var spojeniNiz = niz1.concat(niz2);
console.log(spojeniNiz);

// razdvaja elemente sa jednim znakom kao u primeru, mora biti jedan sting / raydvajanje niza u string sa separatorom
document.getElementById("auto").innerHTML = automobili.join(" * ");

// Rastavljanje stringa i kreiranje niza
var string = "Kako nam danas ide programiranje?";
var niz = string.split(" ");
console.log(niz);


