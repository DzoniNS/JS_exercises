function najveci(prvi, drugi, treci){
    var max = 0;

    if(prvi>drugi){
        max = prvi;
    }else{
        max = drugi;
    };

    if(max > treci){
        alert("Najveci broj je: " + max);
    } else{
        alert("Najveci broj je: " + treci);
    }
}

najveci(500,7500,88000);