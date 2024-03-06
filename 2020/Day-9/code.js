const fs = require('fs');
const path = require('path');

const data = fs
   .readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
   .split('\r\n')
   .map((num) => Number(num));

exports.firstStar = () => {
   let sum = false;
   let startSlice = 0;
   let endSlice = 25;

   for (let i = 25; i < data.length; i++) {
      let arrToCheck = data.slice(startSlice, endSlice);
      const numToCheck = data[i];

      for (let j = 0; j < arrToCheck.length; j++) {
         const num = arrToCheck[j];
         for (let q = 0; q < arrToCheck.length; q++) {
            const num2 = arrToCheck[q];
            if (j === q) {
               continue;
            }
            if (num + num2 === numToCheck) {
               sum = true;
            }
         }
      }

      if (!sum) {
         sum = numToCheck;
         break;
      }

      startSlice++;
      endSlice++;
      sum = false;
   }

   console.log('DayNine-PartOne', sum);
};

exports.secondStar = () => {
   let sum = [];

   console.log('DayNine-PartTwo', sum);
};
