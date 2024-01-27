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

const findTries = (index, skipRow) => {
   let result = 0;
   let increment = index;
   for (let i = skipRow; i < data.length; i += skipRow) {
      const row = data[i];
      if (!row) break;

      if (increment > row.length - 1) {
         increment = increment - row.length;
      }
      if (row[increment] === '#') {
         result++;
      }
      increment += index;
   }
   return result;
};

exports.firstStar = () => {
   let sum = 0;

   sum = findTries(3, 1);

   console.log('DayThree-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;

   const one = findTries(1, 1);
   const three = findTries(3, 1);
   const five = findTries(5, 1);
   const seven = findTries(7, 1);
   const double = findTries(1, 2);

   sum = one * three * five * seven * double;

   console.log('DayThree-PartTwo', sum);
};
