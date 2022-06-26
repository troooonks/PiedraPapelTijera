
let counterPlayer = 0;
let counterComputer = 0;

function getComputerSelect() {
    let eleccionComputer;

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
    console.log("el if de la maquina tiene el valor:"+eleccionComputer);
    return eleccionComputer;
        
}
    
    
function getPlayerSelect() {
        let eleccionPlayer = prompt("Elige piedra papel o tijera",);
        eleccionMinusPlayer = eleccionPlayer.toLowerCase();
        document.write("<h1>"+eleccionMinusPlayer+"<h1>");
        return eleccionMinusPlayer;
        
}


function playRound(eleccionComputer, eleccionMinusPlayer) {


    if ((eleccionComputer == "piedra" && eleccionMinusPlayer == "tijera")|| 
    (eleccionComputer == "papel" && eleccionMinusPlayer == "piedra") ||
    (eleccionComputer == "tijera" && eleccionMinusPlayer == "papel")) {
        document.write("<h1> Perdiste </h1>");
         } else if (eleccionComputer == eleccionMinusPlayer) {
        document.write("<h1>Empate!</h1>");
    } else if ((eleccionMinusPlayer == "piedra" && eleccionComputer == "tijera")|| 
    (eleccionMinusPlayer == "papel" && eleccionComputer == "piedra") ||
    (eleccionMinusPlayer == "tijera" && eleccionComputer == "papel")) {
        document.write("<h1>Ganaste</h1>");
        counterPlayer = counterPlayer + 1;       
    } else {
        document.write("<h1>Algo ha salido mal y no es tu culpa</h1>");
    }

}

function setScore() {
if ((computerHand == "piedra" && playerHand == "tijera")|| 
(computerHand == "papel" && playerHand == "piedra") ||
(computerHand == "tijera" && playerHand == "papel")) {
    counterComputer =  counterComputer + 1;
} else if (computerHand == playerHand) {
} else if ((playerHand == "piedra" && computerHand == "tijera")|| 
(playerHand == "papel" && computerHand == "piedra") ||
(playerHand == "tijera" && computerHand == "papel")) {
    counterPlayer = counterPlayer + 1;       
    } else {
        document.write("<h1>Algo ha salido mal y no es tu culpa</h1>");
    }
    
}
    let playerHand = getPlayerSelect();
    let computerHand = getComputerSelect();



document.write("El jugador ha elegido: "+ playerHand +"<br> La maquina ha elegido: "+computerHand);

for (let i = 0; i < 5; i++){
    getPlayerSelect();
    getComputerSelect();
    playRound(computerHand, playerHand);
    setScore();
    document.write("<h3>Marcador:</h3><h2>Jugador: "+counterPlayer+"</h2><h2>Ordenador: "+counterComputer+"</h2>");
}