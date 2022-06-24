
let counterPlayer;
let counterComputer;

function getComputerSelect() {
    let eleccionComputer;
    let resultadoComputer;

    let computerPlay = Math.floor(Math.random() * 3 + 1);

    if ( computerPlay == 1) {
        eleccionComputer = "piedra";
    } else if (computerPlay == 2) {
        eleccionComputer = "papel";
    } else if (computerPlay == 3) {
        eleccionComputer = "tijera";
    } else {
        document.write("La Computadora está rota");
    }
    document.write("<h1>el if de la maquina tiene el valor:"+eleccionComputer+"</h1>");
    return eleccionComputer;
        
}
    
    
function getPlayerSelect() {
        let eleccionPlayer = prompt("Elige piedra papel o tijera",);
        eleccionMinusPlayer = eleccionPlayer.toLowerCase();
        document.write("<h1>"+eleccionMinusPlayer+"<h1>");
        return eleccionMinusPlayer;
        
}


function comprobarGanador(eleccionComputer, eleccionMinusPlayer) {
    
    if ((eleccionComputer == "piedra" && eleccionMinusPlayer == "tijera")|| 
    (eleccionComputer == "papel" && eleccionMinusPlayer == "piedra") ||
    (eleccionComputer == "tijera" && eleccionMinusPlayer == "papel")) {
        document.write("<h1> Perdiste </h1>");
        counterComputer++;
    } else if (eleccionComputer == eleccionMinusPlayer) {
        document.write("<h1>Empate!</h1>");
    } else if ((eleccionMinusPlayer == "piedra" && eleccionComputer == "tijera")|| 
    (eleccionMinusPlayer == "papel" && eleccionComputer == "piedra") ||
    (eleccionMinusPlayer == "tijera" && eleccionComputer == "papel")) {
        document.write("<h1>Ganaste</h1>");
        counterPlayer++;
    } else {
        document.write("<h1>Algo ha salido mal y no es tu culpa</h1>")
    }
}


let playerHand = getPlayerSelect();
let computerHand = getComputerSelect();








document.write("El jugador ha elegido: "+ playerHand +"<br> La maquina ha elegido: "+computerHand);

comprobarGanador(computerHand, playerHand);