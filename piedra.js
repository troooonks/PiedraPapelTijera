function computerPlay() {
 console.log("Piedra");
}
 
function getRandomInt() {
    return Math.floor(Math.random() * 3 + 1);
}

console.log(getRandomInt());
computerPlay();