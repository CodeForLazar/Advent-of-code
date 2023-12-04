const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

const formatData = data.map((card) =>
   card
      .split('Card ')[1]
      .split(': ')[1]
      .split(' | ')
      .map((card) => card.split(' ').filter((num) => num !== ''))
);

exports.fistStar = () => {
   let sum = 0;
   for (let i = 0; i < formatData.length; i++) {
      const [rowOne, rowTwo] = formatData[i];

      let points = 0;

      rowTwo.forEach((num) => {
         rowOne.forEach((winNum) => {
            if (num === winNum) {
               if (!points) {
                  points = 1;
               } else {
                  points = points * 2;
               }
            }
         });
      });
      sum = sum + points;
   }
   console.log('DayFour-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;
   let numOfCards = new Array(formatData.length).fill(1);

   for (let i = 0; i < formatData.length; i++) {
      const [rowOne, rowTwo] = formatData[i];

      let numOfCopies = 0;

      rowTwo.forEach((num) => {
         rowOne.forEach((winNum) => {
            if (num === winNum) {
               numOfCopies = numOfCopies + 1;
            }
         });
      });

      for (let d = 1; d <= numOfCopies; d++) {
         const next = i + d;
         numOfCards[next] = numOfCards[next] + numOfCards[i];
      }
   }

   sum = numOfCards.reduce((acc, currentValue) => acc + currentValue, 0);

   console.log('DayFour-PartOne', sum);
};
