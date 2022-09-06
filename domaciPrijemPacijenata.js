function prijem (ImeIprezime, godine, lecen){
    var jelecen = "";
    if(lecen === true){
        jelecen = "jeste";
    } else {
        jelecen = "nije";
    }
    alert("Primljen je pacijent " + ImeIprezime + " on ima " + godine + " godina, on je stari pacijent. " + jelecen);
};
prijem ("Nikola Ostovic", 30 , false);