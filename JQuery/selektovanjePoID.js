$(document).ready(function(){

    // Primer Prikazi ceo HTML code od forme sa ID_form1
    var forma = $("#form1").html();
    // console.log(forma);

    // isti primer kros JS
    // console.log(document.getElementById("form1").innerHTML);

    console.log($("#ImeTextBox").val());

    // Uredjivanje kroz CSS / moze i u jednom redu ("color","red").css("font-size","30px") brza metoda!   
    $("#ImeTextBox").css("color","red");
    $("#ImeTextBox").css("font-size","30px");





})