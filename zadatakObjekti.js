var automobil = {
    // properti
    marka: "Renault",
    model: "Clio",
    snaga: 100,
    boja: "srebrna",
    upaljen: false,


 //metode
    upali: function (){
        this.upaljen = true;
    },

    ugasi: function() {
        this.upaljen = false;
    },

    prefarbaj: function(novaBoja){
        this.boja = novaBoja;
    }
};

console.log(automobil);

automobil.upali();
automobil.ugasi();
automobil.prefarbaj("zelena");

var daLiJeupaljen = "";
if(automobil.upaljen){
    daLiJeupaljen = "Upaljen";
} else{
    daLiJeupaljen = "ugasen";
}

var txt = "";
txt += "<p>Marka: " + automobil.marka + "</p>";
txt += "<p>Model: " + automobil.model + "</p>";
txt += "<p>Snaga: " + automobil.snaga + "</p>";
txt += "<p>Boja: " + automobil.boja + "</p>";
txt += "<p>Upaljen: " + daLiJeupaljen + "</p>";

document.getElementById("automobil").innerHTML = txt;

