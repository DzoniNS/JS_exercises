// Definicija objekta, moraju viticaste zagrade
var hotel = {
//properti  Vrednost propertija (naziv)
    naziv: "Hotel Park",
    adresa: "Novosadskog sajma 35",
    brojSoba: 140,
    rezervisano: 57,
    teretana: true,
    // metoda objekta
    brojSlobodnihSoba: function(){
        return this.brojSoba - this.rezervisano;
    }

};

console.log(hotel);

// Pristupanje propertijima objekta
var imeHotela = hotel.naziv;  // I nacin
var imeHotela = hotel['naziv']; // II nacin
console.log("Ime hotela", imeHotela);
console.log("Ime hotela", imeHotela);
// Pristup metodi objekta
var slobodneSobe = hotel.brojSlobodnihSoba();
console.log(slobodneSobe);

// promena vrednosti propertija
hotel.teretana = false;
hotel.rezervisano = 80;

// dodavanje novog propertija
hotel.bazen = true;
hotel.grad = "Novi Sad";

// dodavanje metode u objekat
hotel.punaAdresa = function(){
    return this.adresa + " , " + this.grad;
}

console.log(hotel.punaAdresa());
