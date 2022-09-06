var hoteli = [
    {
        //properti  Vrednost propertija (naziv)
        naziv: "Hotel Park",
        adresa: "Novosadskog sajma 35",
        brojSoba: 140,
        rezervisano: 57,
        teretana: true,
        // metoda objekta
        brojSlobodnihSoba: function () {
            return this.brojSoba - this.rezervisano;
        }

    },

    {
        //properti  Vrednost propertija (naziv)
        naziv: "Centar",
        adresa: "Uspenska",
        brojSoba: 90,
        rezervisano: 35,
        teretana: false,
        // metoda objekta
        brojSlobodnihSoba: function () {
            return this.brojSoba - this.rezervisano;
        }

    },

    {
        //properti  Vrednost propertija (naziv)
        naziv: "Moskva",
        adresa: "Terazije 40",
        brojSoba: 250,
        rezervisano: 132,
        teretana: true,
        // metoda objekta
        brojSlobodnihSoba: function () {
            return this.brojSoba - this.rezervisano;
        }

    }
];

var txt = "";

for (var i = 0; i < hoteli.length; i++) {
    var pojedinacniHotel = hoteli[i];
    txt += "<p>Ime: " + pojedinacniHotel.naziv + "</p>";
    txt += "<p>Adresa: " + pojedinacniHotel.adresa + "</p>";
    txt += "<p>Ukupan broj soba: " + pojedinacniHotel.brojSoba + "</p>";
    txt += "<p>Rezervisano soba: " + pojedinacniHotel.rezervisano + "</p>";
    txt += "<p>Ima teretanu:</p> ";
    if (pojedinacniHotel.teretana) {
        txt += "<p>DA</p>"
    } else {
        txt += "<p>NE</p>"
    }
    txt += "<p>Broj slobodnih soba: " + pojedinacniHotel.brojSlobodnihSoba() + "</p>";
    txt += "<br>";
};

document.getElementById("hoteli").innerHTML = txt;