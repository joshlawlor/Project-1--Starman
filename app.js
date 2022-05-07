//**Starting Variables**/
let playerScore = 0;
let currentRound = 1;
let guessedWord = []

//**QUESTION BANK**/
class Question {
    constructor(riddle){
        this.riddle = riddle;
    }
}
const question1 = new Question(
    `AI~ What is the name of the AI in 2001 A Space Odyessey?`
);
const question2 = new Question
(`AI~ What is Always Old, Sometimes New.  
Never Sad, Sometimes Blue.   
Never Empty, Sometimes Full.  
Never Pushes, Always Pulls.`);

const question3 = new Question(
    `AI~ I have never been respected, but I am named after a Greek God! What planet am I?`
)

//**WORD BANK**//
class WordBank {
    constructor(letters = []){
        this.letters = letters
    }
}

const word1 = new WordBank(["H","A","L"])
const word2 = new WordBank(["M", "O" , "O", "N"])
const word3 = new WordBank(["P", "L", "U", "T", "O"])

/**LETTER BOX FUNCTIONS**/
let boxes = [ ];

function makeBoxes() {
    
    if(currentRound === 1){
        for(let i = 0; i < word1.letters.length; i++){
            let box = document.createElement("div")
            box.classList.add("box");
            box.setAttribute("id", i + 1)
            letterBox.appendChild(box) 
            boxes.push(box) 
        }
    }else if(currentRound === 2){
        for(let i = 0; i < word2.letters.length; i++){
            let box = document.createElement("div")
            box.classList.add("box");
            box.setAttribute("id", i + 1)
            letterBox.appendChild(box)
            boxes.push(box)
        }
    }else if(currentRound === 3){
        for(let i = 0; i < word3.letters.length; i++){
            let box = document.createElement("div")
            box.classList.add("box");
            box.setAttribute("id", i + 1)
            letterBox.appendChild(box)
            boxes.push(box)
        }
    }    

}
makeBoxes();


//**TIMER FUNCTION AND VARIABLES**//
let timer = 0;
let timeLeft = 45;

function countDown() {
    timeLeft = timeLeft-1;
    if(timeLeft >= 0){
        document.getElementById("timeLeft").innerHTML = timeLeft
    }else{
        gameOver();
    }
}


//**START GAME FUNCTION AND VARIABLES**//
const startButton = document.getElementById("startButton")
startButton.addEventListener("click", (e) => {
    const lettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    
    lettersArray.forEach(function (element){
        let key = document.querySelector(`[data-key="${element}"]`)
        key.addEventListener("click", (e) => {
            let letter = e.target.getAttribute("data-key")
            guessWord(letter)
        })
    });
    return startGame();
})

function startGame (){
    timer = setInterval(countDown, 1000);
    let start = document.getElementById("startButton")
    start.style.display = "none";
    let rules = document.getElementById("rulesList")
    rules.remove();
    countDown();
    let question = document.querySelector("#gameText")
    question.innerHTML = question1.riddle;
}



