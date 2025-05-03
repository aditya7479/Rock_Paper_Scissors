let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ( ) =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

const drawGame = ( ) =>{
    console.log("game was draw.");
    msg.innerText = "Game Was Draw.Play Again😊";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userchoice,  compChoice )=>{
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `you win! ${userchoice} beats  ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        computerScore++;
        compScorePara.innerText = computerScore;
        console.log("you lose");
        msg.innerText =`you lose! ${compChoice} beats  ${userchoice}`;;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userchoice) =>{
    console.log("user choice = ", userchoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if( userchoice  === compChoice){
        // draw game
        drawGame ( );
    } else{
        let userWin = true;
        if ( userchoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if( userchoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else{ 
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userchoice,compChoice);
    }
};
 
choices.forEach((choice) =>{
    choice.addEventListener ("click", ( )  => {
        const userchoice = choice.getAttribute("Id");
        //console.log("choice was clicked" , choiceId);
        playGame( userchoice);
    });
});

let mode = document.querySelector("button")
let body = document.querySelector("body")
let currMode = "light"

mode.addEventListener ("click", () => {
    if (currMode ===  "light") {
        currMode = "dark";
     body.classList.add("dark");
     body.classList.remove("Light");
    }  else {
        currMode ="light";
        body.classList.add("Light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});