// Need a form to take user input

//Need a word bank, that I can check against user input. If player gets all letters correct, they win

//Need a timer function, 1 minute, if time ends user loses

//Need win condition



const word = ["S", "P", "A" , "C" , "E"];
console.log(word)
// let letter = document.getElementById("userInput").value

function guessWord() {

    if (letter === word[0]){
        console.log(`Correct, the first letter is ${word[0]}`)
    }



}

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