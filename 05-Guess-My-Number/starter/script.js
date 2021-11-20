'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let victorious = false;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.score').textContent = score;
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  console.log(guess, typeof guess);

  //If no guess

  if (!guess) {
    displayMessage('No number...');
  } else if (guess < 1 || guess > 20) {
    displayMessage('Enter number from 1 to 20');
  } else if (Number(guess) === secretNumber) {
    victorious = true;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayMessage(
      `That's right! Your final score is ${score}. Click "Again" to try again`
    );
    document.querySelector('.number').textContent = guess;
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too high...' : 'Too low...');
    score > 0 ? score-- : score;
    document.querySelector('.score').textContent = score;
  }
  if (score < 1) {
    displayMessage('You lost!');
    document.querySelector('body').style.backgroundColor = '#F00';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  if (victorious) {
    if (score > highScore) {
      highScore = score;
    }
    victorious = false;
  }

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
