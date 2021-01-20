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

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there's no input
    if(!guess) {
        document.querySelector('.message').textContent = ' ⛔️ No number!';
    // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!'
    // When the number's too high
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = '📉 Too low'
    // When the number's too low
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = '📈 Too high'
    }
});