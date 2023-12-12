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
   8: 8,
   9: 9,
   T: 10,
   J: 11,
   Q: 12,
   K: 13,
   A: 14
};

exports.fistStar = () => {
   let sum = 0;
   let hands = [];
   let rank = [];

   for (let [cards, bid] of game) {
      const copies = {};

      for (let i = 0; i < cards.length; i++) {
         const card = cards[i];
         copies[card] = (copies[card] || 0) + 1;
      }

      const combinations = Object.entries(copies);
      if (combinations.every((hand) => hand[1] === 1)) {
         hands.push({ combo: 'none', cards, bid });
         continue;
      }

      for (let d = 0; d < combinations.length; d++) {
         const [_, count] = combinations[d];
         if (count === 5) {
            hands.push({ combo: 'five', cards, bid });
            break;
         } else if (count === 4) {
            hands.push({ combo: 'four', cards, bid });
            break;
         } else if (count === 3) {
            const hasPair = combinations.some(([_, countTwo]) => countTwo === 2);

            if (hasPair) {
               hands.push({ combo: 'threeTwo', cards, bid });
            } else {
               hands.push({ combo: 'three', cards, bid });
            }
            break;
         } else if (count === 2) {
            const hasPair = combinations.filter(([_, copy]) => copy === 2);
            if (hasPair.length === 1) {
               hands.push({ combo: 'two', cards, bid });
            } else {
               hands.push({ combo: 'TwoTwo', cards, bid });
            }
            break;
         }
      }
   }

   for (let q = 0; q < hands.length; q++) {
      const handOne = hands[q];
      for (let w = 1; w < hands.length; w++) {
         const handTwo = array[w];

      }
      
   }

   console.log('DaySeven-PartOne', hands);
};

exports.secondStar = () => {
   let sum = 0;

   console.log('DaySeven-PartTwo', sum);
};
