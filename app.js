let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

const compChoice = () => {
    const option = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return option[randomIndex];
}

const drawGame = () => {
    console.log("game was drawn");
    msg.innerText = "game is draw,play again !:)!";
}

const show_winner = (userwin) => {
    if(userwin){
        console.log("you won");
        msg.innerText = "you won :)";
        userScore.innerText ++;
    }
    else{
        console.log("you loose and computer won");
        msg.innerText = "you loose :(";
        compScore.innerText++;
    }
}

const playGame = (user_choice) =>{
    console.log("user ckicked on ",user_choice);

    //generate computer choice now 
    const comp_choice = compChoice();
    console.log("computer choice is ",comp_choice);

    //fight
    if(user_choice === comp_choice){
        //draw game
        drawGame();
    }
    else {
        let userwin = true;
        if(user_choice === "rock"){
            // comp choice -> scissors or paper
            userwin = comp_choice === "paper" ? false : true; 
        }
        else if(user_choice === "paper"){
            // comp choice -> scissors or rock
            userwin = comp_choice === "scissors" ? false : true;
        }
        else{
            userwin = comp_choice === "rock" ? false : true;
        }
        show_winner(userwin);
        }
    }

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        //console.log(user_choice ,"choice was clicked");
        playGame(user_choice);
    })
});