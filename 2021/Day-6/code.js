const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split(',').map(Number);

exports.firstStar = () => {
   let sum = [...data];

   const days = 80;
   let dayIndex = 0;

   sum.sort((a, b) => a - b);
   while (dayIndex < days) {
      let findex = 0;
      let newFish = 0;

      while (sum[findex] === 0) {
         sum[findex] = 6;
         findex++;
         newFish++;
      }

      while (findex < sum.length) {
         sum[findex] = sum[findex] - 1;
         findex++;
      }

      for (let i = 0; i < newFish; i++) {
         sum.push(8);
      }

      sum.sort((a, b) => a - b);

      dayIndex++;
   }

   console.log('DaySix-PartOne', sum.length);
};

exports.secondStar = () => {
   let sum = 0;

   console.log('DaySix-PartTwo', sum);
};
