const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');
const bingoNumbers = data.shift().split(',');
data.shift();
const bingoBlocks = [[]];
let i = 0;
for (const row of data) {
   if (row === '') {
      bingoBlocks.push([]);
      i++;
      continue;
   }
   bingoBlocks[i].push(row.split(' ').filter((char) => char !== ''));
}

exports.firstStar = () => {
   let sum = 0;
   let bingoNum;
   let i;

   done: for (bingoNum of bingoNumbers) {
      for (i = 0; i < bingoBlocks.length; i++) {
         const block = bingoBlocks[i];

         for (let j = 0; j < block.length; j++) {
            const row = block[j];

            for (let o = 0; o < row.length; o++) {
               const number = row[o];

               if (number === bingoNum) {
                  row[o] = row[o].concat('*');
               }
            }

            if (row.every((num) => num.includes('*'))) {
               break done;
            }
         }
         let flatBlock = block.flat(1);
         for (let q = 0; q < flatBlock.length; q++) {
            const row = flatBlock[q];
            const row2 = flatBlock[q + 5];
            const row3 = flatBlock[q + 10];
            const row4 = flatBlock[q + 15];
            const row5 = flatBlock[q + 20];
            if (!row5) {
               break;
            }
            if (
               row.includes('*') &&
               row2.includes('*') &&
               row3.includes('*') &&
               row4.includes('*') &&
               row5.includes('*')
            ) {
               break done;
            }
         }
      }
   }

   sum = bingoBlocks[i].flat(1).reduce((acc, num) => {
      if (!num.includes('*')) {
         acc = acc + +num;
      }
      return acc;
   }, 0);

   sum = sum * bingoNum;

   console.log('DayFour-PartOne', sum);
};

exports.secondStar = () => {
   let sum = [];
   let bingoNum;
   let i;

   done: for (bingoNum of bingoNumbers) {
      for (i = 0; i < bingoBlocks.length; i++) {
         const block = bingoBlocks[i];

         for (let j = 0; j < block.length; j++) {
            const row = block[j];

            for (let o = 0; o < row.length; o++) {
               const number = row[o];

               if (number === bingoNum) {
                  row[o] = row[o].concat('*');
               }
            }

            if (row.every((num) => num.includes('*'))) {
               if (sum.indexOf(i) === -1) {
                  sum.push(i);
               }
               if (bingoBlocks.length === sum.length) {
                  break done;
               }
            }
         }
         let flatBlock = block.flat(1);
         for (let q = 0; q < flatBlock.length; q++) {
            const row = flatBlock[q];
            const row2 = flatBlock[q + 5];
            const row3 = flatBlock[q + 10];
            const row4 = flatBlock[q + 15];
            const row5 = flatBlock[q + 20];
            if (!row5) {
               break;
            }
            if (
               row.includes('*') &&
               row2.includes('*') &&
               row3.includes('*') &&
               row4.includes('*') &&
               row5.includes('*')
            ) {
               if (sum.indexOf(i) === -1) {
                  sum.push(i);
               }
               if (bingoBlocks.length === sum.length) {
                  break done;
               }
            }
         }
      }
   }

   sum = bingoBlocks[i].flat(1).reduce((acc, num) => {
      if (!num.includes('*')) {
         acc = acc + +num;
      }
      return acc;
   }, 0);

   sum = sum * bingoNum;

   console.log('DayFour-PartOne', sum);
};
