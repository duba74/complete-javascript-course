'use strict';

// Selecting elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

let scores, winningScore, currentScore, activePlayer, playing;

const init = function () {
  // Starting conditions
  scores = [0, 0];
  winningScore = 100;
  currentScore = 0;
  activePlayer = Math.trunc(Math.random() + 0.5);
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.remove('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');

  if (activePlayer === 0) {
    activePlayer = 1;
    player1El.classList.add('player--active');
  } else {
    activePlayer = 0;
    player0El.classList.add('player--active');
  }
};

init();

// Function to switch player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Gen random roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // Display dice image
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Add dice to score, check if 1, if so switch to other player
    if (dice !== 1) {
      // Switch to next player
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player, reset score
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to active players score
    scores[activePlayer] += currentScore;
    currentScore = 0;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if score is >=100 to determine if winner
    if (scores[activePlayer] >= winningScore) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
