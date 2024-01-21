const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split(',').map(Number);

exports.firstStar = () => {
   let sum = [];
   const maxPosition = Math.max(...data);

   for (let position = 0; position < maxPosition; position++) {
      sum.push(0);

      for (let j = 0; j < data.length; j++) {
         let crab = data[j];

         while (crab > position) {
            crab--;
            sum[position] = (sum[position] || 0) + 1;
         }
         while (crab < position) {
            crab++;
            sum[position] = (sum[position] || 0) + 1;
         }
      }
   }

   sum = Math.min(...sum);

   console.log('DaySeven-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;

   console.log('DaySeven-PartOne', sum);
};
