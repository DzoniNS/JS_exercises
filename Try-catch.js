// Primer 1 - bez gresaka

function primer1() {



    try {
        alert("usao sam u try blok");
        var a = 2 + 2;
        alert("sabrani broj je " + a);
        alert("Kraj try bloka");
    } catch (error) {
        alert("Catch je ignorisan, jer u try bloku nije bilo greske");
    }
};

// Primer 2 - sa greskom

function primer2() {
    try {
        alert("usao sam u try blok");
        lalalalalal;
        var a = 2 + 2;
        alert("Sabrani broj je " + a);
        alert("kraj try blok");
    } catch (error) {
        alert("desila se greska u try bloku, pa se izvrsio catch");
        alert(error.name);
        alert(error.message);
    }
}

// Primer 3 - finally blok
function primer3() {
    try {
        alert("Izvrsenje u try bloku");
        if (confirm("potvdi ako hoces da se desi greska")) {
            lala();
        }
    }
    catch (error) {
        alert(error.message);
    }
    finally {
        alert("Finally se izvrsio");
    }

}