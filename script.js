'use strict'
/*
console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there's no input
    if(!guess) {
        document.querySelector('.message').textContent = ' ⛔️ No number!';
    // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    // When the number's too high
    } else if (guess > secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too high'
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = '💥 You lost the game.'
            document.querySelector('.score').textContent = 0;
        }
    // When the number's too low
    } else if (guess < secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too low'
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = '💥 You lost the game.'
            document.querySelector('.score').textContent = 0;
        }

    }
});