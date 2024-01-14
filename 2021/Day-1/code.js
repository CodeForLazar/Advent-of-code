const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

exports.firstStar = () => {
   let sum = 0;
   let startNum = +data[0];

   for (let i = 0; i < data.length; i++) {
      const num = +data[i];

      if (num > startNum) {
         sum++;
      }
      startNum = num;
   }

   console.log('DayOne-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;
   let threeSums = [];

   for (let i = 0; i < data.length; i++) {
      const num = +data[i];
      const num2 = +data[i + 1];
      const num3 = +data[i + 2];

      if (!num3) break;

      threeSums.push(num + num2 + num3);
   }

   let startNum = threeSums[0];

   for (let i = 0; i < threeSums.length; i++) {
      const num = +threeSums[i];

      if (num > startNum) {
         sum++;
      }
      startNum = num;
   }

   console.log('DayOne-PartTwo', sum);
};
