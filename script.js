function computerPlay(){
    let decision;
    let player1=Math.floor(Math.random() * (3 - 1 + 1)) + 1
    if (player1===1) {
        decision="Rock";
    }else if (player1===2) {
        decision="Paper";
    }else {
        decision="Scissors";
    }
    return decision;
}

let cplay1=computerPlay();
console.log(cplay1)

