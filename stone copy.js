//jugada máquina
let computerPlay;
let computerHand = "";
let playerSelection;
let text = document.getElementById("playerSelection");
let text2 = document.getElementById("computerSelection")
let gameResult = document.getElementById("gameResult");

//Jugada máquina, selecciona aleatorio y devuelve string en computerHand
function computerSelect() {
    
    computerPlay = Math.floor(Math.random() * 3 + 1);
    console.log(computerPlay);

    if (computerPlay == 1) {
        
        console.log("rock");
        computerHand = "rock";        

    } else if (computerPlay == 2) {

        console.log("scissors");
        computerHand = "scissors";       

    } else if (computerPlay == 3) {

        console.log("paper");
        computerHand = "paper";
        
    } 
    return computerHand;
}
//recoge datos para jugar una ronda en compareRound()
function playRound(playerSel) {    
    let computerSelection = computerSelect();
    text.innerHTML = "El jugador ha elegido: " + playerSel;
    text2.innerHTML = "La máquina ha elegido: " + computerSelection;
    compareRound(playerSel, computerSelection);
    
}

//Compara las elecciones y juega una ronda y devuelve el vencedor
function compareRound(player, computer) {
    console.log(player+" "+computer);
    if (player == "rock" && computer == "scissors"  ||
        player == "scissors" && computer == "paper"     ||
        player == "paper" && computer == "rock") {
        gameResult.innerHTML ="You win this round";
    }
    else if (player == "scissors" && computer == "rock" ||
            player == "rock" && computer == "paper"     ||
            player == "paper" && computer == "scissors") {
        gameResult.innerHTML = "Computer win this round";
    }
    else if (player ==  computer) {
        gameResult.innerHTML = "Draw";
    }         

}

//al hacer click en los botones pasa el valor a playRound
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
   playerSelection = "rock";
   playRound(playerSelection);

   });

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = "paper";
    playRound(playerSelection);

});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = "scissors";
    playRound(playerSelection);

});

//máquina, me dejas?


//Llamada a la función Jugada máquina
computerSelect();
//Extraigo computerHand para comprobar que funciona
console.log("computerHand es igual a "+ computerHand);

