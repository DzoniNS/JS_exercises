function Osoba(ime, prezime, godine, bojaOciju, drzava){
    this.ime = ime;
    this.prezime = prezime;
    this.godine = godine;
    this.bojaOciju = bojaOciju;
    this.drzava = drzava;
}

// kreiranje objekata

var osoba1 = new Osoba("Nikola", "Adamovic", 31, "Braon");
console.log(osoba1.ime); //samo dodamo tacku i pojedinacu vrednos / naziv propetija

var osoba2 = new Osoba("Milos", "Milosevic", 33, "Zelena");
console.log(osoba2);

// dodavanje novog propertija
osoba1.grad = "Novi Sad";
console.log(osoba1);

// Ne mozemo dodati property na konstruktor objekta
Osoba.drzava = "Srbija";
