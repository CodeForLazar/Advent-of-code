const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n')[0];

const findMark = (length) => {
   let sum = 0;

   for (let i = 0; i < data.length - length; i++) {
      let substring = data.slice(i, i + length);

      let unique = {};

      for (const charr of substring) {
         unique[charr] = (unique[charr] || 0) + 1;
      }

      let foundMark = Object.values(unique).every((num) => num === 1);
      if (foundMark) {
         sum = i + length;
         break;
      }
   }
   return sum;
};

exports.firstStar = () => {
   let sum = 0;

   sum = findMark(4);

   console.log('DaySix-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;

   sum = findMark(14);

   console.log('DaySix-PartTwo', sum);
};
