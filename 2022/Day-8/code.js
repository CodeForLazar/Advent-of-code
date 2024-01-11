const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

const formatData = data.map((row) => row.split(''));

exports.firstStar = () => {
   let sum = formatData.length * 2 + (formatData[0].length - 2) * 2;

   for (let i = 0; i < formatData.length; i++) {
      const row = formatData[i];

      for (let j = 0; j < row.length; j++) {
         let top = true;
         let bottom = true;
         let left = true;
         let right = true;
         const target = row[j];

         if (!formatData[i + 1] || !formatData[i - 1] || !row[j + 1] || !row[j - 1]) {
            continue;
         }

         for (let d = i + 1; d < formatData.length; d++) {
            const testBottom = formatData[d][j];
            if (testBottom >= target) {
               bottom = false;
            }
         }

         for (let t = i - 1; t >= 0; t--) {
            const testTop = formatData[t][j];
            if (testTop >= target) {
               top = false;
            }
         }

         for (let r = j + 1; r < row.length; r++) {
            const testRight = row[r];
            if (target <= testRight) {
               right = false;
            }
         }

         for (let l = j - 1; l >= 0; l--) {
            const testLeft = row[l];
            if (target <= testLeft) {
               left = false;
            }
         }

         if (left || right || bottom || top) {
            sum += 1;
         }
      }
   }

   console.log('DayEight-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;

   console.log('DayEight-PartTwo', sum);
};
