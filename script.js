'use strict'
/*
console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const reloadMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there's no input
    if(!guess) {
    //     document.querySelector('.message').textContent = ' ⛔️ No number!';
    reloadMessage(' ⛔️ No number!');
    // When player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        reloadMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // When the guess is wrong (Refatoring the code commented)
    }else if (guess !== secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNumber? '📈 Too high' : '📈 Too low'
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            // document.querySelector('.message').textContent = '💥 You lost the game.'
            reloadMessage('💥 You lost the game.');
            document.querySelector('.score').textContent = 0;
        }
    }

    // // When the number's too high
    // } else if (guess > secretNumber) {
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📈 Too high'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else {
    //         document.querySelector('.message').textContent = '💥 You lost the game.'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // // When the number's too low
    // } else if (guess < secretNumber) {
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📈 Too low'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else {
    //         document.querySelector('.message').textContent = '💥 You lost the game.'
    //         document.querySelector('.score').textContent = 0;
    //     }

    //}
});

// Coding Challenge

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
*/

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    reloadMessage('Starting guessing...');

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});