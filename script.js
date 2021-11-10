'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess);

    // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⚠️ No Number!'
        
    // when player wins
  } else if (guess === number) {
    displayMessage(' ✅ Correct Number!')
    document.querySelector('.number').textContent = number
    document.querySelector('body').style.backgroundColor = '#60b347'

    document.querySelector('.number').style.width = '30rem'

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? ' 📈 Too High' : '📉 Too Low')
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayMessage(' You Lose the game!')
      document.querySelector('.score').textContent = 0
    }

  }
})

document.querySelector('.again').addEventListener('click', function () {
  // let number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = 0
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('body').style.backgroundColor = '#222'
  displayMessage('Start guessing...')
  document.querySelector('.score').textContent = 20
})







