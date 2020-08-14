let allCards = [ "card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8","card9", "card10", "card11","card12"]
let allFunctions = [cardOneClicked, cardTwoClicked, cardThreeClicked, cardFourClicked, cardFiveClicked, cardSixClicked, cardSevenClicked, cardEightClicked, cardNineClicked, cardTenClicked,cardElevenClicked, cardTwelveClicked]
var  array = [];
let randomImage = "";
let clickedCards = [];
let score = 0;


document.getElementById("btn-id").addEventListener("click", shuffleCards);
function shuffleCards() {
    console.log("The game has started");
    document.getElementById("prompter").style.display = "none";
    document.getElementById("flash-card").style.display = "none";
    clickedCards = [];
    array = imageShuffle();
    randomImage = array[Math.floor(Math.random() * array.length)];
    document.getElementById("prompter").getElementsByTagName('img')[0].src = randomImage
    for (i = 0; i < allCards.length; i++) {
        document.getElementById(allCards[i]).getElementsByTagName('img')[0].src = array[i] 
    }
    console.log(array);
    setTimeout(flipCards, 3000);
}
function flipCards() {
    for (i = 0; i < allCards.length; i++) {
        document.getElementById(allCards[i]).getElementsByTagName('img')[0].src = "cardback.jpg" 
    }
    document.getElementById("prompter").style.display = "block";
}
let images = [ "apple.png", "pear.jpeg", "banana.jpeg", "orange.jpeg", "grapes.jpeg", "pineapple.jpeg" ]
function imageShuffle() {
    let shuffled = []
    for (i = 0; i < images.length; i++) { 
            shuffled.push(images[i]);
            shuffled.push(images[i]);
    }
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled 
}

for (i = 0; i < allCards.length; i++) {
    document.getElementById(allCards[i]).addEventListener("click", allFunctions[i]);
}

function playCard (playedCard) {
    clickedCards.push(playedCard);
    console.log(clickedCards + ' ' + randomImage);
    if (clickedCards.length === 2) {
        if (clickedCards[0]=== randomImage && clickedCards[1]=== randomImage) {
            score += 1000;
            document.getElementById("flash-card").innerHTML = `<p> Congratulations! You have won this round. <br> Your score is: ${score} </p>`;
            document.getElementById("flash-card").style.display = "block";
        }
        else {
            const currentTopScore = score
            document.getElementById("flash-card").innerHTML = `<p> Sorry! Try again. Your top score was: ${currentTopScore} </p>`;
            document.getElementById("flash-card").style.display = "block";
            score = 0;
            setTimeout(shuffleCards, 1000);
        }
    }
    else if (clickedCards.length > 2){
        shuffleCards();
    }
    
};

function cardOneClicked() {
    let frontImg = document.getElementById('card1').getElementsByTagName('img')[0];
    frontImg.src = array[0];
    playCard(array[0]);
}
function cardTwoClicked() {
    let frontImg = document.getElementById('card2').getElementsByTagName('img')[0];
    frontImg.src = array[1];
    playCard(array[1]);
}
function cardThreeClicked() {
    let frontImg = document.getElementById('card3').getElementsByTagName('img')[0];
    frontImg.src = array[2];
    playCard(array[2]);
}
function cardFourClicked() {
    let frontImg = document.getElementById('card4').getElementsByTagName('img')[0];
    frontImg.src = array[3];
    playCard(array[3]);
}
function cardFiveClicked() {
    let frontImg = document.getElementById('card5').getElementsByTagName('img')[0];
    frontImg.src = array[4];
    playCard(array[4]);
}
function cardSixClicked() {
    let frontImg = document.getElementById('card6').getElementsByTagName('img')[0];
    frontImg.src = array[5];
    playCard(array[5]);
}
function cardSevenClicked() {
    let frontImg = document.getElementById('card7').getElementsByTagName('img')[0];
    frontImg.src = array[6];
    playCard(array[6]);
}
function cardEightClicked() {
    let frontImg = document.getElementById('card8').getElementsByTagName('img')[0];
    frontImg.src = array[7];
    playCard(array[7]);
}
function cardNineClicked() {
    let frontImg = document.getElementById('card9').getElementsByTagName('img')[0];
    frontImg.src = array[8];
    playCard(array[8]);
}
function cardTenClicked() {
    let frontImg = document.getElementById('card10').getElementsByTagName('img')[0];
    frontImg.src = array[9];
    playCard(array[9]);
}
function cardElevenClicked() {
    let frontImg = document.getElementById('card11').getElementsByTagName('img')[0];
    frontImg.src = array[10];
    playCard(array[10]);
}
function cardTwelveClicked() {
    let frontImg = document.getElementById('card12').getElementsByTagName('img')[0];
    frontImg.src = array[11];
    playCard(array[11]);
}
