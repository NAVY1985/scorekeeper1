var scores = {}; //score va a llevar el registro de los JUGADORES
    console.log(scores);
//
function createPlayer (object, name){
    object[name.toLowerCase()] = 0;
    console.log(object);
}

function addPoints(name, points){
scores[name] += points;
console.log(scores);

}

function printAllpoints(){
var arrayPlayers = Object.keys(scores);
var resultados = "";
for( var k=0; k<arrayPlayers.length; k++){

if( k == arrayPlayers.llength-1){//se verifica que estamos en el ultimo index
  resultados += arrayPlayers[k] + ": " + scores[arrayPlayers[k]];//si no es el ultimo indice no se agrega la coma
}else{
  resultados += arrayPlayers[k] + ": " + scores[arrayPlayers[k]] + ", ";//si no es el ultimo indice se deja la coma de separacion
}
}
return resultados;
}

createPlayer(scores, "ana");
addPoints("ana", 20);
addPoints("ana", 40);
createPlayer(scores, "lucia");
addPoints("lucia", 20);
console.log(printAllpoints());
