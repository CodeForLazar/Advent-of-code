const fs = require('fs');
const path = require('path');

const data = fs
   .readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
   .split('\n')
   .map((row) => row.trim().split(/\s+/).map(Number));

const splitColumns = () => {
   const leftColumn = data.map((row) => row[0]);
   const rightColumn = data.map((row) => row[1]);
   return [leftColumn, rightColumn];
};

exports.fistStar = () => {
   let sum = [];

   const [leftColumn, rightColumn] = splitColumns();

   leftColumn.sort();
   rightColumn.sort();

   for (let j = 0; j < leftColumn.length; j++) {
      const leftNum = leftColumn[j];
      const rightNum = rightColumn[j];
      sum.push(Math.abs(leftNum - rightNum));
   }
   sum = sum.reduce((acc, num) => {
      return acc + num;
   }, 0);

   console.log('Day1-PartOne', sum);
};

exports.secondStar = () => {
   let sum = [];
   let copies = {};

   const [leftColumn, rightColumn] = splitColumns();

   for (let i = 0; i < leftColumn.length; i++) {
      const leftNum = leftColumn[i];
      let matchFound = false;
      for (let j = 0; j < rightColumn.length; j++) {
         const rightNum = rightColumn[j];

         if (leftNum === rightNum) {
            copies[leftNum] = (copies[leftNum] || 0) + 1;
            matchFound = true;
         }
         if (!matchFound) {
            copies[leftNum] = 0;
         }
      }
      const [value, multi] = Object.entries(copies)[0];
      sum.push(+value * +multi);
      copies = {};
   }

   sum = sum.reduce((acc, num) => acc + num, 0);

   console.log('Day1-PartTwo', sum);
};
