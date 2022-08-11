function getComputerChoice(){
    choiceNumber = Math.floor(Math.random() * 3);
    switch(choiceNumber){
        case 0:
            computerChoice = "rock"
            break;
        case 1:
            computerChoice = "paper"
            break;
        case 2:
            computerChoice = "scissors"
    }
    return computerChoice;
}

function playRound(playerSelection){
    let computerSelection = getComputerChoice()
    console.log("Player chose " + playerSelection + ", computer chose " + computerSelection);
    switch (playerSelection){
        case "rock":
            switch (computerSelection){
                case "rock":
                    return "It's a tie!";
                    break;
                case "paper":
                    return "You lose! Paper beats rock.";
                    break;
                case "scissors":
                    return "Rock beats scissors! You win!";
            }
        case "paper":
            switch (computerSelection){
                case "rock":
                    return "Rock beats paper! You win!";
                    break;
                case "paper":
                    return "It's a tie!";
                    break;
                case "scissors":
                    return "You lose! Scissors beat paper.";
            }
        case "scissors":
            switch (computerSelection){
                case "rock":
                    return "You lose! Rock beats scissors.";
                    break;
                case "paper":
                    return "Scissors beat paper! You win!";
                    break;
                case "scissors":
                    return "It's a tie!";
            }
        default:
            return "Invalid input."
    }
}
console.log(playRound(prompt("Hello world. Care for a game? Choose rock, paper, or scissors.").toLowerCase()))