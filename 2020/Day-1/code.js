const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

exports.firstStar = () => {
   let sum = 0;
   let num = 0;
   let num2 = 0;

   outLoop: for (num of data) {
      for (num2 of data) {
         sum = +num + +num2;
         if (sum === 2020) break outLoop;
      }
   }
   sum = num * num2;

   console.log('DayOne-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;
   let num = 0;
   let num2 = 0;
   let num3 = 0;

   outLoop: for (num of data) {
      for (num2 of data) {
         for (num3 of data) {
            sum = +num + +num2 + +num3;
            if (sum === 2020) break outLoop;
         }
      }
   }
   sum = num * num2 * num3;

   console.log('DayOne-PartTwo', sum);
};
