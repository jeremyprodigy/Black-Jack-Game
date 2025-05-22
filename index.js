
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let player = {
    name : 'Jeremiah',
    chips : 145
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + " : $" + player.chips


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 12) + 1;
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]
    renderGame();
}
function renderGame() {
    cardsEl.textContent = "Card : ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = `Sum : ${sum}`;

    if (sum <= 20) {
        message = "Do you want to draw a new card!";
    } else if (sum === 21) {
        message = "You got Black Jack";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false

    }

    messageEl.textContent = message;


}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame();

    }
}



console.log(cards);

















































































