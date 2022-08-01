const cards = document.querySelectorAll('.anime-card');
const startBtn = document.querySelector('.start-game');
const resetBtn = document.querySelector('.reset');
let flippedCards = document.getElementsByClassName('anime-card flip');

// let hr = min = sec = ms = "0" + 0;


// startBtn.addEventListener('click', start);
// resetBtn.addEventListener('click', resetBoard);



// function start() {
//     startBtn.classList.add('active');

//     startTimer = setInterval(() => {
//         ms++
//         ms = ms < 10 ? "0" + ms : ms;
    
//         if (ms == 100) {
//             sec++;
//             sec = sec < 10 ? "0" + sec : sec;
//             ms = "0" + 0;
//         }
    
//         if (sec == 60) {
//             min++;
//             min = min < 10 ? "0" + min : min;
//             sec = "0" + 0;
//         }
//         if (min == 60) {
//             hr ++;
//             hr  = hr  < 10 ? "0" + hr  : hr ;
//             min = "0" + 0;
//         }
    
//         putValue();
//     }, 10);
// };

// function resetTimerClass() {
//     startBtn.classList.remove('active');
//     clearInterval(start);
//     hr = min = sec = ms = "0" + 0;
    
// };

//  function putValue() {
//     document.querySelector('.millisecond').innerHTML = ms;
//     document.querySelector('.second').innerHTML = sec;
//     document.querySelector('.minute').innerHTML = min;
//     document.querySelector('.hour').innerHTML = hr;
// }

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;

        return;
    } 
    // second click
    hasFlippedCard = false;
    secondCard = this;   
    
    checkForMatch()
}

function checkForMatch() {
    
        //console.log(firstCard.dataset.framework)
        //console.log(secondCard.dataset.framework)
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
//  condition ? expression1  : expression2
    isMatch ? disableCards() : unflipCards(); 
    }

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    checkForCompletion()
}

function unflipCards() {
    lockBoard = true;

    setTimeout(function(){
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]
    resetTimerClass();
    putValue();
}

function checkForCompletion() {
    let test = 0;
    for (let i = 0; i < flippedCards.length; i++) {
        console.log(i);
        test++
        console.log(test);
    }
    // if (test === 16) {
    //     clearInterval(startTimer)
    // }
}
// the extra parenthesis turns this into an Immediately Invoked Function Expression 
// meaning the function is called as soon as it is defined
(function shuffle() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 16);
        card.style.order = randomPosition;
    });
})();

cards.forEach(function(card){
    card.addEventListener('click', flipCard)
})