//! Initialize user and computer scores
let userScore = 0;
let compScore = 0;

//! Select all elements with the class "choice" and the element with the id "msg"
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//! Function to handle a draw game
const drawGame = () => {
    
    //? Update the message text and background color for a draw
    msg.innerText = "Game is draw(⊙_⊙;)";
    msg.style.backgroundColor = "purple";
};

//! Function to generate a random computer choice
const genCompChoice = () => {
    // Define the possible choices for the computer
    const options = ["rock", "paper", "scissors"];
    // Generate a random index to select a choice
    const randIdx = Math.floor(Math.random() * 3);
    // Return the computer's choice based on the random index
    return options[randIdx];
};

//! Function to display the winner message and update styles
const showWinner = (userWin) => {
    
    //? Check if the user won and update the message and styles accordingly
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win(✿◡‿◡)";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose ಥ_ಥ";
        msg.style.backgroundColor = "darkred";
    }
};

//! Function to play the game based on user choice
const playGame = (userChoice) => {
    // Generate the computer's choice
    const compChoice = genCompChoice();
    
    //? Check if the user and computer choices are the same
    if (userChoice === compChoice) {
        // If choices are the same, it's a draw
        drawGame();
    } else {
        let userWin = true;
        
        //? Determine the winner based on user and computer choices
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        // Display the winner message
        showWinner(userWin);
    }
};

//! Event listener for each choice element
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        
        //? Get the user's choice from the clicked element's id attribute
        const userChoice = choice.getAttribute("id");
        // Call the playGame function with the user's choice
        playGame(userChoice);
    });
});
