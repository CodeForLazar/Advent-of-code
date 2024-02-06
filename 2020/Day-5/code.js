const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

const findTheMiddle = (min, max, char) => {
   if (char === 'F' || char === 'L') {
      return [min, Math.floor((min + max) / 2)];
   } else if (char === 'B' || char === 'R') {
      return [Math.ceil((min + max) / 2), max];
   }
};

exports.firstStar = () => {
   let sum = [];

   for (let i = 0; i < data.length; i++) {
      let maxRow = 127;
      let maxCol = 7;
      let min = 0;
      const rowMap = data[i].substring(0, 7);
      const colMap = data[i].substring(7);

      for (let j = 0; j < rowMap.length; j++) {
         const char = rowMap[j];
         [min, maxRow] = findTheMiddle(min, maxRow, char);
         sum[i] = maxRow;
      }
      min = 0;
      for (let k = 0; k < colMap.length; k++) {
         const char = colMap[k];
         [min, maxCol] = findTheMiddle(min, maxCol, char);
      }
      sum[i] = sum[i] * 8 + maxCol;
   }

   const highValue = Math.max(...sum);

   console.log('DayFive-PartOne', highValue);
};

exports.secondStar = () => {
   let sum = 0;

   console.log('DayFive-PartTwo', sum);
};
