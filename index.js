let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = true
let message= " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name :"Player",
    credit : 450}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.credit

function getRandomCard(){
    randomCard = Math.floor(Math.random()*13) +1
    if(randomCard>10){
        return 10
    }
    else if(randomCard === 1){
        return 11
    }
    else{
        return randomCard
    }
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " + " "

    for(let i=0; i<cards.length; i++){
       cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum<21){
        message = "want to draw another card"
    }
    else if(sum == 21){
        message = "you got blackjack"
        hasBlackjack = true
    }
    else{
        message = "you lost the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive == true && hasBlackjack == false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
   
}