//**GUESSING FUNCTION**/
function guessWord(letter) { 

    if(currentRound === 1){
        if (letter === word1.letters[0] && boxes[0].innerHTML !== word1.letters[0]){
            playerScore = playerScore + 1;
            boxes[0].innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }else if(letter === word1.letters[1] && boxes[1].innerHTML !== word1.letters[1]){
            playerScore = playerScore + 1;
            boxes[1].innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }else if(letter === word1.letters[2] && boxes[2].innerHTML !== word1.letters[2]){
            playerScore = playerScore + 1;
            boxes[2].innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }else if(letter === word1.letters[3] && boxes[3].innerHTML !== word1.letters[3]){
            playerScore = playerScore + 1;
            boxes[3].innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }else if(letter === word1.letters[4] && boxes[4].innerHTML !== word1.letters[4]){
            playerScore = playerScore + 1;
            boxes[4].innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }
        else {
            let removeLetter = document.querySelector(`[data-key="${letter}"]`)
            removeLetter.style.color = "red";
        }
    }else if(currentRound === 2){
        if (letter === word2.letters[0] && boxes[0].innerHTML !== word2.letters[0]){
            playerScore = playerScore + 1;
            boxes[0].innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }else if(letter === word2.letters[1] && boxes[1].innerHTML !== word2.letters[1]){
            playerScore = playerScore + 1;
            boxes[1].innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }else if(letter === word2.letters[2] && boxes[2].innerHTML !== word2.letters[2]){
            playerScore = playerScore + 1;
            boxes[2].innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }else if(letter === word2.letters[3] && boxes[3].innerHTML !== word2.letters[3]){
            playerScore = playerScore + 1;
            boxes[3].innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }else if(letter === word2.letters[4] && boxes[4].innerHTML !== word2.letters[4]){
            playerScore = playerScore + 1;
            boxes[4].innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }
        else {
            let removeLetter = document.querySelector(`[data-key="${letter}"]`)
            removeLetter.style.color = "red";
        }
    }else if(currentRound === 3){
        if (letter === word3.letters[0] && boxes[0].innerHTML !== word3.letters[0]){
            playerScore = playerScore + 1;
            boxes[0].innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }else if(letter === word3.letters[1] && boxes[1].innerHTML !== word3.letters[1]){
            playerScore = playerScore + 1;
            boxes[1].innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }else if(letter === word3.letters[2] && boxes[2].innerHTML !== word3.letters[2]){
            playerScore = playerScore + 1;
            boxes[2].innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }else if(letter === word3.letters[3] && boxes[3].innerHTML !== word3.letters[3]){
            playerScore = playerScore + 1;
            boxes[3].innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }else if(letter === word3.letters[4] && boxes[4].innerHTML !== word3.letters[4]){
            playerScore = playerScore + 1;
            boxes[4].innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }
        else {
            let removeLetter = document.querySelector(`[data-key="${letter}"]`)           
            removeLetter.style.color = "red";
        }
    }    
    
}


//**NEXT ROUND FUNCTION**/
function nextRound(){
    guessedWord.sort();
    if(guessedWord.join('') === "AHL"){
        currentRound += 1;
        let question = document.querySelector("#gameText")
        question.innerHTML = question2.riddle;
        keysReset();
        let oldBoxes = document.querySelectorAll(".box")
        oldBoxes.forEach(function (e){
            e.remove();
        })
        boxes = [] 
        makeBoxes();
        guessedWord = []
    }else if(guessedWord.join('') === "MNOO"){
        currentRound += 1;
        let question = document.querySelector("#gameText")
        question.innerHTML = question3.riddle;
        keysReset();
        let oldBoxes = document.querySelectorAll(".box")
        oldBoxes.forEach(function (e){
            e.remove();
        })
        boxes = []
        makeBoxes();
        guessedWord = []
    }else if(guessedWord.join('') === "LOPTU"){
        keysReset();
        let oldBoxes = document.querySelectorAll(".box")
        oldBoxes.forEach(function (e){
            e.remove();
        })
        boxes = []
        makeBoxes();
        guessedWord = []
        gameWin();
    }
}

//**Keyboard Reset function**/
function keysReset(){
    const keys = document.querySelectorAll(".button")
keys.forEach(function (e){
    e.style.color = "black";
})
}

//**WIN/LOSE Functions**/
function gameWin(){
    if(currentRound === 3){
        clearInterval(timer);
        let timerTitle = document.querySelector("#timerTitle")
        let timeLeft = document.querySelector("#timeLeft")
        timerTitle.innerText = "YOU WIN"
        timerTitle.style.fontSize = "120px";
        timerTitle.style.color = "green";
        timeLeft.remove()
        let winText = document.getElementById("gameText")
        winText.innerText = "AI~ Course successfully corrected. Astronaut has been Intercepted."
        guessedWord = [];
    }
}


function gameOver(){
    clearInterval(timer);
    for(let i = 0; i < 1; i++){
        let timerTitle = document.querySelector("#timerTitle")
        let timeLeft = document.querySelector("#timeLeft")
        timerTitle.innerText = "GAME OVER"
        timerTitle.style.fontSize = "100px";
        timerTitle.style.color = "red";
        timeLeft.remove()
        let loseText = document.getElementById("gameText")
        loseText.innerText = "AI~ Access Denied. Failed Authentication Procedure"
        let keys = document.querySelector("#keyBoardRows")
        keys.remove()
    }
}

//**RESET BUTTON**//
let reset = document.getElementById("resetButton")
reset.addEventListener("click", (e)=> {
    return window.location.reload();
})


