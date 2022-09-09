let playerSelection;
let text = document.getElementById("playerSelection");
let text2 = document.getElementById("computerSelection")



const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
   playerSelection = "rock";
   let computerSelection = getComputerSelection();
   text.innerHTML = "El jugador ha elegido: " + playerSelection;
   text2.innerHTML = "La máquina ha elegido: " + computerSelection;
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = "paper";
    let computerSelection = getComputerSelection();
    text.innerHTML = "El jugador ha elegido: " + playerSelection;
    text2.innerHTML = "La máquina ha elegido: " + computerSelection;
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = "scissors";
    let computerSelection = getComputerSelection();
    text.innerHTML = "El jugador ha elegido: "+ playerSelection;
    text2.innerHTML = "La máquina ha elegido: "+ computerSelection;
});








function getComputerSelection() {
    let computerSelection;

    let computerPlay = Math.floor(Math.random() * 3 + 1);

    if ( computerPlay == 1) {
        computerSelection = "piedra";
    } else if (computerPlay == 2) {
        computerSelection = "papel";
    } else if (computerPlay == 3) {
        computerSelection = "tijera";
    }    else {
        document.write("La Computadora está rota");
    }
    console.log("el if de la maquina tiene el valor:"+computerSelection);
    return computerSelection;
        
}
