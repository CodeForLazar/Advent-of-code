const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

let game = data
   .map((info) => info.split(' '))
   .map((char) =>
      char.map((charIn) => charIn.replace(/[=(),]/g, '')).filter((char) => char !== '')
   );

const sequence = game[0][0];
game.splice(0, 2);

exports.fistStar = () => {
   let sum = 0;
   let done = false;
   const mapLR = {
      L: 1,
      R: 2
   };

   let row = game.findIndex((row) => row[0] === 'AAA');
   let target = game.find((row) => row[0] === 'AAA');
   let j = 0;
   let nextTarget;
   let seq;

   while (!done) {
      if (row >= game.length) {
         row = 0;
      }
      if (j >= sequence.length) {
         j = 0;
      }

      seq = mapLR[sequence[j]];
      nextTarget = target[seq];

      if (game[row][0] === nextTarget) {
         target = game[row];
         j++;
         sum++;
      }

      if (target[0] === 'ZZZ') {
         done = true;
      }

      row++;
   }

   console.log('DaySix-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;

   console.log('DaySix-PartTwo', sum);
};
