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
const moon = new WordBank(["M", "O" , "O", "N"])
const pluto = new WordBank(["P", "L", "U", "T", "O"])


let playerScore = 0;
let currentRound = 1;
let guessedWord = []


/**LETTER BOX FUNCTIONS**/
function makeBoxes() {
    if(currentRound === 1){
        const textBox = document.querySelector("#textBox")
        for(let i = 0; i < earth.letters.length; i++){
            let box = document.createElement("div")
            box.classList.add("box");
            box.setAttribute("id", i + 1)
            textbox.appendChild(box)  //When I make this variable textBox, it doesn't work.Only lowercase, Weird bug//
        }
    }else if(currentRound === 2){
        const textBox = document.querySelector("#textBox")
        for(let i = 0; i < moon.letters.length; i++){
            let box = document.createElement("div")
            box.classList.add("box");
            box.setAttribute("id", i + 1)
            textbox.appendChild(box)
        }
    }else if(currentRound === 3){
        const textBox = document.querySelector("#textBox")
        for(let i = 0; i < pluto.letters.length; i++){
            let box = document.createElement("div")
            box.classList.add("box");
            box.setAttribute("id", i + 1)
            textbox.appendChild(box)
        }
    }    

}
makeBoxes();

const boxesArray = document.querySelectorAll(".box")

let box1 = document.getElementById(1)
let box2 = document.getElementById(2)
let box3 = document.getElementById(3)
let box4 = document.getElementById(4)
let box5 = document.getElementById(5)



//**TIMER FUNCTION AND VARIABLES**//
let timer = 0;
let timeLeft = 90;

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
    const lettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    
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
    countDown();
}

//**RESET BUTTON**//
let reset = document.getElementById("resetButton")
reset.addEventListener("click", (e)=> {
    return window.location.reload();
})



//This function takes the value of user's click, and compares it to each letter 
// in our word bank
// Need to add win function, if all letterboxes are full, user wins
function guessWord(letter) { 

    if(currentRound === 1){
        if (letter === earth.letters[0] && box1.innerHTML !== earth.letters[0]){
            playerScore = playerScore + 1;
            box1.innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }else if(letter === earth.letters[1] && box2.innerHTML !== earth.letters[1]){
            playerScore = playerScore + 1;
            box2.innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }else if(letter === earth.letters[2] && box3.innerHTML !== earth.letters[2]){
            playerScore = playerScore + 1;
            box3.innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }else if(letter === earth.letters[3] && box4.innerHTML !== earth.letters[3]){
            playerScore = playerScore + 1;
            box4.innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }else if(letter === earth.letters[4] && box5.innerHTML !== earth.letters[4]){
            playerScore = playerScore + 1;
            box5.innerHTML = letter;
            guessedWord.push(letter);
            return nextRound();
        }else {
            let removeLetter = document.querySelector(`[data-key="${letter}"]`)
            removeLetter.remove()
        }
    }else if(currentRound === 2){
        if (letter === moon.letters[0] && box1.innerHTML !== moon.letters[0]){
            playerScore = playerScore + 1;
            box1.innerHTML = letter;
            guessedWord.push(letter);
            console.log(guessedWord)
            return nextRound();
        }else if(letter === moon.letters[1] && box2.innerHTML !== moon.letters[1]){
            playerScore = playerScore + 1;
            box2.innerHTML = letter;
            guessedWord.push(letter);
            console.log(guessedWord)
            return nextRound();
        }else if(letter === moon.letters[2] && box3.innerHTML !== moon.letters[2]){
            playerScore = playerScore + 1;
            box3.innerHTML = letter;
            guessedWord.push(letter);
            console.log(guessedWord)
            return nextRound();
        }else if(letter === moon.letters[3] && box4.innerHTML !== moon.letters[3]){
            playerScore = playerScore + 1;
            box4.innerHTML = letter;
            guessedWord.push(letter);
            console.log(guessedWord)
            return nextRound();
        }else if(letter === moon.letters[4] && box5.innerHTML !== moon.letters[4]){
            playerScore = playerScore + 1;
            box5.innerHTML = letter;
            guessedWord.push(letter);
            console.log(guessedWord)
            return nextRound();
        }else {
            let removeLetter = document.querySelector(`[data-key="${letter}"]`)
            removeLetter.remove()
        }
    }else if(currentRound === 3){
        if (letter === pluto.letters[0] && box1.innerHTML !== pluto.letters[0]){
            playerScore = playerScore + 1;
            box1.innerHTML = letter;
            guessedWord.push(letter);
            console.log(guessedWord)
            return nextRound();
        }else if(letter === pluto.letters[1] && box2.innerHTML !== pluto.letters[1]){
            playerScore = playerScore + 1;
            box2.innerHTML = letter;
            guessedWord.push(letter);
            console.log(guessedWord)
            return nextRound();
        }else if(letter === pluto.letters[2] && box3.innerHTML !== pluto.letters[2]){
            playerScore = playerScore + 1;
            box3.innerHTML = letter;
            guessedWord.push(letter);
            console.log(guessedWord)
            return nextRound();
        }else if(letter === pluto.letters[3] && box4.innerHTML !== pluto.letters[3]){
            playerScore = playerScore + 1;
            box4.innerHTML = letter;
            guessedWord.push(letter);
            console.log(guessedWord)
            return nextRound();
        }else if(letter === pluto.letters[4] && box5.innerHTML !== pluto.letters[4]){
            playerScore = playerScore + 1;
            box5.innerHTML = letter;
            guessedWord.push(letter);
            console.log(guessedWord)
            return nextRound();
        }else {
            let removeLetter = document.querySelector(`[data-key="${letter}"]`)
            removeLetter.remove()
        }
    }    
    
}


//**NEXT ROUND FUNCTION**/
function nextRound(){
    if(guessedWord.join('') === earth.letters.join('')){
        currentRound += 1;
        let oldBoxes = document.querySelectorAll(".box")
        oldBoxes.forEach(function (e){
            e.remove();
        })
        makeBoxes();
        guessedWord = []
    }else if(guessedWord.join('') === moon.letters.join('')){
        currentRound += 1;
        let oldBoxes = document.querySelectorAll(".box")
        oldBoxes.forEach(function (e){
            e.remove();
        })
        makeBoxes();
        guessedWord = []
    }else if(guessedWord.join('') === pluto.letters.join('')){
        let oldBoxes = document.querySelectorAll(".box")
        oldBoxes.forEach(function (e){
            e.remove();
        })
        makeBoxes();
        guessedWord = []
        gameWin();
    }
}


//**WIN/LOSE Functions */
function gameWin(){
    if(currentRound === 3){
        clearInterval(timer);
        let timerTitle = document.querySelector("#timerTitle")
        let timeLeft = document.querySelector("#timeLeft")
        timerTitle.innerText = "YOU WIN"
        timerTitle.style.fontSize = "120px";
        timerTitle.style.color = "green";
        timeLeft.remove()
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
    
    }
}


//*WIN/LOSE ANIMATIONS*/
function winAnimation() {
    
}




