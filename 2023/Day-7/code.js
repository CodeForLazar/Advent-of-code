const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

const game = data.map((info) => info.split(' '));

const mapCards = {
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

const mapCardsJoker = {
   2: 2,
   3: 3,
   4: 4,
   5: 5,
   6: 6,
   7: 7,
   8: 8,
   9: 9,
   T: 10,
   J: 1,
   Q: 12,
   K: 13,
   A: 14
};

const joker = 'J';

const sortFunc = (hands, isJoker) => {
   return hands.toSorted((a, b) => {
      for (let i = 0; i < a.cards.length; i++) {
         const card = isJoker ? mapCardsJoker[a.cards[i]] : mapCards[a.cards[i]];
         const card2 = isJoker ? mapCardsJoker[b.cards[i]] : mapCards[b.cards[i]];

         if (card < card2) {
            return -1;
         } else if (card > card2) {
            return 1;
         }
      }
      return 0;
   });
};

const hasJoker = (combo, count) => {
   const nonComboCards = combo.filter(([J, copy]) => copy !== count);
   return nonComboCards.filter(([J, copy]) => J === joker).length;
};

const hasJokerTwo = (combo) => {
   let checkForTwoTwo = combo.filter(([J, copy]) => copy === 2);
   let checkForJokers = checkForTwoTwo.filter(([J, copy]) => J === joker).length;
   return checkForJokers;
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
            const hasPair = combinations.filter(([_, copy]) => copy === 2);
            let hasDifferent = combinations.filter(([_, copy]) => copy !== 3);
            if (hasPair.length === 1) {
               threeTwo.push({ cards, bid });
               break;
            } else if (hasDifferent.length === 2) {
               three.push({ cards, bid });
               break;
            }
         } else if (count === 2) {
            const hasPair = combinations.filter(([_, copy]) => copy === 2);
            let hasDifferent = combinations.filter(([_, copy]) => copy !== 2);
            if (hasPair.length === 2) {
               twoTwo.push({ cards, bid });
               break;
            } else if (hasPair.length === 1 && hasDifferent.length === 3) {
               two.push({ cards, bid });
               break;
            }
         } else if (count === 1) {
            const noPair = combinations.filter(([_, copy]) => copy === 1);
            if (noPair.length === 5) {
               none.push({ cards, bid });
               break;
            }
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
            const jokers = hasJoker(combinations, 4);
            if (jokers === 1) {
               five.push({ cards, bid });
               break;
            }
            four.push({ cards, bid });
            break;
         } else if (count === 3) {
            const jokers = hasJoker(combinations, 3);
            const hasPair = combinations.filter(([_, copy]) => copy === 2);
            let hasDifferent = combinations.filter(([_, copy]) => copy !== 3);
            if (hasPair.length === 1) {
               if (jokers === 1) {
                  five.push({ cards, bid });
                  break;
               }
               threeTwo.push({ cards, bid });
               break;
            } else if (hasDifferent.length === 2) {
               if (jokers === 1) {
                  four.push({ cards, bid });
                  break;
               }
               three.push({ cards, bid });
               break;
            }
         } else if (count === 2) {
            const hasPair = combinations.filter(([_, copy]) => copy === 2);
            let hasDifferent = combinations.filter(([_, copy]) => copy !== 2);
            if (hasPair.length === 2) {
               const jokers2 = hasJokerTwo(combinations);
               const jokers = hasJoker(combinations, 2);
               if (jokers2 === 1) {
                  four.push({ cards, bid });
                  break;
               }
               if (jokers === 1) {
                  three.push({ cards, bid });
                  break;
               }
               twoTwo.push({ cards, bid });
               break;
            } else if (hasPair.length === 1 && hasDifferent.length === 3) {
               const jokers = hasJoker(combinations, 2);
               if (jokers === 1) {
                  three.push({ cards, bid });
                  break;
               }
               two.push({ cards, bid });
               break;
            }
         } else if (count === 1) {
            const noPair = combinations.filter(([_, copy]) => copy === 1);
            if (noPair.length === 5) {
               const jokers = hasJoker(combinations, 1);
               if (!!jokers) {
                  two.push({ cards, bid });
               }
               none.push({ cards, bid });
               break;
            }
         }
      }
   }

   five = sortFunc(five, 'joker');
   four = sortFunc(four, 'joker');
   threeTwo = sortFunc(threeTwo, 'joker');
   three = sortFunc(three, 'joker');
   twoTwo = sortFunc(twoTwo, 'joker');
   two = sortFunc(two, 'joker');
   none = sortFunc(none, 'joker');
   const sortedHands = [...none, ...two, ...twoTwo, ...three, ...threeTwo, ...four, ...five];
   sum = sortedHands.reduce((acc, hand, idx) => acc + hand.bid * (idx + 1), 0);

   console.log('DaySeven-PartTwo', sum);
};
