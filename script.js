const choices=["rock","paper","scissors"]

function computerPlay(){
    let decision;
    let randomNum=Math.floor(Math.random() * choices.length)
    decision=choices[randomNum]
    return decision;
}

let computerPoints=0;
let playerPoints=0;

function playRound(playerSelection,computerSelection) {
    playerSelection=playerSelection.toLowerCase();
    
    let result;

     if (playerSelection===choices[0] || playerSelection===choices[1] || playerSelection===choices[2]){
        let message;
        if(playerSelection===choices[0] && computerSelection===choices[1]) {
            computerPoints++ ;
            message="You lost paper beats rock";
        }else if(playerSelection===choices[1] && computerSelection===choices[2]){
            computerPoints++ ;
            message="You lost scissors beat paper";
        }else if(playerSelection===choices[2] && computerSelection===choices[0]){
            computerPoints++ ; 
            message="You lost rock beats scissors";
        }else if(playerSelection===computerSelection){
            message="It's a tie";
        }else{
            playerPoints++ ;
            message="You won!";
        }
    result=message;
    }else if(playerSelection===null || playerSelection===""){
        result="cancelled";
    }else{
        result="Wrong entry";
    }
     
    return result;
}


const game = () => {
    for (let i=0; i<5;i++){
        const playerSelection=prompt("Choose wisely...nah just wish for luck")
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection))
    }
}

game()
if (computerPoints<playerPoints){
    console.log("Yay! You won🎉")
}else if(computerPoints===playerPoints){
    console.log("You tied with the computer")
}else{
    console.log("Sorry,you lost :-(")
}
