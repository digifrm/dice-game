'use strict';
// Store Variables
const elPlayer0 = document.querySelector ('.player--0');
const elPlayer1 = document.querySelector ('.player--1');
const elScore0 = document.getElementById('score--0');
const elScore1 = document.getElementById('score--1');
const elCurrent0 = document.getElementById ('current--0');
const elCurrent1 = document.getElementById ('current--1');
const elDice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// Classes Manipulation 
elScore0.textContent = 0;
elScore1.textContent = 0;
elDice.classList.add('hidden');
let scores, currentScore, activePlayer, playing;

//Rolling Dice Functionality
btnRoll.addEventListener('click', function() {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        // console.log(dice, typeof dice);
        elDice.classList.remove('hidden');
        elDice.src = `dice-${dice}.png`;
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            // elCurrent0.textContent = currentScore;
        }
        else {
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            currentScore = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            elPlayer0.classList.toggle('player--active');
            elPlayer1.classList.toggle('player--active');
        }
    }
}); 
btnHold.addEventListener('click', function () {
    if (playing) {

        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
        if(scores[activePlayer] >= 20) {
            playing = false;
            elDice.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else {
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            currentScore = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            elPlayer0.classList.toggle('player--active');
            elPlayer1.classList.toggle('player--active');
        }
    }
});
btnNew.addEventListener('click', function() {

    elScore0.textContent = 0;
    elScore1.textContent = 0;
    elCurrent0.textContent = 0;
    elCurrent1.textContent = 0;
    elPlayer0.classList.remove('player--winner');
    elPlayer1.classList.remove('player--winner');
    elPlayer0.classList.add('player--active');
    elPlayer1.classList.remove('player--active');
    elDice.classList.remove('hidden');
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

});