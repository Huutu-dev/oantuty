// enums: Rock, Paper, Scissors
// Game rule is:
// Rock beats Scissors
// Paper beats Rock
// Scissor beats Paper

const shapes = ["Rock", "Paper", "Scissors"];

function properCase(s){
    return s[0].toUpperCase()+s.substring(1).toLowerCase();
}

function computerPlay(){
    let r = Math.floor(Math.random() * 3);
    return shapes[r];
}

function playRound(playerSelection, computerSelection, counting){    
    // stuff
    var result;
    let sPlayer = properCase(playerSelection);
    let iPlayer = shapes.indexOf(sPlayer);
    if (iPlayer < 0){
        result = "Woow! You play a stranger: " + playerSelection;
        return result;
    }

    let sComputer = properCase(computerSelection);
    if (sPlayer == sComputer){
        result = "Both are the same => " + sPlayer;
        return result;
    }

    let iComputer = shapes.indexOf(sComputer); // Sure that computer played well
    iMin = Math.min(iPlayer, iComputer);
    iMax = Math.max(iPlayer, iComputer);
    let iwin;    
    if (iMin + 1 == iMax){
        iwin = iMax;
        result = shapes[iMax] + " beats " + shapes[iMin];
    } else {
        iwin = iMin;
        result = shapes[iMin] + " beats " + shapes[iMax];
    }

    if(iPlayer == iwin){
        result = "You Win! " + result;
        counting.score ++;
    } else {
        result = "You Lose! " + result;
        counting.score --;
    }
    return result;
}

function game(){
    counting = {score: 0};
    for (var i=1; i<=5; i++){
        let playerSelection =  prompt("Oan tu ty, ra cai gi?\n [ROUND " + i+"]");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection, counting));
    }

    var msg = "At the end, the winner is " + (counting.score>0? "YOU": "COMPUTER");
    console.log(msg);
}

game();