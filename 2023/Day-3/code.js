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
   let sum = 0;

   console.log('DayThree-PartTwo', sum);
};
