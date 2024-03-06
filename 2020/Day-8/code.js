const fs = require('fs');
const path = require('path');

const data = fs
   .readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
   .split('\r\n')
   .map((item) => [item.split(' ')[0], item.split(' ')[1]]);

exports.firstStar = () => {
   let sum = [];
   let acc = 0;

   for (let i = 0; i < data.length; i++) {
      const [op, value] = data[i];
      const sign = value.charAt(0);
      const number = +value.match(/\d+/g)[0];

      if (sum.find((step) => step === i)) {
         break;
      }
      sum.push(i);

      if (op === 'acc') {
         if (sign === '-') {
            acc = acc - number;
         } else {
            acc = acc + number;
         }
      } else if (op === 'nop') {
         continue;
      } else {
         if (sign === '-') {
            i = i - number - 1;
         } else {
            i = i + number - 1;
         }
      }
   }

   console.log('DayEight-PartOne', acc);
};

exports.secondStar = () => {
   let sum = [];

   console.log('DayEight-PartTwo', sum);
};
