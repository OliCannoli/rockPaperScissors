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
            break;
    }
    return computerChoice;
}

