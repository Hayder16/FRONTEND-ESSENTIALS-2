var arrProductPrijs = [5,10,20,50,100];
var arrProductKorting = [0.95, 0.85, 0.98, 1.21];
var totaal = 0;
 
function rondaf(getal, aantalplekkenachterkomma){
    const x = Math.pow(10, aantalplekkenachterkomma);
    return Math.round(getal * x)/x;
}
var printTotaal=0;
 
for (let i=0; i < arrProductPrijs.length; i++){
 
    for(let i=0; i < arrProductKorting.length; i++){
        arrProductPrijs[i] = arrProductPrijs[i] - arrProductKorting[i];
        totaal = arrProductPrijs[i];
        totaalPrijs = rondaf(totaal,2);
    }
    console.log("Product " + i + " : " +totaalPrijs);
    printTotaal=totaalPrijs;
}
console.log("Totaal" + " : " + printTotaal);