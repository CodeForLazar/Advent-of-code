const fs = require('fs');
const path = require('path');

const data = fs
   .readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
   .split('\n')
   .map((num) => num.split(' '));

const INDICATOR = {
   increment: 'increment',
   decrement: 'decrement'
};

const checkReport = (report) => {
   let indicator = '';
   for (let j = 0; j < report.length - 1; j++) {
      const number = +report[j];
      const nextNumber = +report[j + 1];
      const diff = Math.abs(number - nextNumber);

      if (j === 0 && number > nextNumber) indicator = INDICATOR.decrement;
      if (j === 0 && number < nextNumber) indicator = INDICATOR.increment;

      if (j !== 0 && indicator === INDICATOR.increment && number > nextNumber) {
         return false;
      }
      if (j !== 0 && indicator === INDICATOR.decrement && number < nextNumber) {
         return false;
      }

      if (diff > 3 || diff < 1) {
         return false;
      }
   }
   return true;
};

exports.fistStar = () => {
   let sum = 0;
   for (let i = 0; i < data.length; i++) {
      const report = data[i];
      if (checkReport(report)) {
         sum++;
      }
   }
   console.log('Day2-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;
   for (let i = 0; i < data.lengths; i++) {
      const report = data[i];
      if (checkReport(report)) {
         sum++;
      } else {
         for (let j = 0; j < report.length; j++) {
            const newReport = report.slice(0, j).concat(report.slice(j + 1));
            if (checkReport(newReport)) {
               sum++;
               break;
            }
         }
      }
   }

   console.log('Day2-PartTwo', sum);
};
