let playAsk = prompt("Hello world. Care for a game?");

function getComputerChoice(){
    choiceNumber = Math.floor(Math.random() * 3);
    if (choiceNumber == 0){
        computerChoice = "rock"
    }
    if (choiceNumber == 1){
        computerChoice = "paper"
    }
    if (choiceNumber == 2){
        computerChoice = "scissors"
    }
    return computerChoice;
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());