$(document).ready(function(){
// Primer 1 - izbroj sve p tagove
var paragrafi = $("p");
console.log("ima ukupno " + paragrafi.length + "p tagova");

// primer 2 - izbroj sve div, span i p tagove
var divs = $("div");
var spans = $("span");
var ps = $("p");
alert("Div tagova: " + divs.length + ", span tagova: " + spans.length + ", p tagova: " + ps.length);



});