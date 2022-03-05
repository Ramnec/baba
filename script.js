

var rawnumber = prompt("Cata faina doriti sa puneti?");

var initialFaina = parseInt(rawnumber);


function fainaToFaina(x,y){
    document.getElementById("faina").innerHTML = initialFaina +" g" ;
}


function fainaToMilk(x,y){
    document.getElementById("lapte").innerHTML = (initialFaina) / 100 *166 +" ml" ;
}

function fainaToSugar(x,y){
    document.getElementById("zahar").innerHTML = initialFaina + " g";
}

function fainaToOua(x,y){
    document.getElementById("oua").innerHTML = Math.round(((initialFaina) / 100 *176) / 53) + " Bucati";
}

function fainaToIaurt(x,y){
    document.getElementById("iaurt").innerHTML = Math.round((initialFaina) / 100 *83.33) +" ml";
}

function fainaToUlei(x,y){
    document.getElementById("ulei").innerHTML = Math.round((initialFaina) / 100 *66.66) + " ml";
}

function fainaToSoda(x,y){

    var sodaRaw = ((initialFaina) / 100 *7.33) /14.786764782056;
    var sodaFixed = Math.round( sodaRaw * 10 ) / 10;
    document.getElementById("soda").innerHTML = sodaFixed + " Linguri";
}

function fainaToVodka(x,y){
    document.getElementById("vodka").innerHTML = Math.round((initialFaina) / 100 *8.33) + " ml" ;
}



function allFunctions() {
    fainaToFaina();
    fainaToMilk();
    fainaToSugar();
    fainaToOua();
    fainaToIaurt();
    fainaToUlei();
    fainaToSoda();
    fainaToVodka();
  }


