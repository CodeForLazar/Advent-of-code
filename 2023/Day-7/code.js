const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

const game = data.map((info) => info.split(' '));

const mapCards = {
   1: 1,
   2: 2,
   3: 3,
   4: 4,
   5: 5,
   6: 6,
   7: 7,
   8: 8,
   9: 9,
   T: 10,
   J: 11,
   Q: 12,
   K: 13,
   A: 14
};

const sortFunc = (hands) => {
   return hands.toSorted((a, b) => {
      for (let i = 0; i < a.cards.length; i++) {
         const card = mapCards[a.cards[i]];
         const card2 = mapCards[b.cards[i]];

         if (card < card2) {
            return -1;
         } else if (card > card2) {
            return 1;
         }
      }
      return 0;
   });
};

exports.fistStar = () => {
   let sum = 0;
   let none = [];
   let two = [];
   let twoTwo = [];
   let three = [];
   let threeTwo = [];
   let four = [];
   let five = [];

   for (let [cards, bid] of game) {
      const copies = {};
      bid = +bid;

      for (let i = 0; i < cards.length; i++) {
         const card = cards[i];
         copies[card] = (copies[card] || 0) + 1;
      }

      const combinations = Object.entries(copies);

      for (let d = 0; d < combinations.length; d++) {
         const [_, count] = combinations[d];
         if (count === 5) {
            five.push({ cards, bid });
            break;
         } else if (count === 4) {
            four.push({ cards, bid });
            break;
         } else if (count === 3) {
            const hasPair = combinations.some(([_, countTwo]) => countTwo === 2);

            if (hasPair) {
               threeTwo.push({ cards, bid });
            } else {
               three.push({ cards, bid });
            }
            break;
         } else if (count === 2) {
            const hasPair = combinations.filter(([_, copy]) => copy === 2);
            if (hasPair.length === 1) {
               two.push({ cards, bid });
            } else {
               twoTwo.push({ cards, bid });
            }
            break;
         } else if (combinations.every((hand) => hand[1] === 1)) {
            none.push({ cards, bid });
            break;
         }
      }
   }

   five = sortFunc(five);
   four = sortFunc(four);
   threeTwo = sortFunc(threeTwo);
   three = sortFunc(three);
   twoTwo = sortFunc(twoTwo);
   two = sortFunc(two);
   none = sortFunc(none);
   const sortedHands = [...none, ...two, ...twoTwo, ...three, ...threeTwo, ...four, ...five];
   sum = sortedHands.reduce((acc, hand, idx) => acc + hand.bid * (idx + 1), 0);
   console.log('DaySeven-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;

   console.log('DaySeven-PartTwo', sum);
};
