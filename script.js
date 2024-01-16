let scorePlayer = 0;
let scoreComp = 0;
let movePlayer = "";
let moveComp = "";
let pName = "";
let roundNum = 1;
let totalPoints = 0;
let isInstructionsVisible = false;

function setMoveRock() { //This function is called when 'rockButton' is clicked. It sets movePlayer, representing the player's move that turn, to 'rock'.
    movePlayer = "rock";
}

function setMovePaper() { //This function is called when 'paperButton' is clicked. It sets movePlayer, representing the player's move that turn, to 'paper'.
    movePlayer = "paper";
}

function setMoveScissors() { //This function is called when 'scissorsButton' is clicked. It sets movePlayer, representing the player's move that turn, to 'scissors'.
    movePlayer = "scissors";
}

function setMoveComputer() { //This function generates a random integer between 0 and 2 inclusive and uses that number as an index to choose the corresponding string name of a move and set moveComp, representing the computer's move that turn, to that move.
    const moveArray = ["rock", "paper", "scissors"];
    const moveChoice = Math.floor(Math.random() * 3);
    moveComp = moveArray[moveChoice]
}

function gameDisplay() { //This function adds one to roundNum, the counter for the number of rounds played. It then changes the HTML display by hiding and revealing certain HTML elements. It also changes the test in the message saying the round number and tells the player to choose a move option.
    roundNum += 1;
    document.getElementById("roundMessage").innerHTML = 'Round: ' + roundNum;
    document.getElementById("rockButton").style.display = 'block';
    document.getElementById("paperButton").style.display = 'block';
    document.getElementById("scissorsButton").style.display = 'block';
    document.getElementById("moveMessage").innerHTML = 'Choose one of the options below to make a move:';
    document.getElementById("outcomeMessage").style.display = 'none';
    document.getElementById("nextGameButton").style.display = 'none';
}

function outcomeDisplay() { //This function checks to see if either the player or the computer has reached the winning number of points. If they have, it calls winningDisplay to display the winner. If not, it changes the HTML display by hiding and revealing certain HTML elements, and prints what both player's moves were that round.
    if (scorePlayer == totalPoints){
        winningDisplay(pName, "You are");
    }
    else if (scoreComp == totalPoints){
        winningDisplay("The computer", "It was");
    }
    else{
        document.getElementById("rockButton").style.display = 'none';
        document.getElementById("paperButton").style.display = 'none';
        document.getElementById("scissorsButton").style.display = 'none';
        document.getElementById("moveMessage").innerHTML = "You played "+movePlayer+" and the computer played "+moveComp+".";
        document.getElementById("outcomeMessage").style.display = 'block';
        document.getElementById("nextGameButton").style.display = 'block';
    }
}

function gameStart() { //This function changes the HTML display by hiding and revealing certain HTML elements, and sets two variables (totalPoints and pName) to their respective values by accessing the user's input.
    document.getElementById("roundMessage").style.display = 'block';
    document.getElementById("nameLabel").style.display = 'none';
    document.getElementById("name").style.display = 'none';
    document.getElementById("pointsLabel").style.display = 'none';
    document.getElementById("points").style.display = 'none';
    document.getElementById("startGameButton").style.display = 'none';
    document.getElementById("scorePMessage").style.display = 'block';
    document.getElementById("scoreCMessage").style.display = 'block';
    document.getElementById("moveMessage").style.display = 'block';
    document.getElementById("rockButton").style.display = 'block';
    document.getElementById("paperButton").style.display = 'block';
    document.getElementById("scissorsButton").style.display = 'block';
    totalPoints = document.getElementById("points").value;
    pName = document.getElementById("name").value;
    document.getElementById("scorePMessage").innerHTML = pName + "'s Score: 0";
}

function game() { //This function calls setMoveComputer() and then checks the two player's moves for certain pairs of moves to determine the winner. It sets the outcome message to display who won, or if there was a tie. If there was a winner, it gives the winner one point and updates their score display. It then calls outcomeDisplay().
    setMoveComputer();
    if (moveComp.localeCompare(movePlayer) == 0) {
        document.getElementById("outcomeMessage").innerHTML = "You tied with the computer! No points.";
        outcomeDisplay();
    } 
    else if (((moveComp.localeCompare('rock') == 0) && (movePlayer.localeCompare('paper') == 0)) || ((moveComp.localeCompare('paper') == 0) && (movePlayer.localeCompare('scissors') == 0)) || ((moveComp.localeCompare('scissors') == 0) && (movePlayer.localeCompare('rock') == 0))){
        document.getElementById("outcomeMessage").innerHTML = "You win this round!";
        scorePlayer += 1;
        document.getElementById("scorePMessage").innerHTML = pName + "'s Score: "+scorePlayer;
        outcomeDisplay();
    } 
    else {
        document.getElementById("outcomeMessage").innerHTML = "The computer wins this round!";
        scoreComp += 1;
        document.getElementById("scoreCMessage").innerHTML = "Computer's Score: "+scoreComp;
        outcomeDisplay();
    }
}

function winningDisplay(winner, identifier){ //This function hides all HTML under the Play heading except the round number and score messages, and the message saying the final winner.
    document.getElementById("rockButton").style.display = 'none';
    document.getElementById("paperButton").style.display = 'none';
    document.getElementById("scissorsButton").style.display = 'none';
    document.getElementById("moveMessage").style.display = 'none';
    document.getElementById("outcomeMessage").style.display = 'block';
    document.getElementById("outcomeMessage").innerHTML = winner + " was the first to " + totalPoints + "! " + identifier + " the winner of the game :)";
    document.getElementById("nextGameButton").style.display = 'none';
}

function showInstructions() { //This function checks to see if the boolean isInstructionsVisible is true or false in order to either hide or show the instructions. If it is true, it hides the instruction paragraph, changes the button label to say 'Show Instructions' and sets isInstructionsVisible to false. If it is false, it reveals the instruction paragraph, changes the button label to say 'Hide Instructions' and sets isInstructionsVisible to true.
    if (isInstructionsVisible){
        document.getElementById("instructionsMessage").style.display = 'none';
        document.getElementById("instructionsButton").innerHTML = "Show Instructions";
        isInstructionsVisible = false;
    }
    else{
        document.getElementById("instructionsMessage").style.display = 'block';
        document.getElementById("instructionsButton").innerHTML = "Hide Instructions";
        isInstructionsVisible = true;
    }
}

