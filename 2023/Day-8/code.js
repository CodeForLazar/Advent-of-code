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

const rows = game.reduce((acc, el, idx) => {
   if (el[0][2] === 'A') {
      acc.push(idx);
   }
   return acc;
}, []);

exports.secondStar = () => {
   let sum = 0;
   let done = false;
   const mapLR = {
      L: 1,
      R: 2
   };

   let row = rows[0];
   let row2 = rows[1];
   let row3 = rows[2];
   let row4 = rows[3];
   let row5 = rows[4];
   let row6 = rows[5];
   let target = game.find((_, idx) => idx === row);
   let target2 = game.find((_, idx) => idx === row2);
   let target3 = game.find((_, idx) => idx === row3);
   let target4 = game.find((_, idx) => idx === row4);
   let target5 = game.find((_, idx) => idx === row5);
   let target6 = game.find((_, idx) => idx === row6);
   let j = 0;
   let nextTarget;
   let nextTarget2;
   let nextTarget3;
   let nextTarget4;
   let nextTarget5;
   let nextTarget6;
   let seq;

   while (!done) {
      if (j >= sequence.length) {
         j = 0;
      }

      seq = mapLR[sequence[j]];
      nextTarget = target[seq];
      nextTarget2 = target2[seq];
      nextTarget3 = target3[seq];
      nextTarget4 = target4[seq];
      nextTarget5 = target5[seq];
      nextTarget6 = target6[seq];

      while (game[row][0] !== nextTarget) {
         target = game[row];
         if (game[row][0] === nextTarget) {
            break;
         }
         row++;
         if (row >= game.length) {
            row = 0;
         }
      }

      while (game[row2][0] !== nextTarget2) {
         target2 = game[row2];
         if (game[row2][0] === nextTarget2) {
            break;
         }
         row2++;
         if (row2 >= game.length) {
            row2 = 0;
         }
      }
      while (game[row3][0] !== nextTarget3) {
         target3 = game[row3];
         if (game[row3][0] === nextTarget3) {
            break;
         }
         row3++;
         if (row3 >= game.length) {
            row3 = 0;
         }
      }
      while (game[row4][0] !== nextTarget4) {
         target4 = game[row4];
         if (game[row4][0] === nextTarget4) {
            break;
         }
         row4++;
         if (row4 >= game.length) {
            row4 = 0;
         }
      }
      while (game[row5][0] !== nextTarget5) {
         target5 = game[row5];
         if (game[row5][0] === nextTarget5) {
            break;
         }
         row5++;
         if (row5 >= game.length) {
            row5 = 0;
         }
      }
      while (game[row6][0] !== nextTarget6) {
         target6 = game[row6];
         if (game[row6][0] === nextTarget6) {
            break;
         }
         row6++;
         if (row6 >= game.length) {
            row6 = 0;
         }
      }

      if (
         target[0][2] === 'Z' &&
         target2[0][2] === 'Z' &&
         target3[0][2] === 'Z' &&
         target4[0][2] === 'Z' &&
         target5[0][2] === 'Z' &&
         target6[0][2] === 'Z'
      ) {
         done = true;
      }

      j++;

      sum++;
   }

   console.log('DaySix-PartTwo', sum);
};
