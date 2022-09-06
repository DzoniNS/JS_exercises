var osoba = {
    ime: "Nikola",
    prezime: "Adamovic",
    godina: 31,
    bojaOciju: "braon"
};

var txt ="";
for(var property in osoba){
    txt += osoba[property] + "<br>";
};

console.log(txt);

// ispisivanje na stranici
document.getElementById("osoba").innerHTML = txt;
