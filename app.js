// Need a form to take user input

//Need a word bank, that I can check against user input. If player gets all letters correct, they win

//Need a timer function, 1 minute, if time ends user loses

//Need win condition


//WORD BANK
class WordBank {
    constructor(letters = []){
        this.letters = letters
    }
}

const earth = new WordBank(["E", "A", "R", "T", "H"])
console.log(earth)
const word = ["E", "A", "R", "T", "H"];
let finalWord = word.join('');
let playerScore = 0;
//*Function to create letterboxes based on how many letters inside the secret word
function makeBoxes() {
    const textBox = document.getElementById("textBox")

    for(let i = 0; i < word.length; i++){
        let box = document.createElement("div")
        box.classList.add("box");
        box.setAttribute("id", i + 1)
        textbox.appendChild(box)
    }

}
makeBoxes();

//*****TIMER FUNCTION AND VARIABLES*****
let timer = 0;
let timeLeft = 30;

function countDown() {
    timeLeft = timeLeft-1;
    if(timeLeft >= 0){
        document.getElementById("timeLeft").innerHTML = timeLeft
    }else{
        gameOver();
    }
}


//**START GAME FUNCTION AND VARIABLES**/
const startButton = document.getElementById("startButton")
startButton.addEventListener("click", (e) => {
    const lettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    lettersArray.forEach(function (element){
    let key = document.querySelector(`[data-key="${element}"]`)
    key.addEventListener("click", (e) => {
        let playerGuess = e.target.getAttribute("data-key")
        console.log(playerGuess)
        debugger
         guessWord(playerGuess)
    })
});
    return startGame();
})

function startGame (){
    timer = setInterval(countDown, 1000);
    countDown();

}

// Grabs each box that is created and assigns it a variable, 
// need to make this DRY with a function
let box1 = document.getElementById(1)
let box2 = document.getElementById(2)
let box3 = document.getElementById(3)
let box4 = document.getElementById(4)
let box5 = document.getElementById(5)





//This function takes the value of user's click, and compares it to each letter 
// in our word bank
// Need to add win function, if all letterboxes are full, user wins
function guessWord(letter) { 
    if (letter === word[0] && box1.innerHTML !== word[0]){
        playerScore = playerScore + 1;
        box1.innerHTML = letter;
        return gameWin();
    }else if(letter === word[1] && box2.innerHTML !== word[1]){
        playerScore = playerScore + 1;
        box2.innerHTML = letter;
        return gameWin();
    }else if(letter === word[2] && box3.innerHTML !== word[2]){
        playerScore = playerScore + 1;
        box3.innerHTML = letter;
        return gameWin();
    }else if(letter === word[3] && box4.innerHTML !== word[3]){
        playerScore = playerScore + 1;
        box4.innerHTML = letter;
        return gameWin();
    }else if(letter === word[4] && box5.innerHTML !== word[4]){
        playerScore = playerScore + 1;
        box5.innerHTML = letter;
        return gameWin();
    }else {
        let removeLetter = document.querySelector(`[data-key="${letter}"]`)
        removeLetter.remove()
    }
}


//**WIN/LOSE Functions */
function gameWin(){
    if(playerScore >= word.length){
        clearInterval(timer);
        alert(`You win! The word is ${finalWord}`)
    }
}

function gameOver(){
    clearInterval(timer);
    for(let i = 0; i < 1; i++){
        alert(`GAME OVER`)
    }
}


//*WIN/LOSE ANIMATIONS*/
function winAnimation() {
    
}

//RESET BUTTON
let reset = document.getElementById("resetButton")
reset.addEventListener("click", (e)=> {
    return window.location.reload();
})


