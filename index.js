// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;

function writeCards(cards,event) {

const newCard= [];
    for (let i = 0; i < cards.length; i++) {
  newCard.push('Thank you, ${cards[i]} ,for the wonderful ${event} surprise gift!');
    }
    
    return newCard;
    }

function countDown(int){
    while(int>=0){
        console.log(int);
        int--;
    }
}