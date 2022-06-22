
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
    } else {
        eleccionComputer = "tijera";
    }

    return eleccionComputer;
        
}
    
    
function getPlayerSelect() {
        let eleccionPlayer = prompt("Elige piedra papel o tijera",);
        eleccionMinusPlayer = eleccionPlayer.toLowerCase();
        return eleccionMinusPlayer;
}

function comprobarGanador(eleccionComputer, eleccionMinusPlayer) {
   
    
    if (eleccionComputer == "piedra" && eleccionMinusPlayer == "tijeras" || 
        eleccionComputer == "papel" && eleccionMinusPlayer == "piedra" ||
        eleccionComputer == "tijeras" && eleccionMinusPlayer == "papel")  {
        document.write("<h1> Perdiste </h1>");
        counterComputer++;
    } else if (eleccionComputer == eleccionMinusPlayer) {
        document.write("<h1>Empate!</h1>");
    } else {
        document.write("<h1>Ganaste</h1>");
        counterPlayer++;
    }
}









let playerHand = getPlayerSelect();
let computerHand = getComputerSelect();

document.write("El jugador ha elegido: "+ playerHand +"<br> La maquina ha elegido: "+computerHand);

comprobarGanador(computerHand, playerHand);