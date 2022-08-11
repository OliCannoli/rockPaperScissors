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

function playRound(playerSelection, computerSelection){
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

function game(){
    var playerScore = 0;
    var computerScore = 0;
    for (let i = 0; i < 5; i++){
        console.log(`Round ${i+1}`);
        let result = playRound(prompt("Make your choice. Rock, paper, or scissors?"), getComputerChoice());
        console.log(result);
        if (result == "Invalid input."){
            i--; // Throw away the round and try again.
            continue;
        }
        else if (result.includes("win")){
            playerScore++;
        }
        else if (result.includes("lose")){
            computerScore++;
        }
        console.log(`Your score: ${playerScore}; computer score: ${computerScore}`);

    }
    if (playerScore > computerScore){
        console.log("Congratulations!");
    }
    else if (playerScore < computerScore){
        console.log("Better luck next time.");
    }
    else{
        console.log("Alright, we'll call it a draw.");
    }
}

var playing = true;
while(playing){
    game();
    if (prompt("To exit, type 'exit'. Otherwise, type anything to play again.") == "exit"){
        playing = false;
    }
}