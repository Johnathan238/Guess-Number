'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 25

const number = Math.trunc(Math.random() * 20)

document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = '⚠️ No Number!'
    }
})