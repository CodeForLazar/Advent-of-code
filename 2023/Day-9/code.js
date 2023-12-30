const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

const game = data.map((info) => info.split(' ').map((num) => +num));

exports.fistStar = () => {
   let sum = 0;

   for (let i = 0; i < game.length; i++) {
      let map = [game[i]];

      while (!map.at(-1).every((num) => num === 0)) {
         let lastRow = map.at(-1);
         let temp = [];
         for (let j = 0; j < lastRow.length - 1; j++) {
            let diff = +lastRow[j + 1] - +lastRow[j];
            temp.push(diff);
         }
         map.push(temp);
      }

      let calcSum = 0;

      for (let k = map.length - 1; k >= 0; k--) {
         const row = map[k];
         calcSum += row.at(-1);
      }

      sum += calcSum;
   }
   console.log('DayNine-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;

   for (let i = 0; i < game.length; i++) {
      let map = [game[i]];

      while (!map.at(-1).every((num) => num === 0)) {
         let lastRow = map.at(-1);
         let temp = [];
         for (let j = 0; j < lastRow.length - 1; j++) {
            let diff = +lastRow[j + 1] - +lastRow[j];
            temp.push(diff);
         }
         map.push(temp);
      }

      let calcSum = 0;

      for (let k = map.length - 1; k > 0; k--) {
         const row = map[k][0];
         const row2 = map[k - 1][0];

         map[k - 1].unshift(row2 - row);
      }
     
      sum += map[0][0];
   }
   console.log('DayNine-PartTwo', sum);
};
