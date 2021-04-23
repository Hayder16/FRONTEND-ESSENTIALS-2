let strNaam;
let boolNaamKlopt;
strNaam = prompt("Wat is je naam?");

if(boolNaamKlopt = confirm("Heet je echt " + strNaam + "?")){
    alert("Welkom " + strNaam + "!");
}
else{
    strNaam = prompt("Nogmaals, hoe heet je?");
}
if(boolNaamKlopt = confirm("Heet je echt " + strNaam + "?")){
    alert("Welkom " + strNaam + "!");
}
else{
    alert("Evengoed, welkom!"); 
}


console.log(strNaam);