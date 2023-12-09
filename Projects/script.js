let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");




const drawGame = ()=>{
    console.log("Game is draw");
    msg.innerText = "Game is draw"
};

const genCompChoice = () =>{
    //! computer generate a randomly so we can store in array
    const options = ["rock", "papers", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const showWinner = (userWin) => {
    if(userWin){
        console.log("You Win");
        msg.innerText = "You Win(✿◡‿◡)"
        msg.style.backgroundColor = "green";
    }else{
        console.log("You Lose");
        msg.innerText = "You lose ಥ_ಥ";
        msg.style.backgroundColor = "red";
    }
   
}
// computer choices
const playGame = (userChoice) => {
    console.log("User choice: " + userChoice);
    // generate a computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice: " + compChoice);
    // compare the two choices
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
          } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
          } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
          }
          showWinner(userWin);
    }
}


// user choice
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        // user which specific choice is selected
        const userChoice = choice.getAttribute("id");

        console.log("choice was clicked -",userChoice);
        playGame(userChoice);
    });
});