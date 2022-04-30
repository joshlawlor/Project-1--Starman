// Need a form to take user input

//Need a word bank, that I can check against user input. If player gets all letters correct, they win

//Need a timer function, 1 minute, if time ends user loses

//Need win condition


//WORD BANK
const word = ["S", "P", "A" , "C" , "E"];
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


// Grabs each box that is created and assigns it a variable, 
// need to make this DRY with a function
let box1 = document.getElementById(1)
let box2 = document.getElementById(2)
let box3 = document.getElementById(3)
let box4 = document.getElementById(4)
let box5 = document.getElementById(5)

function gameWin(){
    if(playerScore >=5){
        return alert('You win')
    }
    
}
gameWin();


//This function takes the value of user's click, and compares it to each letter 
// in our word bank
// Need to add win function, if all letterboxes are full, user wins
function guessWord(letter) {
    
    if(playerScore >=5){
        return alert('You win')
    }
    
    if (letter === word[0] && box1.innerHTML !== word[0]){
        alert(`Correct, the first letter is ${word[0]}`)
        playerScore = playerScore + 1;
        return box1.innerHTML = letter;
    }else if(letter === word[1] && box2.innerHTML !== word[1]){
        alert(`Correct, the second letter is ${word[1]}`)
        playerScore = playerScore + 1;
        return box2.innerHTML = letter;
    }else if(letter === word[2] && box3.innerHTML !== word[2]){
        alert(`Correct, the third letter is ${word[2]}`)
        playerScore = playerScore + 1;
        return box3.innerHTML = letter;
    }else if(letter === word[3] && box4.innerHTML !== word[3]){
        alert(`Correct, the fourth letter is ${word[3]}`)
        playerScore = playerScore + 1;
        return box4.innerHTML = letter;
    }else if(letter === word[4] && box5.innerHTML !== word[4]){
        alert(`Correct, the fifth letter is ${word[4]}`)
        playerScore = playerScore + 1;
        return box5.innerHTML = letter;
    }else {
        alert(`Incorrect! Try another letter!`)
    }
    console.log(playerScore)
   
}

//RESET BUTTON
let reset = document.getElementById("resetButton")
console.log(reset)
reset.addEventListener("click", (e)=> {
    return window.location.reload();
})


// This class should assign a value to each key on the keyboard
class Letter {
    constructor(value){
        this.value = value;
    }
    userClick(){
        this.addEventListener("click" , (e)=> {
            let letter = e.target.getAttribute("data-key")
            guessWord(letter);
        })
    }
}

// const a = new Letter("a")
// const b = new Letter("b")



const s = document.querySelector('[data-key="S"]')
const p = document.querySelector('[data-key="P"]')
const a = document.querySelector('[data-key="A"')
const c = document.querySelector('[data-key="C"')
const e = document.querySelector('[data-key="E"')
let userClick = s.addEventListener("click", (e) => {
    let letter = e.target.getAttribute("data-key")
    guessWord(letter);
})

let userClick2 = p.addEventListener("click", (e) => {
    let letter = e.target.getAttribute("data-key")
    guessWord(letter);
})

let userClick3 = a.addEventListener("click", (e) => {
    let letter = e.target.getAttribute("data-key")
    guessWord(letter);
})

let userClick4 = c.addEventListener("click", (e) => {
    let letter = e.target.getAttribute("data-key")
    guessWord(letter);
})

let userClick5 = e.addEventListener("click", (e) => {
    let letter = e.target.getAttribute("data-key")
    guessWord(letter);
})




// Need to make a function, that will iterate through each letter on the keyboard
// and assigns the click event Listener to each one individually, so that if any is clicked
// it calls the guessWord function, comparing the target

//For each button, grab the element and save to a variable of that letter a = "a" etc
/************************************************************************************* */

// function userClick() {
//     Letter.array.forEach(element => {
//         console.log(element)
//     });
// }
// userClick();


function addEvent() {

    for(let i = 0; i <= 27; i++){
        let key = document.querySelector(i)
    }

}