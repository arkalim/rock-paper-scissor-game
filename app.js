// variables and constants
let userScore = 0;
let compScore = 0;
const userSubscript = "user".fontsize(3).sub();
const compSubscript = "comp".fontsize(3).sub();

// Cache the DOM (reference the elements of html and save them in variables)
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board'); // querySelector returns a single element
const result_p = document.querySelector('.result p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const reset_div = document.getElementById('reset');

// function to reset the game
function reset_game(){

    // reload the page
    location.reload();
}

// function to return a random choice for computer
function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// function to convert choice to word
function toWord(choice){
    switch (choice) {
        case 'rock':
            return 'Rock'
        case 'paper':
            return 'Paper'
        case 'scissors':
            return 'Scissors'
        default:
            break;
    }
}

// function that will be run when the user wins
function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${toWord(userChoice)}${userSubscript} beats ${toWord(compChoice)}${compSubscript}. You win!`;

    // add the class green-glow to the scoreBoard_div for 0.3 sec
    scoreBoard_div.classList.add('green-glow');
    setTimeout(() => {
        scoreBoard_div.classList.remove('green-glow');
    }, 300);
}

// function that will be run when the user loses
function lose(userChoice, compChoice){
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${toWord(userChoice)}${userSubscript} loses to ${toWord(compChoice)}${compSubscript}. You lose!`;

    // add the class red-glow to the scoreBoard_div for 0.3 sec
    scoreBoard_div.classList.add('red-glow');
    setTimeout(() => {
        scoreBoard_div.classList.remove('red-glow');
    }, 300);
}

// function that will be run when it's a draw
function draw(userChoice, compChoice){
    result_p.innerHTML = `${toWord(userChoice)}${userSubscript} equals ${toWord(compChoice)}${compSubscript}. It's a draw!`;

    // add the class yellow-glow to the scoreBoard_div for 0.3 sec
    scoreBoard_div.classList.add('yellow-glow');
    setTimeout(() => {
        scoreBoard_div.classList.remove('yellow-glow');
    }, 300);
}

// Game Function
function game(userChoice){

    // everytime the user makes a choice, get the computer choice
    const compChoice = getCompChoice();

    // compare
    switch (userChoice + compChoice) {

        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, compChoice);
            break;

        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            lose(userChoice, compChoice);
            break;
        
        case 'scissorsscissors':
        case 'paperpaper':
        case 'rockrock':
            draw(userChoice, compChoice);
            break;
    
        default:
            break;
    }
}

// Main Function
function main(){

    // Everytime a choice is clicked, it will run the game function with the user choice
    rock_div.addEventListener('click',  ()=> game('rock'));
    paper_div.addEventListener('click',  ()=> game('paper'));
    scissors_div.addEventListener('click',  ()=> game('scissors'));

    // Everytime reset is clicked, it will reset the game
    reset_div.addEventListener('click', ()=> reset_game());
}

// Run the main function
main();