const fs = require('fs');
const path = require('path');

const data = fs
   .readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
   .split('\r\n')
   .map((row, idx) => {
      let newRow = row;
      for (let i = 0; i < idx; i++) {
         newRow.concat(row);
      }
      return newRow;
   });

exports.firstStar = () => {
   let sum = 0;
   let index = 3;

   for (let i = 0; i < data.length; i++) {
      const row = data[i + 1];
      if (!row) break;

      if (index > row.length - 1) {
         index = index - row.length;
      }
      
      if (row[index] === '#') {
         sum++;
      }

      index += 3;
   }

   console.log('DayThree-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;

   console.log('DayThree-PartTwo', sum);
};
