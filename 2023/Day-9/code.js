const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

const game = data.map((info) => info.split(' '));

exports.fistStar = () => {
   let sum = 0;

   for (let i = 0; i < game.length; i++) {
      const row = game[i];
      let map = [row]

      for (let j = 0; j < row.length -1; j++) {
         const curr = +row[j];
         const next = +row[j + 1];

         console.log('curr next', (next - curr))
      }

   }

   console.log('DaySix-PartOne', game);
};

exports.secondStar = () => {
   let sum = 0;

   console.log('DaySix-PartTwo', sum);
};
