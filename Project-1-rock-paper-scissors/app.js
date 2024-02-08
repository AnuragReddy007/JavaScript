let playerScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");


const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const compIndex = Math.floor(Math.random()*3);
    return options[compIndex];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const showWinner = (userWin, compChoice) =>{
    if(userWin){
        msg.innerText=`congo! you win. computer chose ${compChoice}`;
        console.log("win");
        msg.style.backgroundColor = "green";
    } else {
        msg.innerText = `you lose! better luck next time. computer chose ${compChoice}`;
        console.log("lose");
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        msg.innerText = "Its a draw!";
        msg.style.backgroundColor = "black";
        console.log("draw");
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, compChoice);

        if(userWin){
            playerScore++;
            player.innerText = playerScore;

        } else {
            compScore++;
            computer.innerText = compScore;
        }
    }
};


