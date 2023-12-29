const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

exports.fistStar = () => {
   let sum = [];

   for (let i = 0; i < data.length; i++) {
      const row = data[i];
      const foundNumbers = [...row.matchAll(/[\d]+/g)];

      foundNumbers.forEach((match) => {
         const { 0: number, index } = match;
         const indexEnd = index + number.length;
         for (let j = i - 1; j <= i + 1; j++) {
            for (let k = index - 1; k <= indexEnd; k++) {
               if (!data[j] || !data[j][k]) continue;
               const target = data[j][k];
               if (target !== '.' && isNaN(target)) {
                  sum.push(+number);
               }
            }
         }
      });
   }

   sum = sum.reduce((acc, num) => acc + num, 0);

   console.log('DayThree-PartOne', sum);
};

exports.secondStar = () => {
   let sum = [];

   for (let i = 0; i < data.length; i++) {
      const row = data[i];
      const foundSymbols = [...row.matchAll(/\*/g)];

      foundSymbols.forEach((match) => {
         const { index } = match;
         let foundNumbers = [];

         for (let j = i - 1; j <= i + 1; j++) {
            const rowNumbers = [...data[j].matchAll(/[\d]+/g)];

            rowNumbers.forEach(({ 0: number, index: indexStart }) => {
               const indexEnd = indexStart + number.length - 1;
               if (
                  index === indexStart ||
                  index === indexEnd ||
                  index - 1 === indexStart ||
                  index - 1 === indexEnd ||
                  index + 1 === indexStart ||
                  index + 1 === indexEnd
               ) {
                  foundNumbers.push(number);
               }
            });
         }
         if (foundNumbers.length === 2) {
            const ratio = foundNumbers.reduce((acc, num) => acc * num, 1);
            sum.push(ratio);
         }
      });
   }
   sum = sum.reduce((acc, num) => acc + num, 0);

   console.log('DayThree-PartTwo', sum);
};
