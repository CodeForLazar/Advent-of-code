const fs = require('fs');
const path = require('path');

const data = fs
   .readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
   .split('\r\n')
   .map((num) => Number(num));

function findInvalidNumber(data, preambleLength) {
   for (let i = preambleLength; i < data.length; i++) {
      if (!isValidNumber(data, i, preambleLength)) {
         return data[i];
      }
   }
   return null;
}

function isValidNumber(data, currentIndex, preambleLength) {
   for (let j = currentIndex - preambleLength; j < currentIndex; j++) {
      for (let q = currentIndex - preambleLength; q < currentIndex; q++) {
         if (j === q) {
            continue;
         }
         const num1 = data[j];
         const num2 = data[q];
         const currentNum = data[currentIndex];
         if (num1 + num2 === currentNum) {
            return true;
         }
      }
   }
   return false;
}

exports.firstStar = () => {
   const preambleLength = 25;
   const invalidNumber = findInvalidNumber(data, preambleLength);
   console.log('DayNine-PartOne', invalidNumber);
};

exports.secondStar = () => {
   let sum = 0;
   const preambleLength = 25;
   const invalidNumber = findInvalidNumber(data, preambleLength);
   let startIdx = 0;
   let endIdx = 0;
   let stop = false;

   while (stop === false) {
      for (let i = startIdx; i < data.length; i++) {
         const num = data[i];
         sum += num;
         if (sum === invalidNumber) {
            endIdx = i + 1;
            stop = true;
            break;
         }
      }
      if (sum === invalidNumber) break;
      sum = 0;
      startIdx++;
   }

   sum = data.slice(startIdx, endIdx);
   const min = Math.min(...sum);
   const max = Math.max(...sum);

   console.log('DayNine-PartTwo', min + max);
};
