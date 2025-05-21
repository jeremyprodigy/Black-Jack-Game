let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card!";
    } else if (sum === 21) {
        message = "You got Black Jack";
        hasBlackJack = true;
    } else {
        message = "You're outof the game!";
        isAlive = false

    }

    messageEl.textContent = message;
    sumEl.textContent += sum

}


