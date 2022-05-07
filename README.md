# Space Rescue Game

**A time sensitive trivia game**

Game Link: https://joshlawlor.github.io/Project-1--Starman/



- There are 3 total questions, each with 1 word answer
- You must guess each letter of the word individually
- You must guess all 3 words correctly to win
- If you do not answer all 3 questions correctly within the time limit, you lose
- At any time, you can press 'ABORT' to restart the game

# Screenshots
<img width ="600" src="/images/LandingPage-Screenshot.png">
<img width ="600" src="/images/GAMEOVER-Screenshot.png">
<img width ="600" src="/images/GAMEWIN-Screenshot.png">

# Technologies Used
This project is written in HTML, CSS, and JavaScript

# Problems
I had difficulties implementing rounds into my game, as I had to rewrite 
most of my win/lose and guessWord functions to incorporate more than one word.
Eventually I was able to do so by using a round counter value throughout the game.

I also had a bug when I started using rounds, the game would produce the correct amount of empty boxes for each letter in the new round, but these boxes would not log the correct letter when the user clicked. I was able to fix this by automatically assigning a value to each box as they are made, with a forEach function pushing those values into an empty array. This array is thenemptied at the start of each new round.

# User Stories
### MVP Goals
- As a player, I want to start the game
- As a player I would like to see how many letters are in the word I am guessing
- As a player, when I guess a letter I would like the correct letter to show in the proper box
- As a player, I would like to know how much longer I have to answer questions (Timer)
- As a player, if I guess the wrong letter I want to know
- As a player, I want to know when time is up, and I have lost
- As a player, I want to know when I guessed all letters correctly, and I have won
- Asa a player, I want to play again at any time

### Stretch Goals
- As a player, I want to guess more than 1 word, 3 rounds
- As a player, I want the game to ask questions, and the word I am guessing is the answer
- As a player, I would like the letters I guess incorrectly to be removed
- As a player, I would like to receive hints, if I use a hint my time left goes down
- As a player, I would like the Astronaut to get closer to the Space Station each round I complete

# Wireframes

<img width ="600" src="https://media.git.generalassemb.ly/user/41952/files/e5641b80-c64c-11ec-8532-2faf4f130d67">

![image](https://media.git.generalassemb.ly/user/41952/files/f0b84680-c64e-11ec-92f6-9ca7de7d4964)

![image](https://media.git.generalassemb.ly/user/41952/files/8d2e1900-c64e-11ec-9fc8-87d222e1a816)
