
let computerPlay;
let computerHand = "";
let playerSelection;
let computerScore = 0;
let playerScore = 0;

//asigno las llamadas a elementos de html a variables
let text = document.getElementById("playerSelection");
let text2 = document.getElementById("computerSelection")
let gameResult = document.getElementById("gameResult");
let score = document.getElementById("score");
let win = document.getElementById("controls");


//Jugada máquina, selecciona aleatorio y devuelve string en computerHand
function computerSelect() {
    
    computerPlay = Math.floor(Math.random() * 3 + 1);
    console.log = computerPlay;

    if (computerPlay == 1) {
        
        computerHand = "rock";        

    } else if (computerPlay == 2) {

        computerHand = "scissors";       

    } else if (computerPlay == 3) {

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

    let winner = "";

    if (player == "rock" && computer == "scissors"  ||
        player == "scissors" && computer == "paper"     ||
        player == "paper" && computer == "rock") {
        gameResult.innerHTML = "You win this round";
        winner = "player";
    }
    else if (player == "scissors" && computer == "rock" ||
        player == "rock" && computer == "paper"     ||
        player == "paper" && computer == "scissors") {
        gameResult.innerHTML = "Computer win this round";
        winner = "computer";                
                
    }
    else if (player ==  computer) {
        gameResult.innerHTML = "Draw";
        winner = "none";
    }         
    roundWinner(winner);
}

function roundWinner(scorer) {
    
    if (scorer == "player") {
        playerScore = playerScore +1;
    } else if (scorer == "computer" ) {
        computerScore = computerScore +1;
    }

    if (playerScore == 5) {
        win.innerHTML = "<h1>You won!</h1>"
    } else if (computerScore == 5) {
        win.innerHTML = "<h1>Computer won</h1>";
    }

    
    score.innerHTML = "Computer Score: "+ computerScore+"<br>Player Score :" +playerScore;

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
//gracias


//Llamada a la función Jugada máquina
computerSelect();

