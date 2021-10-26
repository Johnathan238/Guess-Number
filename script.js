'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 25

let number = Math.trunc(Math.random() * 20) + 1

let score = 20;

document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess);

    // when there is no input
    if(!guess) {
        document.querySelector('.message').textContent = '⚠️ No Number!'
        
        // when player wins
    }  else if (guess === number){
      document.querySelector('.message').textContent = ' ✅ Correct Number!'
      document.querySelector('.number').textContent = number
      document.querySelector('body').style.backgroundColor = '#60b347'

      document.querySelector('.number').style.width = '30rem'

      // when guess is too high
    } else if (guess > number){

      if(score > 1){
      document.querySelector('.message').textContent = ' 📈 Too High'
      score--
      document.querySelector('.score').textContent = score
      } else {
        document.querySelector('.message').textContent = ' You Lose the game!'
        document.querySelector('.score').textContent = 0
      }
    
      // when guess is too low
    } else if (guess < number) {
      
      if(score > 1){
      document.querySelector('.message').textContent = '📉 Too Low'
      score--
      document.querySelector('.score').textContent = score
      } else {
        document.querySelector('.message').textContent = '😔 You Lose the game!'
        document.querySelector('.score').textContent = 0
        document.querySelector('body').style.backgroundColor = '	#FF0000'
      }

    }
})

document.querySelector('.again').addEventListener('click', function () {
  let number = Math.trunc(Math.random() * 20) + 1
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = 0
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.score').textContent = 20
})






